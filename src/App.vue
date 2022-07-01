<template>
  <section class="hero has-bg-img is-fullheight">
    <div class="bg-image">
      <Background />
    </diV>
    <div class="hero-head mt-5">
      <div class="container has-text-centered">
        <Clock/>
        <Menu/>
      </div>
    </div>
    <div class="hero-body is-align-items-start mt-5">
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
	import {Component} from "vue-property-decorator";
  import Clock from "@/components/Clock.vue";
  import Background from "@/components/Background.vue";
  import Menu from "@/components/Menu.vue";
	import Vue from 'vue';

	@Component({
		components: {Menu, Clock, Background}
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
