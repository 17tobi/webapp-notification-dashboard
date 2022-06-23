// noinspection ES6UnusedImports
import Vue from 'vue';
// noinspection ES6UnusedImports
import VueConstructor from 'vue-property-decorator';

import IAuthService from "@/services/definition/IAuthService";
import IUserService from "@/services/definition/IUserService";
import IEventService from "@/services/definition/IEventService";
import IInstaService from "@/services/definition/IInstaService";
import ISignupService from "@/services/definition/ISignupService";

declare module 'vue/types/vue' {
	interface Vue {
		$authService: IAuthService;
		$userService: IUserService;
		$eventService: IEventService;
		$instaService: IInstaService;
		$signupService: ISignupService;
	}
}

declare module 'vue/types/vue' {
	interface VueConstructor {
		$authService: IAuthService;
		$userService: IUserService;
		$eventService: IEventService;
		$instaService: IInstaService;
		$signupService: ISignupService;
	}
}
