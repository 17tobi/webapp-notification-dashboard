<template>
  <div>
    <font-awesome-icon v-if="!showMenu" class="is-size-2" :icon="icons.menu"  />
    <div v-if="showMenu">
      <font-awesome-icon class="is-size-4" :icon="icons.settings" @mouseleave="showMenu = false"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Emit} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import ResponsiveChecks from "@/mixins/ResponsiveChecks.vue";
import Icon from "@/plugins/icons";

@Component({
  components: {}
})
export default class Menu extends mixins(ResponsiveChecks) {
  private icons = Icon;

  private showMenu: boolean = false;

}
</script>

<style lang="scss" scoped>
@import '/src/scss/variables';


</style>
