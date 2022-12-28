<template>
  <div>
	  <router-view />
  </div>
</template>

<script lang="ts">
	import {Component} from "vue-property-decorator";
  import Clock from "@/components/Clock.vue";
  import Background from "@/components/Background.vue";
  import Menu from "@/components/Menu.vue";
	import Vue from 'vue';
	import Home from '@/views/Notifications.vue';
	import Control from '@/views/Control.vue';

	@Component({
		components: {Control, Menu, Clock, Background}
	})
	export default class App extends Vue {


	}
</script>

<style lang="scss" scoped>

body {
  font-family: 'Roboto';

	.has-bg-img {

		max-height: 100vh;
		overflow-y: hidden;
    > .bg-image {
      position: absolute;
      left:0;
      top: 0;
      width: 100%;
      height: 100%;
      > background {
        width: 100%;
        height: 100%;
      }
    }
	}
}

</style>
