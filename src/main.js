import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';
import AlertPlugin from "./plugins/Flash";

Vue.config.productionTip = false
Vue.use(AlertPlugin)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
