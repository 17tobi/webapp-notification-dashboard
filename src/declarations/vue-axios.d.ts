// noinspection ES6UnusedImports
import Vue from 'vue';
// noinspection ES6UnusedImports
import VueConstructor from 'vue-property-decorator';
import {AxiosInstance} from "axios";

declare module 'vue/types/vue' {
	interface Vue {
		$axios: AxiosInstance;
		axios: AxiosInstance;
	}
}

declare module 'vue/types/vue' {
	interface VueConstructor {
		$axios: AxiosInstance;
		axios: AxiosInstance;
	}
}
