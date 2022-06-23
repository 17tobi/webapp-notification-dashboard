import i18n from "@/plugins/i18n";
import router from "@/router";
import {RawLocation} from "vue-router";

export default class BrowserNotifications {

	private static currentPermission: NotificationPermission = 'default';

	private static notificationsSupported(): boolean {
		return 'Notification' in window;
	}

	private static async assertPermission(): Promise<void> {
		if (this.currentPermission === 'granted') {
			return;
		}

		if (this.currentPermission === 'default') {
			this.currentPermission = await Notification.requestPermission();
		}

		if (this.currentPermission === 'denied') {
			throw new Error('notification permission denied')
		}
	}

	public static notify(id: string, title: string, body: string | null = null, date: Date | null = null, route: RawLocation | null = null): void {
		if (!this.notificationsSupported()) return;
		if (date !== null) {
			const dateString = i18n.d(date, 'long');
			body = (body !== null ? body + '\n\n' : '') + dateString;
		}

		this.assertPermission().then(() => {
			const options: NotificationOptions = {
				lang: i18n.locale.substr(0, 2),
				body: body ?? undefined,
				tag: id ?? undefined,
				renotify: false,
				silent: true,
				icon: window.location.origin + '/favicon_asi.png',
				timestamp: date !== null ? date.getTime() : undefined,
				data: {
					route: route,
				},
			};

			const notification = new Notification(title, options);
			notification.onclick = (event: Event) => {
				const notification = event.target as Notification | undefined;
				if (notification === undefined) return;
				const route = notification.data?.route ?? null as RawLocation | null;

				if (route !== null) {
					router.push(route).catch(() => {
						//catching navigation to same route when already on own profile
					});
				}
			};
		});
	}

}
