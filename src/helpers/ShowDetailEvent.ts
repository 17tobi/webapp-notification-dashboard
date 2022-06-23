export default class ShowDetailEvent {

	public id!: string;
	public originalEvent!: Event | null;

	public constructor(id: string, event: Event | null = null) {
		this.id = id;
		this.originalEvent = event;
	}

}
