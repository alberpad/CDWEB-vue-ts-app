import Vue from 'vue';
import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

// Para reconocer axios de Vue.axios
// También se pudo usar // @ts-ignore
declare module 'vue/types/vue' {
  interface VueConstructor {
    axios: AxiosInstance;
  }
}

export namespace Http {
  export class ApiJwtService {
    constructor() {
      this.request();
      this.response();
    }
    protected request() {
      Vue.axios.interceptors.request.use((config: AxiosRequestConfig) => {
        console.log('AXIOS REQUEST');
        return config;
      }),
        (err: any) => {
          console.log('AXIOS REQUEST ERROR');
          return Promise.reject(err);
        };
    }
    protected response() {
      Vue.axios.interceptors.response.use((response: AxiosResponse) => {
        console.log('AXIOS REQUEST');
        return response;
      }),
        (err: any) => {
          console.log('AXIOS RESPONSE ERROR');
          return Promise.reject(err);
        };
    }
  }
}
