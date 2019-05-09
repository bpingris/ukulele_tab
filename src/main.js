import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuetifyConfirm from "vuetify-confirm";

import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(VuetifyConfirm, {
  buttonTrueText: "Oui",
  buttonFalseText: "Non"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
