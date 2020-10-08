<template>
  <div class="personal">
    <div class="top">
      <van-icon name="setting-o" @click="setup" />
      <img src="../../assets/header-pc.png" alt />
      <p>{{ title.username }}</p>
    </div>
    <div class="main">
      <van-cell title="我的订单" is-link value="全部订单" />
      <van-grid>
        <van-grid-item icon="debit-pay" text="待付款" />
        <van-grid-item icon="point-gift-o" text="待发货" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="sign" text="已完成" />
      </van-grid>
    </div>
    <div class="next">
      <van-cell title="我的优惠券" is-link value="全部优惠券" />
      <van-grid column-num="3">
        <van-grid-item icon="photo-o" text="待使用" />
        <van-grid-item icon="photo-o" text="已使用" />
        <van-grid-item icon="photo-o" text="过期" />
      </van-grid>
    </div>
    <div style="margin-top:10px">
      <van-cell title="我的收藏" icon="star-o" is-link />
      <van-cell title="收货地址" icon="location-o" is-link />
      <van-cell title="服务中心" icon="service-o" is-link />
    </div>
    <!-- <cm-footer></cm-footer> -->
  </div>
</template>

<script>
// import CmFooter from '../commenfooter/CmFooter';
export default {
  name: 'Personal',
  computed: {
    title() {
      return this.$store.state.user;
    },
  },
  methods: {
    setup() {
      this.$router.push('setup');
    },
  },
  components: {},
};
</script>

<style scoped>
.personal {
  width: 100%;
  box-sizing: border-box;
  background: #eeeeee;
}

.top {
  width: 100%;
  height: 150px;
  background-image: url('../../assets/user_head_bg.png');
  text-align: center;
  position: relative;
}
.top img {
  width: 70px;
  border-radius: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -35px;
  margin-left: -35px;
  /* text-align: center; */
}
.top .van-icon {
  position: absolute;
  right: 10px;
  top: 10px;
}
.top p {
  color: white;
  padding-top: 125px;
}
.main {
  margin-top: 10px;
}
.next {
  margin-top: 10px;
}
</style>
