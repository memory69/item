<template>
  <div class="submit-orders">
    <!-- {{ value.length }} -->
    <div>
      <van-cell title="收货地址" is-link @click="address">
        <template #label>
          <p>{{ address1.name }}</p>
          <p>{{ address1.tel }}</p>
          <p>{{ address1.address }}</p>
        </template>
      </van-cell>
    </div>
    <van-cell-group>
      <!-- <van-cell title="优惠券" is-link value="没有可用优惠券" /> -->
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList" />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList1" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <van-card :num="currentnub" :price="price" desc="描述信息" title="商品标题" :thumb="imgUrl" />
      <van-cell title="邮费" value="￥10.00" value-class="color" />
      <van-field v-model="message" rows="1" autosize label="订单备注" type="textarea" placeholder="请输入备注" />
    </van-cell-group>
    <van-submit-bar :price="subprice" button-text="提交订单" @submit="onSubmit" />
    <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">
      <div style="text-align:center">
        <p style="font-size:60px;margin-top:30px"><span style="font-size:30px">￥</span>{{ subprice / 100 }}</p>
      </div>
      <van-cell-group>
        <van-cell title="支付宝账号" :value="user.username" />
        <van-cell title="付款方式" is-link value="支付宝" />
      </van-cell-group>
      <van-button type="info" style="width:100%;height:50px;position: absolute;left:0;bottom:0" @click="pay">立即付款</van-button>
    </van-popup>
    <!-- {{ user }} -->
    <!-- {{ currentnub }} -->

    <!-- 数字键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    <van-overlay :show="isshow" @click="isshow = false">
      <div class="wrapper" @click.stop>
        <div class="block" style="width:70%;border-radius:20px">
          <!-- 密码输入框 -->
          <van-password-input :value="value" info="请输入支付密码" :focused="showKeyboard" @focus="showKeyboard = true" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Toast } from 'vant';
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
export default {
  name: 'SubmitOrders',
  data() {
    return {
      isshow: false,
      show: false,
      // price: 3050,
      dec: 0,
      subprice: 0,
      price: 0,
      imgUrl: '',
      message: '',
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      show: false,
      showList1: false,
      value: '',
      showKeyboard: false,
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit('setActive', 1);
      this.show = true;
    },

    address() {
      this.$router.push('/address');
    },
    onChange(index) {
      this.showList1 = false;
      this.chosenCoupon = index;
      // console.log(this.dec);
      // console.log(coupon.value);
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    showList() {
      // this.show = true;
      this.showList1 = true;
    },
    dele() {
      this.subprice = parseInt(this.detail.retailPrice + '00') * this.currentnub + 1000;
    },
    pay() {
      // Toast('111');
      this.isshow = true;
      this.show = false;
      this.showKeyboard = true;
      this.$store.commit('setActive', 2);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
  },
  created() {
    this.imgUrl = this.detail.picUrl;
    this.price = parseInt(this.detail.retailPrice * this.currentnub);
    this.dele();
    this.value = '';
  },
  computed: {
    detail() {
      return this.$store.state.detail;
    },
    currentnub() {
      return this.$store.state.buynub;
    },
    address1() {
      return this.$store.state.address;
    },
    user() {
      return this.$store.state.user;
    },
  },
  watch: {
    chosenCoupon() {
      if (this.chosenCoupon == -1) {
        this.dele();
      } else {
        var currentcopons = this.coupons.filter((item, index) => {
          return index == this.chosenCoupon;
        });
        // console.log(currentcopons);
        currentcopons.forEach((res) => (this.subprice = this.subprice - res.value));
      }
    },
    show() {
      // console.log(this.show);
      if (this.show == false && this.isshow == false) {
        this.$store.commit('setActive', 0);
      }
    },
    value() {
      if (this.value.length == 6) {
        this.isshow = false;
        this.showKeyboard = false;
        Toast('支付成功');
      }
      if (this.value.length == 6 && this.show == false && this.isshow == false) {
        this.$store.commit('setActive', 3);
      }
    },
  },
};
</script>

<style scoped>
.submit-orders {
  width: 100%;
  box-sizing: border-box;
  background: #eeeeee;
}
.van-cell-group {
  margin-top: 10px;
}
.color {
  color: red;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
