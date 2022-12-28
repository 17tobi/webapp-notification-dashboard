<template>
	<div>
		<Notifications show-controls @del="remove"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EventCard from '@/components/EventCard.vue';
import {IEventListEntry} from '@/models/EventModels';
import Notifications from '@/components/Notifications.vue';

@Component({
	components: {Notifications, EventCard}
})
export default class Control extends Vue {
	private events: IEventListEntry[] = [];


	private remove(id: number): void {
		console.log(id);
		let url = process.env.VUE_APP_API_BASE_URL + '/notification';
		fetch(url + '?token=' + process.env.VUE_APP_ACCESS_TOKEN + '&id=' + id,{
			method: 'DELETE'
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
			})
	}
}
</script>

<style lang="scss" scoped>
.test {
	background-color: red;
}
</style>
