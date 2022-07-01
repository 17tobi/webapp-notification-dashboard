<template>
  <div class="is-flex is-flex-direction-column is-align-items-center is-align-content-space-around">
    <span class="is-clock">{{ currentTime }}</span>
    <span class="is-date is-size-4 ">{{ currentDay }}</span>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Emit} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import ResponsiveChecks from "@/mixins/ResponsiveChecks.vue";

@Component({
  components: {}
})
export default class Clock extends mixins(ResponsiveChecks) {

  private currentTime: string = "";
  private currentDay: string = "";

  private mounted(): void {
    setInterval(() => {
      this.currentTime = this.$i18n.d(new Date(), 'timeShort');
      this.currentDay = this.$i18n.d(new Date(), 'customString');
    }, 1000);
  }

}
</script>

<style lang="scss" scoped>
@import '/src/scss/variables';

@font-face {
	font-family: 'Directo';
	src: local('Directo'), url(../fonts/directo.ttf) format('truetype');
}

@font-face {
	font-family: 'Myriad';
	src: local('Myriad'), url(../fonts/myriad.otf) format('opentype');
}

.is-clock {
	color: #f7941e;
    font-family: 'Directo', cursive;
	text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
	font-size: 6em;
}

.is-date {
	font-family: 'Myriad', cursive;
	color: #f7941e;
	margin-top: -20px;
}

</style>
