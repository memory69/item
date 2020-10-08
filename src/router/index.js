import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store';
import Login from '../views/login/Login.vue';
import CmFooter from '../views/commenfooter/CmFooter.vue';
import Registered from '../views/login/registered/Registered.vue';
import Forget from '../views/login/forget/Forget.vue';
// import Home from '../views/home/Home.vue';
import Channel from '../views/channel/Channel.vue';
import ProductIntroduce from '../views/home/productintroduce/ProductIntroduce.vue';
import Test from '../views/test.vue';
// import SubmitOrders from '../views/submitorders/SubmitOrders.vue';
import Personal from '../views/personal/Personal.vue';
import SetUp from '../views/setup/SetUp.vue';
import Address from '../views/address/Address.vue';
import AddAddress from '../views/address/addaddress/AddAddress.vue';
import SubTag from '../views/submitorders/subtag/SubTag.vue';

import { Sku } from 'vant';
Vue.use(Sku);
Vue.use(VueRouter);

// const currentRoutes = [

// ];
// const nextRoutesOne = [

// ];
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cmfooter',
    name: 'CmFooter',
    component: CmFooter,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/subtag',
    name: 'SubTag',
    component: SubTag,
  },
  {
    path: '/setup',
    name: 'SetUp',
    component: SetUp,
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
  },
  {
    path: '/addaddress',
    name: 'AddAddress',
    component: AddAddress,
  },
  {
    path: '/registered',
    name: 'Registered',
    component: Registered,
  },
  {
    path: '/forgetmi',
    name: 'Forget',
    component: Forget,
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
  },

  {
    path: '/channel/:id',
    name: 'Channel',
    component: Channel,
  },
  {
    path: '/detail/:id',
    name: 'ProductIntroduce',
    component: ProductIntroduce,
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.path == '/') {
//     next();
//   } else {
//     if (store.state.user.id) {
//       router.addRoutes(nextRoutesOne);
//       next();
//     } else {
//       next();
//     }
//   }
// });
export default router;
