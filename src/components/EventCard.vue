<template>
	<div class="m-3">
		<div class="is-event-card">
			<div class="is-event-card-icon">
				<div class="is-icon-wrapper" :class="'has-background-' + eventDepartmentLower + '-lighten'">
					<div class="is-flex is-flex-direction-column is-align-items-center">
						<DepartmentIcon :department="event.department"/>
						<span class="is-uppercase is-size-7" :class="'has-text-' + eventDepartmentLower">{{
								event.department
							}}</span>
					</div>
				</div>
			</div>
			<div class="is-event-card-content">
				<div class="is-flex is-flex-direction-column">
					<span class="is-size-3 has-text-black is-text-overflow-elipsis is-event-title">{{
							event.title
						}}</span>
					<div>
					<span class="has-text-weight-bold is-uppercase">
						{{ event.host }}
					</span>
						<span class="has-text-black is-text-overflow-elipsis">
						{{
								$d(timeStamp, 'timeShort') + ', ' + $d(timeStamp, 'dayMonthYear')
							}}
					</span>
					</div>
				</div>
			</div>
			<div v-if="showControls">
				<button @click="del(event.id)" class="has-background-danger has-text-white">X</button>
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

	@Prop({type: Boolean, default: false})
	public darkMode!: boolean;

	@Prop({type: Boolean, default: false})
	public showControls!: boolean;

	private get eventDepartmentLower(): string {
		return this.event.department.toLowerCase();
	}

  private get timeStamp(): Date {
    try {
      // correct format yyyy-mm-dd hh:mm:ss +0100 to yyyy-mm-dd hh:mm:ss+0100
      if (this.event.timestamp.includes(' +')) {
        this.event.timestamp = this.event.timestamp.replace(' +', '+');
      }
      return new Date(this.event.timestamp)
    } catch (e) {
      return new Date();
    }
  }

	@Emit('del')
	public del(id: number): number {
	    return id;
	}
}
</script>

<style lang="scss" scoped>
@import '/src/scss/variables';

.is-event-card {
	background-color: rgba(231, 231, 231, 0.6);
	backdrop-filter: blur(2px);

	margin-top: $box-offset;
	margin-left: $box-offset;

	width: 35rem;
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

	.is-event-title {
		line-height: 35px;
	}
}

.is-text-overflow-elipsis {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 420px;
}
</style>
