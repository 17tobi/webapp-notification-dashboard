export default class HyperlinkHelper {

	public static call(nr: string): void {
		const finalNumber = nr.replace(/\s/g, '');
		window.location.href = 'tel:' + finalNumber;
	}

	public static mail(email: string): void {
		window.location.href = 'mailto:' + email;
	}

	public static openUrl(url: string): void {
		const w = window.open(url, '_blank');
		if (w !== null) {
			w.focus();
		}
	}

	public static openMap(geocodingString: string): void {
		this.openUrl(`https://www.google.com/maps/search/?api=1&query=${geocodingString}`);
	}

}
