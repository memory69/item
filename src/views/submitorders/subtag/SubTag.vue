<template>
  <div class="sub-tag">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- {{ active }} -->
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>提交订单</van-step>
      <van-step>买家付款</van-step>
      <van-step>等待收货</van-step>
    </van-steps>
    <submit-orders v-show="active == 0 || active == 1 || active == 2"></submit-orders>
    <!-- <div v-show="active == 2">111111</div> -->
    <van-empty v-show="active == 3" description="快去购买其他宝贝吧">
      <p style="font-size:14px;text-decoration: underline;" @click="back">寻找其他宝贝商品</p>
    </van-empty>
    <!-- {{ active }} -->
  </div>
</template>

<script>
import SubmitOrders from '../SubmitOrders';
export default {
  name: 'SubTag',
  data() {
    return {
      //   active: 0,
    };
  },
  //   created() {
  //     this.active = this.actives;
  //   },
  //   watch: {
  //     active() {
  //       this.active = this.actives;
  //     },
  //   },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    back() {
      this.$router.push('/cmfooter');
    },
  },
  computed: {
    active() {
      return this.$store.state.active;
    },
  },
  components: {
    SubmitOrders,
  },
};
</script>

<style scoped>
.sub-tag {
  width: 100%;
  box-sizing: border-box;
}
</style>
