<template>
  <div class="buy-car">
    <div class="top">
      <p class="flt">购物车</p>
      <p class="frt" v-show="isshow" @click="manager">管理</p>
      <p class="frt" v-show="!isshow" @click="achive">完成</p>
    </div>
    <van-notice-bar mode="closeable" style=" clear: both;">
      红包免费领
    </van-notice-bar>
    <div class="main">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox name="a">
          <div>
            <van-swipe-cell>
              <van-card
                num="1"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                style=" width: 320px"
              />
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="delet()" />
              </template>
            </van-swipe-cell>
          </div>
          <van-divider />
        </van-checkbox>
        <van-checkbox v-for="(item, index) in currentdetail" :name="item.id">
          <!-- <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" /> -->
          <div>
            <van-swipe-cell>
              <van-card
                :num="num"
                :price="item.retailPrice"
                :desc="item.brief"
                :title="item.name"
                class="goods-card"
                :thumb="item.picUrl"
                style=" width: 320px"
              />
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="delet(index)" />
              </template>
            </van-swipe-cell>
          </div>
          <van-divider />
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="bottom">
      <van-submit-bar v-show="isshow" class="nav" :price="nowprice" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
      <van-submit-bar v-show="!isshow" class="nav" button-text="删除" @submit="delet()">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <van-icon style="margin-left:10px" name="replay" />
        <p style="margin:0 10px 0 0">清理</p>

        <!-- <van-button type="primary"></van-button> -->
        <van-button type="info" style="border-radius:20px;height:40px;margin-right:10px">移入收藏夹</van-button>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import testVue from '../test.vue';
export default {
  name: 'BuyCar',
  data() {
    return {
      isshow: true,
      result: [],
      checked: false,
      nowprice: 0,
      currentdetail: [],
      // nowdetail:[],
      price: [],
      // shopId: 0,
    };
  },
  created() {
    if (Object.keys(this.detail).length > 0) {
      this.currentdetail.push(this.detail);

      // this.result.length = 1;
    } else {
      // this.result.length = 2;
    }

    // if (this.result.length > 0) {
    // }
  },
  methods: {
    checkAll(index) {
      this.$refs.checkboxGroup.toggleAll(index);
    },
    onSubmit() {},
    delet(index) {
      this.currentdetail.splice(index, 1);
      this.nowprice = 0;
      // console.log(index);
    },
    manager() {
      this.isshow = false;
    },
    achive() {
      this.isshow = true;
    },
  },
  computed: {
    detail() {
      return this.$store.state.buycar;
    },
    num() {
      return this.$store.state.buynub;
    },
  },
  watch: {
    checked() {
      if (this.checked == true) {
        this.checkAll(true);
      } else if (this.checked == false) {
        this.checkAll(false);
      }
    },
    result() {
      if (this.result.length > 0) {
        // this.nowprice = this.detail.retailPrice;
        this.result.forEach((item) => {
          this.price = this.currentdetail.filter((res) => {
            return item == res.id;
          });
        });
        this.price.forEach((res) => (this.nowprice = res.retailPrice * 100 * this.num));

        // console.log(this.price);
      } else if (this.result.length == 0) {
        this.nowprice = 0;
      }
    },
  },
};
</script>

<style scoped>
.buy-car {
  width: 100%;
  box-sizing: border-box;
}
.top {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  height: 40px;
}
.top p:first-of-type {
  font-size: 20px;
  font-weight: bold;
}
.main {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 50px;
  /* height: 1000px; */
  /* border: 1px solid red; */
}
.nav {
  margin-bottom: 50px;
}
.shoplist {
  margin-top: 20px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>
