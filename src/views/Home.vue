<template>
	<div>
		<div v-if="events.length > 0" class="is-custom-flex">
			<EventCard v-for="(event, index) in events" :key="index" :event="event" />
		</div>
	</div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import ResponsiveChecks from "@/mixins/ResponsiveChecks.vue";
import DepartmentIcon from "@/components/DepartmentIcon.vue";
import {Departments} from "@/helpers/constants";
import EventCard from "@/components/EventCard.vue";
import {IEventListEntry} from "@/models/EventModels";

@Component({
		components: {EventCard, DepartmentIcon}
	})
	export default class Home extends mixins(ResponsiveChecks) {
    private departments = Departments;

    private events: IEventListEntry[] = [];

	private mounted(): void {

		this.api( process.env.VUE_APP_API_BASE_URL + '/notifications').then((r: IEventListEntry[]) => this.events.push(...r));
		this.connect();
	}

	private api(url: string): Promise<IEventListEntry[]> {
		return fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
			})
	}

	public connect(): void {
		let self = this;
		let connection = new WebSocket(process.env.VUE_APP_WS_BASE_URL);
		connection.onmessage = (event) => {
			if (event.data.match('created: ')) {
				const newEvent = JSON.parse(event.data.replace('created: ', '')) as IEventListEntry;
				this.events.push(newEvent);
			} else if (event.data.match('deleted: ')) {
				const newEvent = JSON.parse(event.data.replace('deleted: ', '')) as IEventListEntry;
				const existing = this.events.find(e => e.title === newEvent.title);
				if (existing !== undefined) {
					const index = this.events.indexOf(existing);
					this.events.splice(index, 1);
				}
			}
		}
		connection.onclose = (e) => {
			setTimeout(function () {
				self.connect();
			}, 1000);
		};

		connection.onerror = (err) => {
			connection.close();
		};
	}

}


</script>

<style lang="scss" scoped>
.is-custom-flex {
	display: flex;
	flex-direction: column;
	gap: 1em;
	flex-wrap: wrap;
	max-height: 75vh;
}
</style>
