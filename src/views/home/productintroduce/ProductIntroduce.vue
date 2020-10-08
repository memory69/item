<template>
  <div class="product-introduce">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image width="10rem" height="10rem" fit="cover" :src="detail.picUrl" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="10rem" height="10rem" fit="cover" :src="detail.picUrl" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="10rem" height="10rem" fit="cover" :src="detail.picUrl" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="10rem" height="10rem" fit="cover" :src="detail.picUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="detail-meun">
      <p>
        <span>￥{{ detail.retailPrice }}</span>
        <span style=" text-decoration: line-through; padding-left:10px;font-size:13px;color:#ddd">￥{{ detail.counterPrice }}</span>
      </p>
      <p>{{ detail.name }}</p>
      <p>{{ detail.brief }}</p>
    </div>

    <div class="cell-group">
      <van-cell-group>
        <van-cell title="规格" is-link value="请选择" />
        <van-cell title="属性" is-link value />
        <van-cell title="运费" is-link value="满88免邮费" />
      </van-cell-group>
    </div>
    <div class="shop-detail">
      <van-nav-bar title="商品详情" />
      <van-skeleton title :row="4" />
    </div>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goods.goodsId"
      @stepper-change="onnub"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <!-- <div style="height:800px"></div> -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="currentnub" />
      <van-goods-action-icon icon="star-o" text="已收藏" @click="handleStar" :color="color" />
      <van-goods-action-button type="warning" @click="showPopup" text="加入购物车" />
      <van-goods-action-button type="danger" @click="showPopup" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'ProductIntroduce',
  data() {
    return {
      nub: '',
      currentnub: '',
      color: '',
      i: '',
      show: false,
      goods: {
        picture: '',
        goodsId: '',
      },
      sku: {
        tree: [],

        list: [],
        price: '', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
      },
    };
  },
  methods: {
    onnub(value) {
      // console.log(value);
      this.nub = value;
      this.$store.commit('setBuyNub', value);
    },
    onClickLeft() {
      this.$router.push('/cmfooter');
    },
    showPopup() {
      this.show = true;
    },
    handleStar() {
      if (this.color == '#ff5000') {
        this.color = '';
      } else {
        this.color = '#ff5000';
      }
    },
    onBuyClicked() {
      this.$router.push('/subtag');
      this.$store.commit('setActive', 0);
    },
    onAddCartClicked() {
      this.currentnub = this.nub;
      this.show = false;
      this.$store.commit('setBuyCar', this.detail);
      // console.log( item);
      // this.$axios.get('http://122.51.199.160:8080/wx/home/index').then((res) => {
      //   console.log(res);
      // });
    },
  },
  created() {
    this.goods.goodsId = this.detail.id;
    this.goods.picture = this.detail.picUrl;
    this.goods.goodsId = this.detail.id;
    this.sku.price = this.detail.retailPrice;
    // console.log(this.sku.picture);
  },
  computed: {
    detail() {
      return this.$store.state.detail;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-introduce {
  width: 100%;
  box-sizing: border-box;
  // height: 200px;
  background: #eee;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}
.van-goods-action {
  position: fixed;
  left: 0;
  bottom: 0;
}
.detail-meun {
  width: 100%;
  // height: 200px;
  box-sizing: border-box;
  padding: 10px;
  // border: 1px solid red;
  background: white;
}
.detail-meun p {
  padding: 5px 0;
}
.detail-meun p span:first-of-type {
  font-size: 20px;
  color: red;
}
.detail-meun p:nth-of-type(2) {
  font-size: 15px;
}
.detail-meun p:last-of-type {
  font-size: 13px;
  color: #ddd;
}
.cell-group {
  width: 100%;
  box-sizing: border-box;
  margin-top: 15px;
}
.shop-detail {
  width: 100%;
  margin-top: 15px;
  box-sizing: border-box;
  background: white;
}
.shop-detail .van-skeleton {
  margin-top: 10px;
  // background: white;
  margin-bottom: 50px;
}
</style>
