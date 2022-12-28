<template>
	<div class="is-flex is-flex-direction-column is-align-items-center is-align-content-space-around">
		<span class="is-clock" :class="{'has-text-white': darkmode}">{{ currentTime }}</span>
		<span class=" is-date is-size-4 " :class="{'has-text-white': darkmode}">{{ currentDay }}</span>
	</div>
</template>

<script lang="ts">
import {Component, Prop, Emit} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import ResponsiveChecks from '@/mixins/ResponsiveChecks.vue';

@Component({
	components: {}
})
export default class Clock extends mixins(ResponsiveChecks) {

	@Prop({type: String, default: ''})
	public currentTime!: string;

	@Prop({type: String, default: ''})
	public currentDay!: string;

	@Prop({type: Boolean, default: false})
	public darkmode!: boolean;

}
</script>

<style lang="scss" scoped>
@import '/src/scss/variables';

.is-clock {
	font-family: 'Audiowide', cursive;
	text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
	font-size: 6em;
}

.is-date {
	margin-top: -20px;
}

</style>
