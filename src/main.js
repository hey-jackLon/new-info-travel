import Vue from 'vue';

import 'normalize.css/normalize.css';
import './styles/index.scss';
import ElmentUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/font/font.css';

import App from './App.vue';
import router from './router';
import store from './store';
import '@/icons';
// import './icons/svg/dashboard.svg';

Vue.config.productionTip = false;

Vue.use(ElmentUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
