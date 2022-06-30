<template>
    <svg v-if="department === departments.DEVOPS" :class="eventCategoryLower" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         :width="54 + 'px'" :height="54 + 'px'" viewBox="0 0 32 32" xml:space="preserve">
      <path d="M22.509,12.689l-6-3.55C16.352,9.046,16.176,9,16,9s-0.352,0.046-0.509,0.14l-6,3.55C9.187,12.869,9,13.196,9,13.55v6.9
        c0,0.354,0.187,0.681,0.491,0.86l6,3.55C15.648,24.954,15.824,25,16,25s0.352-0.046,0.509-0.14l6-3.55
        C22.813,21.131,23,20.804,23,20.45v-6.9C23,13.196,22.813,12.869,22.509,12.689z M21,19.88l-5,2.958l-5-2.958v-5.76l5-2.958l5,2.958
        V19.88z"/>
      <path d="M6,20.184V11.07l6.2-3.664l-1.017-1.722L4.491,9.639C4.187,9.819,4,10.146,4,10.5v9.684C2.839,20.598,2,21.698,2,23
        c0,1.654,1.346,3,3,3s3-1.346,3-3C8,21.698,7.161,20.598,6,20.184z M5,24c-0.551,0-1-0.448-1-1s0.449-1,1-1s1,0.448,1,1
        S5.551,24,5,24z"/>
      <path d="M27,20c-1.654,0-3,1.346-3,3c0,0.353,0.072,0.687,0.185,1.002L16,28.838l-6.404-3.784l-1.017,1.722l6.912,4.084
        C15.648,30.954,15.824,31,16,31s0.352-0.046,0.509-0.139l8.96-5.295C25.919,25.835,26.439,26,27,26c1.654,0,3-1.346,3-3
        S28.654,20,27,20z M27,24c-0.551,0-1-0.448-1-1s0.449-1,1-1s1,0.448,1,1S27.551,24,27,24z"/>
      <path d="M16,7c0.731,0,1.392-0.273,1.913-0.708L26,11.071V18h2v-7.5c0-0.354-0.187-0.681-0.491-0.861l-8.567-5.062
        C18.978,4.39,19,4.198,19,4c0-1.654-1.346-3-3-3s-3,1.346-3,3S14.346,7,16,7z M16,3c0.551,0,1,0.448,1,1s-0.449,1-1,1s-1-0.448-1-1
        S15.449,3,16,3z"/>
      <rect id="_x3C_Transparent_Rectangle_x3E__589_" class="st0" width="s" height="32"/>
    </svg>

    <svg v-else-if="department === departments.IBMI" :class="eventCategoryLower" id="icon" xmlns="http://www.w3.org/2000/svg" :width="54 + 'px'" :height="54 + 'px'" viewBox="0 0 32 32">
      <circle cx="9" cy="6" r="1"/>
      <path d="M26,10H6A2.0021,2.0021,0,0,1,4,8V4A2.0021,2.0021,0,0,1,6,2H26a2.0021,2.0021,0,0,1,2,2V8A2.0021,2.0021,0,0,1,26,10ZM6,4V8H26V4Z" transform="translate(0 0)"/>
      <circle cx="9" cy="16" r="1"/>
      <path d="M26,20H6a2.0021,2.0021,0,0,1-2-2V14a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,20ZM6,14v4H26V14Z" transform="translate(0 0)"/>
      <circle cx="9" cy="26" r="1"/>
      <path d="M26,30H6a2.0021,2.0021,0,0,1-2-2V24a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,30ZM6,24v4H26V24Z" transform="translate(0 0)"/>
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
    </svg>

    <svg v-else-if="department === departments.ICT" :class="department.toLowerCase()" id="icon" xmlns="http://www.w3.org/2000/svg" :width="54 + 'px'" :height="54 + 'px'" viewBox="0 0 32 32">
      <path d="M17,17h5.1421a4,4,0,1,0,0-2H17V7h5.1421a4,4,0,1,0,0-2H17a2.0023,2.0023,0,0,0-2,2v8H9.8579a4,4,0,1,0,0,2H15v8a2.0023,2.0023,0,0,0,2,2h5.1421a4,4,0,1,0,0-2H17Zm9-3a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,14ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM6,18a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,18Zm20,6a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,24Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32" transform="translate(32 32) rotate(180)"/>
    </svg>

    <svg v-else-if="department === departments.SOLUTIONS" :class="eventCategoryLower" :width="54 + 'px'" :height="54 + 'px'" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z"/>
      <path d="M23,10.41,21.59,9l-4.3,4.3a3,3,0,0,0-4,4L9,21.59,10.41,23l4.3-4.3a3,3,0,0,0,4-4ZM17,16a1,1,0,1,1-1-1A1,1,0,0,1,17,16Z"/>
      <circle cx="16" cy="7.5" r="1.5"/>
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
    </svg>

    <svg v-else-if="department === departments.SWE" :class="eventCategoryLower" :width="54 + 'px'" :height="54 + 'px'" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="31 16 24 23 22.59 21.59 28.17 16 22.59 10.41 24 9 31 16"/>
      <polygon points="1 16 8 9 9.41 10.41 3.83 16 9.41 21.59 8 23 1 16"/>
      <rect x="5.91" y="15" width="20.17" height="2" transform="translate(-3.6 27.31) rotate(-75)"/>
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32" transform="translate(0 32) rotate(-90)"/>
    </svg>
</template>

<script lang="ts">
import {Component, Prop, Emit} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import ResponsiveChecks from "@/mixins/ResponsiveChecks.vue";
import {Departments} from "@/helpers/constants";

@Component({
  components: {}
})
export default class DepartmentIcon extends mixins(ResponsiveChecks) {

  @Prop({type: String, required: true})
  public department!: Departments;

  @Prop({type: Number, default: 54})
  public size!: number;

	private get eventCategoryLower(): string {
		return this.department.toLowerCase();
	}

  private departments = Departments;

}
</script>

<style lang="scss" scoped>
@import '/src/scss/variables';
.st0{fill:none;}
.cls-1 {
  fill: none;
}

.devops {
  fill: $devops;
}

.ict {
  fill: $ict;
}

.swe {
  fill: $swe;
}

.ibmi {
  fill: $ibmi;
}

.solutions {
  fill: $sol;
}
</style>
