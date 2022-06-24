<template>
  <section class="hero has-bg-img is-fullheight">
    <div class="hero-head mt-5">
      <div class="container has-text-centered">
        <Clock/>
        <Menu/>
      </div>
    </div>
    <div class="hero-body">
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
	import {Component} from "vue-property-decorator";
  import Clock from "@/components/Clock.vue";
  import Menu from "@/components/Menu.vue";
	import Vue from 'vue';

	@Component({
		components: {Menu, Clock}
	})
	export default class App extends Vue {

	}
</script>

<style lang="scss" scoped>

body {
  font-family: 'Roboto';

	.has-bg-img {
		background: url('@/assets/bg/night.svg')center center; background-size:cover;
	}
}

</style>
