<template>
  <div class="classification">
    <div class="left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for="(item, index) in floorGoodsList" :title="item.name" />
      </van-sidebar>
    </div>
    <div class="right">
      <div v-for="item in goodsList">
        {{ item.name }}
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
      console.log(this.goodsList);
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
  border: 1px solid red;
}
</style>
