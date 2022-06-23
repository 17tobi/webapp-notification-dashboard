<template>
  <div>
    <span class="is-size-1">{{ currentTime }}</span>
    <p>{{ currentDay }}</p>
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

span {
  font-family: 'Audiowide', cursive;
}

</style>
