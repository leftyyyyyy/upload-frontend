import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import vuetify from '@/plugins/vuetify';
import VueCookies from 'vue-cookies';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueCookies);
Vue.use(VeeValidate);
Vue.config.productionTip = false
Vue.use(BootstrapVue);


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
