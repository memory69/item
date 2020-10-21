<template>
  <div class="sentiment">
    <van-cell title="人气产品" is-link @click="specific" />
    <div class="list">
      <div class="item" v-for="item in hotGoodsList" @click="detail(item.id)">
        <div class="left">
          <img :src="item.picUrl" alt="" width="100%" />
        </div>
        <div class="right">
          <p>{{ item.name }}</p>
          <p style="color:#646566">{{ item.brief }}</p>
          <p>
            ￥<span style="font-size:16px">{{ item.retailPrice }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goodsList } from '../../../network/request';
export default {
  name: 'Sentiment',
  data() {
    return {
      hotGoodsList: [],
    };
  },
  created() {
    this.request({
      url: '/wx/home/index',
    }).then((res) => (this.hotGoodsList = res.data.data.hotGoodsList));
  },
  methods: {
    detail(index) {
      this.$router.push('/detail/' + index);
    },
    specific() {
      // newList({ page: 1, limit: 15 }).then((res) => {
      //   console.log(res);
      //   // this.$store.commit('setSpecific', res.data.data.list);
      // });
      goodsList({
        page: 3,
        limit: 15,
      }).then((res) => {
        this.$store.commit('setSpecific', res.data.data.list);
      });
      this.$store.commit('setTitle', '人气产品');
      this.$router.push('/specific');
    },
  },
};
</script>

<style scoped>
.sentiment {
  margin-top: 15px;
  width: 100%;
  box-sizing: border-box;
  background: white;

  margin-bottom: 60px;
}
.list {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.item {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  /* border: 1px solid red; */
  border-bottom: 1px solid #eeeeee;
}
.left {
  width: 100px;
  /* height: 100%; */
}
.right {
  padding: 10px 0;
  flex: 1;
  font-size: 14px;
  line-height: 20px;
}
.right p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right p:last-of-type {
  font-size: 12px;
  margin-top: 20px;
}
</style>
