import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/common.css';
//lodash.js
import _ from 'lodash';
Vue.prototype._ = _

import { request, myrequest } from './network/request';
Vue.prototype.request = request;
Vue.prototype.myrequest = myrequest;

//axios
import axios from 'axios';
Vue.prototype.$axios = axios;
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '../node_modules/swiper/swiper-bundle.min.css';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
//elementui
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//vant
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant';
// import { from } from 'core-js/fn/array';
Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
