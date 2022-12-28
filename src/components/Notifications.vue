<template>
	<div>
		<div v-if="events.length > 0" class="is-custom-flex">
			<EventCard  v-for="(event, index) in events" :key="index" :event="event" :show-controls="showControls" @del="del" />
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Emit, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import ResponsiveChecks from '@/mixins/ResponsiveChecks.vue';
import DepartmentIcon from '@/components/DepartmentIcon.vue';
import {Departments} from '@/helpers/constants';
import EventCard from '@/components/EventCard.vue';
import {IEventListEntry, IEventSimple} from '@/models/EventModels';

@Component({
	components: {EventCard, DepartmentIcon}
})
export default class Notifications extends mixins(ResponsiveChecks) {

	@Prop({type: Boolean, default: false})
	public darkMode!: boolean;

	@Prop({type: Boolean, default: false})
	public showControls!: boolean;

	@Emit('del')
	public del(id: number): number {
	    return id;
	}

	private departments = Departments;

	private events: IEventListEntry[] = [];

	private get dummyEvent(): IEventSimple {
		return {
			id: 1,
			department: Departments.DEVOPS,
			timestamp: new Date().toDateString(),
			title: 'herbscht',
			host: 'HSRV02'
		}
	}

	private mounted(): void {
		this.api(process.env.VUE_APP_API_BASE_URL + '/notifications').then((r: IEventListEntry[]) => this.events.push(...r));
		this.connect();
	}

	private api(url: string): Promise<IEventListEntry[]> {
		return fetch(url + '?token=' + process.env.VUE_APP_ACCESS_TOKEN)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
			})
	}

	public connect(): void {
		let self = this;
		let connection = new WebSocket(process.env.VUE_APP_WS_BASE_URL + '/messages');
		//let connection = new WebSocket('ws://localhost:8080/messages');
		connection.onmessage = (event) => {
			let json = JSON.parse(event.data);
			console.log(json);
			if (json.hasOwnProperty('CREATE')) {
				console.log(json.CREATE);
				this.events.push(json.CREATE as IEventListEntry);
			} else if (json.hasOwnProperty('DELETE')) {
				const newEvent = json.DELETE as IEventListEntry;
				const existing = this.events.find(e => e.id === newEvent.id);
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
			console.log(err);
			connection.close();
		};
	}

};


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
