import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Toast, Popup, Checkbox, CheckboxGroup, Search, Progress, Icon, Cell, CellGroup} from "vant";

Vue.use(Button).use(Toast).use(Popup).use(Checkbox).use(CheckboxGroup).use(Search).use(Progress).use(Icon).use(Cell).use(CellGroup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
