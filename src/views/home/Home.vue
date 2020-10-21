<template>
  <div class="home">
    <cm-header></cm-header>
    <search v-show="!show" />
    <div v-show="show">
      <div style="margin-top:50px">
        <van-notice-bar left-icon="volume-o" text="商品大促销，走过路过千万不要错过，买到就是赚到！" />
      </div>
      <!-- <van-notice-bar scrollable text="技术是开发它的人的共同灵魂。" /> -->
      <div class="swipe">
        <swiper ref="mySwiper" :options="swiperOptions" :autoplay="true" :loop="true">
          <swiper-slide v-for="(item, index) in urlImage" :key="index">
            <img :src="item.Urlimg" alt width="100%" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="channel">
        <div v-for="(item, key) in channel" :key="key" class="channel-item" @click="channelitem(item.id)">
          <!-- <p>{{item.id}}</p> -->
          <img :src="item.iconUrl" alt width="20px" />
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="coupons">
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
        <!-- 优惠券列表 -->
        <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </div>
      <div class="bulk">
        <p class="title" style="font-size:14px">
          团购专区
          <van-icon name="arrow" />
        </p>
        <div v-for="(item, key) in grouponList" :key="key" class="bulk-list">
          <img :src="item.picUrl" alt width="100px" height="100px" @click="detail(item.id)" />
          <div class="bulk-right">
            <p style="font-size:14px;margin-top:10px">{{ item.name }}</p>
            <p style="font-size:14px">{{ item.brief }}</p>
            <div>
              <van-tag plain type="primary" style="margin-right:10px;font-size:5px">{{ item.grouponMember }}人成团</van-tag>
              <van-tag plain type="danger" style="font-size:5px">满{{ item.grouponDiscount }}元再减</van-tag>
            </div>
            <p style="margin-bottom:10px;">
              <span>￥{{ item.grouponPrice }}.00</span>
              <span style="text-decoration:line-through;">￥{{ item.retailPrice }}.00</span>
            </p>
          </div>
        </div>
      </div>
      <new-shop />
      <sentiment />
    </div>
  </div>
</template>

<script>
import CmHeader from '../commenheader/CmHeader';
import Swiper, { Navigation, Pagination } from 'swiper';
import NewShop from './newshop/NewShop';
import Sentiment from './sentiment/Sentiment';
import Search from './search/Search';
Swiper.use([Navigation, Pagination]);

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
  name: 'Home',
  data() {
    return {
      // vshow: false,
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],

      channel: [],
      grouponList: [],
      urlImage: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        // Some Swiper option/callback...
      },
      detael: false,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    show() {
      return this.$store.state.show;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, true);
    observer: true;
    observeParents: true;
  },
  methods: {
    channelitem(id) {
      this.$router.push('/channel/' + id);
    },
    detail(id) {
      this.request({
        url: '/wx/home/index',
      })
        .then((res) => {
          let dt = res.data.data.grouponList;
          let detail = dt.find((item) => id == item.id);
          this.$store.commit('setDetail', detail);
          this.$router.push('/detail/' + id);
        })
        .catch((error) => console.log('Home请求失败'));
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
  components: {
    CmHeader,
    NewShop,
    Sentiment,
    Search,
  },
  created() {
    this.request({
      url: '/wx/home/index',
    }).then((res) => {
      let dt = res.data.data;
      this.newGoodsList = dt.newGoodsList;
      this.couponList = dt.couponList;
      this.channel = dt.channel;
      this.grouponList = dt.grouponList;
      this.banner = dt.banner;
      this.brandList = dt.brandList;
      this.hotGoodsList = dt.hotGoodsList;
      this.topicList = dt.topicList;
      this.floorGoodsList = dt.floorGoodsList;
    });
    this.myrequest({
      // console.log();
      url: '/image.json',
    }).then((res) => (this.urlImage = res.data.data.images));
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  box-sizing: border-box;
  background: #eeeeee;
}
.swipe {
  width: 100%;
  box-sizing: border-box;
}

.channel {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: white;
}
.channel-item {
  padding: 10px 0;
  width: calc(100% / 4);
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
}
.coupons {
  margin-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  /* // border: 1px solid red; */
  background: white;
  line-height: 50px;
}
.bulk {
  margin-top: 10px;
  width: 100%;
  /* //   height: 400px; */
  box-sizing: border-box;
  /* // border: 1px solid red; */
  background: white;
  position: relative;
  padding: 0 10px;
  /* margin-bottom: 60px; */
}
.bulk .title {
  height: 50px;
  line-height: 50px;
  /* // border: 1px solid red; */
}
.bulk .van-icon {
  position: absolute;
  right: 0;
  top: 18px;
  margin-right: 10px;
}
.bulk .bulk-span {
  font-size: 13px;
  color: #dddddddd;
  position: absolute;
  right: 0;
  top: 2px;
  margin-right: 25px;
}
.bulk-list {
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.bulk-right {
  flex: 1;
}
.bulk p,
span {
  margin: 5px 0;
}
.bulk span {
  font-size: 13px;
  margin-right: 10px;
}
</style>
