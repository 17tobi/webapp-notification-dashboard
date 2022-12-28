<template>
	<section class="hero has-bg-img is-fullheight">
		<div class="bg-image">
			<!--      <Background />-->
			<img alt="bg" :src="imgUrl" width="100%" />
		</diV>
		<div class="hero-head mt-5">
			<div class="container has-text-centered">
				<Clock :current-day="currentDay" :current-time="currentTime" :darkmode="darkMode"/>
				<Menu/>
			</div>
		</div>
		<div class="hero-body is-align-items-start mt-5">
			<Notifications />
		</div>
	</section>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import Clock from "@/components/Clock.vue";
import Background from "@/components/Background.vue";
import Menu from "@/components/Menu.vue";
import Vue from 'vue';
import Home from '@/views/Notifications.vue';
import Control from '@/views/Control.vue';
import Notifications from '@/components/Notifications.vue';

@Component({
	components: {Notifications, Control, Menu, Clock, Background}
})
export default class Dashboard extends Vue {

	private imgUrl: string = "https://raw.githubusercontent.com/17tobi/webapp-notification-dashboard/3d51824b751ff274dc1e6f5252b703d24c714df1/_bg-imgs/bg-day.svg";

	private currentTime: string = "";
	private currentDay: string = "";
	private darkMode: boolean = false;


	private mounted(): void {
		setInterval(() => {
			this.currentTime = this.$i18n.d(new Date(), 'timeShort');
			this.currentDay = this.$i18n.d(new Date(), 'customString');

			switch (new Date().getMonth()) {
				case 11:
					if (new Date().getUTCHours() < 15) {
						//day
						this.darkMode = false;
						this.imgUrl = "https://raw.githubusercontent.com/17tobi/webapp-notification-dashboard/3d51824b751ff274dc1e6f5252b703d24c714df1/_bg-imgs/bg-xmas-day.svg";
					} else {
						//night
						this.darkMode = true;
						this.imgUrl = "https://raw.githubusercontent.com/17tobi/webapp-notification-dashboard/3d51824b751ff274dc1e6f5252b703d24c714df1/_bg-imgs/bg-xmas-night.svg";
					}
					break;
				default:

					if (new Date().getUTCHours() < 16) {
						//day
						this.darkMode = false;
						this.imgUrl = "https://raw.githubusercontent.com/17tobi/webapp-notification-dashboard/3d51824b751ff274dc1e6f5252b703d24c714df1/_bg-imgs/bg-day.svg";
					} else {
						//night
						this.darkMode = true;
						this.imgUrl = "https://raw.githubusercontent.com/17tobi/webapp-notification-dashboard/3d51824b751ff274dc1e6f5252b703d24c714df1/_bg-imgs/bg-night.svg";
					}
					break;
			}

		}, 1000);
	}
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
