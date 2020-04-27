import Vue from 'vue';
import App from '@/app';
import router from './router';
import createStore from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store: createStore(),
  render: h => h(App)
}).$mount('#app');
