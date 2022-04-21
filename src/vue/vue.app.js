import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./main.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    el: "#vue",
    render() {
      return h(App);
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
