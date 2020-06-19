import Vue from "vue";
import App from "./App.vue";
import BaseIcon from "@/components/BaseIcon";
import BaseTag from "@/components/BaseTag";
import BaseButton from "@/components/BaseButton";
import Vuemq from "vue-mq";

const components = {
  BaseIcon: BaseIcon,
  BaseTag: BaseTag,
  BaseButton: BaseButton
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);

Vue.config.productionTip = false;

Vue.use(Vuemq, {
  breakpoints: {
    mobile: 415,
    md: 599,
    tablet: 769,
    dekstop: Infinity
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
