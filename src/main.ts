import Vue from 'vue'
import './plugins/axios'
import './plugins/services'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import i18n from './plugins/i18n';
import './scss/index.scss';

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
