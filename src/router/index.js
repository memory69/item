import Vue from 'vue';
import VueRouter from 'vue-router';
const Login = () => import('../views/login/Login.vue');
const CmFooter = () => import('../views/commenfooter/CmFooter.vue');
const Registered = () => import('../views/login/registered/Registered.vue');
const Forget = () => import('../views/login/forget/Forget.vue');
const Channel = () => import('../views/channel/Channel.vue');
const ProductIntroduce = () => import('../views/home/productintroduce/ProductIntroduce.vue');
const Test = () => import('../views/test.vue');
const Personal = () => import('../views/personal/Personal.vue');
const SetUp = () => import('../views/setup/SetUp.vue');
const Address = () => import('../views/address/Address.vue');
const AddAddress = () => import('../views/address/addaddress/AddAddress.vue');
const SubTag = () => import('../views/submitorders/subtag/SubTag.vue');
const Specific = () => import('../views/specific/Specific.vue')

import { Sku } from 'vant';
Vue.use(Sku);
Vue.use(VueRouter);

// const currentRoutes = [

// ];
// const nextRoutesOne = [

// ];
const routes = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cmfooter',
    name: 'CmFooter',
    component: CmFooter,
  },
  {
    path: '/specific',
    name: 'Specific',
    component: Specific,
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
