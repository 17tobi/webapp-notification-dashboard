import Vue from 'vue';
import VueRouter, {NavigationGuardNext, Route, RouteConfig} from 'vue-router';
import {Routes} from "@/helpers/constants";
import i18n from "@/plugins/i18n";
import store from '@/store/index';
import Home from "@/views/Notifications.vue";
import Debug from "@/views/debug/Debug.vue";
import {Position} from "vue-router/types/router";
import Control from '@/views/Control.vue';
import Dashboard from '@/views/Dashboard.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: Routes.dashboard,
		component: Dashboard,
		meta: {
			title: 'pageTitles.dashboard',
		},
		alias: ['/dashboard', '']
	},
	{
		path: '/control',
		name: Routes.control,
		component: Control,
		meta: {
			title: 'pageTitles.control',
		},
	},
	{
		path: '/debug',
		name: Routes.debug,
		component: Debug,
		meta: {
			title: 'pageTitles.debug',
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	linkExactActiveClass: 'is-active-nav-item',
	// @ts-ignore
	scrollBehavior(to: Route, from: Route, savedPosition: Position | void) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	}
})

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
	//set page title
	let title = i18n.t('pageTitles.application').toString();
	if (to.meta && to.meta.title) {
		title = i18n.t(to.meta.title).toString() + ' | ' + title;
	}
	document.title = title;


	next();
});

export default router
