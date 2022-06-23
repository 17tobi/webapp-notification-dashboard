"use strict";

import axios from "axios";
import Vue, {PluginObject} from 'vue';
import store from '../store'
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
/*axios.defaults.headers.common['Authorization'] = "";*/
axios.defaults.headers.post['Content-Type'] = 'application/json';

const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    /*const token = store.state.user.token;
    if (token && !config.headers.Authorization) {
       config.headers.Authorization = `${token}`;
    }*/
    // const connectionId = store.state.bus.connectionId;
    // if (connectionId !== null) {
    //   config.headers['bus-connection-id'] = connectionId;
    // }
//      store.commit('ui/addLoading');

    return config;
  },
  function (error) {
    // Do something with request error
//      store.commit('ui/reduceLoading');
    return Promise.reject(error);
  }
);

let failedRequests = [] as { resolve: any; reject: any }[];
const processFailedRequests = (error: any, token: string | null = null) => {
  failedRequests.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedRequests = [];
};

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    // store.commit('ui/reduceLoading');
    return response;
  },
  function (error) {
    // store.commit('ui/reduceLoading');
    // reject if either status code doesn't match, auth/refresh failed or token-expired header is not present
    const tokenExpired = error.response.headers['token-expired'];
    if (error.response.status !== 401 || error.config.url.toLowerCase().includes('auth/refresh') || error.config.url.toLowerCase().includes('auth/logout') || !tokenExpired) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // if (store.state.user.isAxiosRefreshingToken) {
    //   return new Promise(function (resolve, reject) {
    //     failedRequests.push({resolve, reject})
    //   }).then(token => {
    //     error.config.headers['Authorization'] = `Bearer ${token}`;
    //     return _axios(error.config);
    //   }).catch(err => {
    //     return Promise.reject(err);
    //   })
    // }

    store.commit('user/setIsAxiosRefreshingToken', true);
    return store.dispatch('user/refreshToken')
      .then(() => {
        const config = error.config;
        // const token = store.state.user.token;
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        // processFailedRequests(null, token);

        return new Promise((resolve, reject) => {
          _axios.request(config).then(response => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
        });
      })
      .catch((error) => {
        processFailedRequests(error, null);
        Promise.reject(error);
      })
      .finally(() => {
        store.commit('user/setIsAxiosRefreshingToken', false);
      });
  }
);


const Plugin = {
  install: function (vueInstance: typeof Vue): void {
    vueInstance.$axios = _axios;

    (window as any).axios = _axios;
    Object.defineProperties(vueInstance.prototype, {
      axios: {
        get() {
          return _axios;
        }
      },
      $axios: {
        get() {
          return _axios;
        }
      },
    });
  }
} as PluginObject<any>;


Vue.use(Plugin.install)
export default Plugin;

