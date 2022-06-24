// noinspection ES6UnusedImports
import Vue from 'vue';
// noinspection ES6UnusedImports
import VueConstructor from 'vue-property-decorator';
import IEventService from "@/services/definition/IEventService";

declare module 'vue/types/vue' {
	interface Vue {
		$eventService: IEventService
	}
}

declare module 'vue/types/vue' {
	interface VueConstructor {
		$eventService: IEventService;
	}
}
