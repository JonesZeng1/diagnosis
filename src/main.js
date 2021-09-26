import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Toast, Popup, Search, Progress, Icon, Cell, CellGroup, DropdownMenu, DropdownItem, Loading} from "vant";

Vue.use(Button).use(Toast).use(Popup).use(Search).use(Progress).use(Icon).use(Cell).use(CellGroup).use(DropdownMenu).use(DropdownItem).use(Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
