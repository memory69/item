<template>
  <div class="product-introduce">
    <!-- {{ goods }} -->
    <!-- {{ goods1.detail }} -->
    <!-- <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <van-icon class="icon" name="arrow-left" @click="onClickLeft" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in goods.info.gallery">
        <van-image width="100%" height="100%" :src="item" />
      </van-swipe-item>
    </van-swipe>
    <div class="detail-meun">
      <p>
        <span>￥{{ goods.info.retailPrice }}</span>
        <span style=" text-decoration: line-through; padding-left:10px;font-size:13px;color:#ddd">￥{{ goods.info.counterPrice }}</span>
      </p>
      <p>{{ goods.info.name }}</p>
      <p>{{ goods.info.brief }}</p>
    </div>

    <div class="cell-group">
      <van-cell-group>
        <van-cell title="规格" is-link value="请选择" @click="showPopup" />
        <van-cell title="属性" is-link value />
        <van-cell title="运费" is-link value="满88免邮费" />
      </van-cell-group>
    </div>

    <div class="shop-detail">
      <div class="shop-title">商品详情</div>
      <div class="item-detail" v-if="goods.info.detail" v-html="goods.info.detail"></div>
      <div class="item-detail" v-else style="text-align: center;">
        <p>无详情</p>
        <!-- {{}} -->
      </div>
    </div>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="skuGoods"
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
import { goodsDetail } from '../../../network/request';
export default {
  name: 'ProductIntroduce',
  data() {
    return {
      id: '',
      nub: '',
      currentnub: '',
      color: '',
      i: '',
      show: false,
      goods: {
        userHasCollect: 0,
        info: {
          gallery: [],
        },
      },
      sku: {
        tree: [],
        list: [],
        price: '',
      },
      skuGoods: {
        title: '',
        picture: '',
      },
    };
  },
  methods: {
    skuAdapter() {
      const tree = this.setSkuTree();
      const list = this.setSkuList();
      const skuInfo = {
        price: parseInt(this.goods.info.retailPrice),
        stock_num: 0,
        collection_id: '',
        none_sku: false,
        hide_stock: true,
      };
      this.sku = {
        tree,
        list,
        ...skuInfo,
      };
      this.skuGoods = {
        title: this.goods.info.name,
        picture: this.goods.info.picUrl,
      };
    },
    setSkuTree() {
      let that = this;
      let specifications = [];
      _.each(this.goods.specificationList, (res, k) => {
        let values = [];
        _.each(res.valueList, (item) => {
          item.name = item.value;
          values.push({
            id: item.id,
            name: item.value,
            imUrl: item.picUrl,
          });
        });

        specifications.push({
          k: res.name,
          v: values,
          k_s: 's' + (~~k + 1),
        });
      });

      return specifications;
    },
    setSkuList() {
      var sku_list = [];
      _.each(this.goods.productList, (res) => {
        var sku_list_obj = {};
        _.each(res.specifications, (specificationName, index) => {
          sku_list_obj['s' + (~~index + 1)] = this.findSpecValueIdByName(specificationName);
        });

        sku_list_obj.price = res.price * 100;
        sku_list_obj.stock_num = res.number;
        sku_list.push(sku_list_obj);
      });

      return sku_list;
    },
    findSpecValueIdByName(name) {
      let id = 0;
      _.each(this.goods.specificationList, (specification) => {
        _.each(specification.valueList, (specValue) => {
          if (specValue.value === name) {
            id = specValue.id;
            return;
          }
        });
        if (id !== 0) {
          return;
        }
      });
      return id;
    },
    onnub(value) {
      // console.log(value);
      this.nub = value;
      this.$store.commit('setBuyNub', value);
    },
    onClickLeft() {
      this.$router.go(-1);
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
      // this.$store.commit('setBuyCar', this.goods.info);
      this.$store.commit('setDetail', this.goods.info);
    },
    onAddCartClicked() {
      this.currentnub = this.nub;
      this.show = false;
      this.$store.commit('setBuyCar', this.goods.info);
      // console.log( item);
      // this.$axios.get('http://122.51.199.160:8080/wx/home/index').then((res) => {
      //   console.log(res);
      // });
    },
  },
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    goodsDetail({ id: this.id }).then((res) => {
      this.goods = res.data.data;
      console.log(this.goods);
      this.skuAdapter();
    });

    // this.goods.goodsId = this.detail.id;
    // this.goods.picture = this.detail.picUrl;
    // this.goods.goodsId = this.detail.id;
    // this.sku.price = this.detail.retailPrice;
  },
  computed: {
    // detail() {
    //   return this.$store.state.detail;
    // },
  },
  components: {
    goodsDetail,
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
  // line-height: 150px;
  height: 260px;
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
  background-color: #fff;
  /deep/ p {
    padding: 0 10px;
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
  }
  /deep/ img {
    max-width: 100%;
    display: block;
  }
}

.shop-title {
  // @include one-border;
  padding: 10px 0;
  text-align: center;
}
.icon {
  width: 20px;
  height: 20px;
  font-size: 18px;
  /* align-items: center; */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  left: 10px;
  top: 10px;
}
</style>
