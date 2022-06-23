import Vue from 'vue';
import {PluginObject} from "vue/types/umd";


const Plugin = {
	install: function (vueInstance: typeof Vue): void {

	}
} as PluginObject<any>;


Vue.use(Plugin.install)
export default Plugin;
