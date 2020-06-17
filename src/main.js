import Vue from "vue";
import App from "./App.vue";
import BaseIcon from "@/components/BaseIcon";
import BaseTag from "@/components/BaseTag";
import BaseButton from "@/components/BaseButton";

const components = {
  BaseIcon: BaseIcon,
  BaseTag: BaseTag,
  BaseButton: BaseButton
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
