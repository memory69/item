<template>
  <div class="new-shop">
    <van-cell title="新品首发" is-link @click="specific" />
    <div class="list">
      <div class="item" v-for="item in newGoodsList" @click="detail(item.id)">
        <img :src="item.picUrl" alt="" width="100%" />
        <div style="font-size:14px;text-align:center;color:#7b7474">
          <p>{{ item.name }}</p>
          <p style="color:#ab956d">￥{{ item.retailPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goodsList } from '../../../network/request';
export default {
  name: 'NewShop',
  data() {
    return {
      newGoodsList: [],
    };
  },
  created() {
    this.request({
      url: 'wx/home/index',
    }).then((res) => (this.newGoodsList = res.data.data.newGoodsList));
  },
  methods: {
    detail(index) {
      this.$router.push('/detail/' + index);
    },
    specific() {
      goodsList({
        page: 1,
        limit: 15,
      }).then((res) => {
        this.$store.commit('setSpecific', res.data.data.list);
      });
      this.$store.commit('setTitle', '新品首发');
      this.$router.push('/specific');

      // console.log(value);
    },
  },
};
</script>

<style scoped>
.new-shop {
  margin-top: 10px;
  width: 100%;
  /* height: 100px; */
  background: white;
  box-sizing: border-box;
}
.list {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
}
.list .item {
  width: calc((100% - 30px) / 2);
  margin-right: 15px;
  margin-top: 15px;
  /* height: 100px; */
  /* border: 1px solid red; */
}
.list .item:nth-of-type(2n) {
  margin-right: 0;
}
</style>
