<template>
  <div class="specific">
    <div class="logo">
      <van-icon class="icon" name="arrow-left" @click="back" />
      <img src="../../assets/timg.jpg" width="100%" alt="" />
      <p class="title">{{ title }}</p>
    </div>
    <div class="item" v-for="item in spc" @click="detail(item.id)">
      <van-card :price="item.retailPrice" :desc="item.brief" :title="item.name" :thumb="item.picUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specific',
  methods: {
    back() {
      this.$router.go(-1);
    },
    detail(index) {
      this.$router.push('/detail/' + index);
    },
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    spc() {
      return this.$store.state.specific;
    },
  },
};
</script>

<style scoped>
.specific {
  width: 100%;
  box-sizing: border-box;
  background: #eeeeee;
}
.logo {
  width: 100%;
  height: 105px;
  box-sizing: border-box;
  position: relative;
  /* text-align: center; */
}
.icon {
  width: 20px;
  height: 20px;
  font-size: 18px;
  /* align-items: center; */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -10px;
  /* text-align: center; */
  font-size: 20px;
}
</style>
