<template>
  <div class="cm-footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <home v-show="active == 0" />
    <buy-car v-show="active == 2" />
    <personal v-show="active == 3" />
    <classification v-show="active == 1" />
  </div>
</template>

<script>
import Home from '../home/Home';
import Personal from '../personal/Personal';
import BuyCar from '../buycar/BuyCar';
import Classification from '../classification/Classification';
export default {
  name: 'CmFooter',
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
  components: {
    Home,
    Personal,
    BuyCar,
    Classification,
  },
};
</script>

<style lang="scss" scoped>
.cm-footer .van-tabbar {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  left: 0;
  bottom: 0;
}
</style>
