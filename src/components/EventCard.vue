<template>
	<div>
		<div class="is-event-card">
			<div class="is-event-card-icon">
				<div class="is-icon-wrapper" :class="'has-background-' + eventCategoryLower + '-lighten'">
					<div class="is-flex is-flex-direction-column is-align-items-center">
						<DepartmentIcon :department="event.category"/>
						<span class="is-uppercase is-size-7" :class="'has-text-' + eventCategoryLower">{{
								event.category
							}}</span>
					</div>
				</div>
			</div>
			<div class="is-event-card-content">
				<span class="is-size-3 is-text-weight-bold has-text-black is-text-overflow-elipsis">{{ event.title }}</span>
				<span class="has-text-black is-text-overflow-elipsis">{{
						$d(new Date(event.ts), 'timeShort') + ', ' + $d(new Date(event.ts), 'dayMonthYear')
					}}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Prop, Emit} from 'vue-property-decorator';
import {Departments} from '@/helpers/constants';
import DepartmentIcon from '@/components/DepartmentIcon.vue';
import {IEventListEntry} from '@/models/EventModels';
import Vue from 'vue';

@Component({
	components: {DepartmentIcon}
})
export default class EventCard extends Vue {
	@Prop({type: Object, required: true})
	public event!: IEventListEntry;

	private get eventCategoryLower(): string {
		return this.event.category.toLowerCase();
	}
}
</script>

<style lang="scss" scoped>
@import '/src/scss/variables';

.is-event-card {
	background-color: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(2px);

	margin-top: $box-offset;
	margin-left: $box-offset;

	width: 30rem;
	max-width: 500px;
	border-radius: $radius;
	display: flex;
	flex-direction: row;

	.is-event-card-icon {
		position: relative;
		top: -$box-offset;
		left: -$box-offset;

		.is-icon-wrapper {
			-webkit-box-shadow: 4px 4px 50px 25px rgba(0, 0, 0, 0.25);
			box-shadow: 2.5px 2.5px 20px 10px rgba(0, 0, 0, 0.25);

			border-radius: $radius;
			height: 77px;
			width: 77px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 5px;
		}
	}

	.is-event-card-content {
		padding: $box-offset/2 $box-offset $box-offset/2 0;
		display: flex;
		flex-direction: column;

	}

	.is-text-overflow-elipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 400px;
	}
}
</style>
