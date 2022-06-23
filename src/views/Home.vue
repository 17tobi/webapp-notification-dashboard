<template>
	<div>
    <EventCard :department="departments.DEVOPS" title="Test" date="17:17, 23.08.2022" />
    <EventCard :department="departments.ICT" title="Test" date="17:17, 23.08.2022" />
    <EventCard :department="departments.SWE" title="Test" date="17:17, 23.08.2022" />
    <EventCard :department="departments.SOLUTIONS" title="Test" date="17:17, 23.08.2022" />
    <EventCard :department="departments.IBMI" title="Test" date="17:17, 23.08.2022" />
	</div>
</template>

<script lang="ts">
	import {Component} from "vue-property-decorator";
  import {mixins} from "vue-class-component";
  import ResponsiveChecks from "@/mixins/ResponsiveChecks.vue";
  import DepartmentIcon from "@/components/DepartmentIcon.vue";
  import {Departments} from "@/helpers/constants";
  import EventCard from "@/components/EventCard.vue";

	@Component({
		components: {EventCard, DepartmentIcon}
	})
	export default class Home extends mixins(ResponsiveChecks) {
    private departments = Departments;
	}
</script>

<style lang="scss" scoped>

</style>
