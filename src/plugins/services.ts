import Vue from 'vue';
import {PluginObject} from "vue/types/umd";
import AxiosEventService from '@/services/implementation/AxiosEventService';

const eventService = new AxiosEventService();

const Plugin = {
	install: function (vueInstance: typeof Vue): void {
		vueInstance.$eventService = eventService;

		Object.defineProperties(vueInstance.prototype, {
			$authService: {
				get() {
					return eventService;
				}
			},
		});
	}
} as PluginObject<any>;


Vue.use(Plugin.install)
export default Plugin;
