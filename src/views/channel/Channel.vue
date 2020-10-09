<template>
  <div class="channel">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs>
      <van-tab v-for="(index, i) in channel" :key="i" :title="index.name" v-model="ip">
        <van-empty description="空空如也" />
      </van-tab>
    </van-tabs>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  data() {
    return {
      channel: [],
      ip: '1010000',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    //   console.log(this.channel.data.id)
    // console.log(this.$route.params.id);
    // this.$axios.get('http://122.51.199.160:8080/wx/home/index').then((res) => {
    //   let dt = res.data.data;
    //   this.channel = dt.channel;
    // });
    this.request({
      url: '/wx/home/index',
    }).then((res) => (this.channel = res.data.data.channel));
  },
};
</script>

<style lang="scss" scoped></style>
