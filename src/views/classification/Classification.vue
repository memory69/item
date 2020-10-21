<template>
  <div class="classification">
    <div class="left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for="(item, index) in floorGoodsList" :title="item.name" />
      </van-sidebar>
    </div>
    <div class="right">
      <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/custom-empty-image.png" description="空空如也" v-show="isshow" />

      <div v-for="item in goodsList" @click="detail(item.id)">
        <!-- {{ item.name }} -->
        <van-card
          tag="最新"
          :price="item.retailPrice"
          :desc="item.brief"
          :title="item.name"
          :thumb="item.picUrl"
          :origin-price="item.counterPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from 'vant';
export default {
  name: 'Classification',
  data() {
    return {
      isshow: false,
      activeKey: 0,
      //   active: 0,
      floorGoodsList: [],
      goodsList: [],
    };
  },
  created() {
    this.request({
      url: '/wx/home/index',
    }).then((res) => {
      //   console.log(res.data.data.floorGoodsList);
      this.floorGoodsList = res.data.data.floorGoodsList;
    });
  },
  methods: {
    onChange(index) {
      //   Notify({ type: 'primary', message: index });
      var goods = this.floorGoodsList.filter((res, i) => {
        return index == i;
      });
      goods.forEach((res) => (this.goodsList = res.goodsList));
      if (this.goodsList == '') {
        // console.log(1111);
        this.isshow = true;
      } else {
        this.isshow = false;
      }
      // console.log(this.goodsList);
    },
    detail(index) {
      this.$router.push('/detail/' + index);
    },
  },
  watch: {},
};
</script>

<style scoped>
.classification {
  width: 100%;
  box-sizing: border-box;
  display: flex;
}
.right {
  flex: 1;
  padding: 10px;
  margin-bottom: 50px;
  /* border: 1px solid red; */
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>
