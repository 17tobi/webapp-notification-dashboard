import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export interface State {
}

const store = new Vuex.Store<State>({
	mutations: {},
	actions: {},
	modules: {
	},
	plugins: [
		createPersistedState({
			storage: window.localStorage,
			key: 'dash-store',
		}),
	]
});

export default store;
