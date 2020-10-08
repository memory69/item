<template>
  <div class="set-up">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="头像" value="内容">
        <van-uploader :after-read="afterRead" size="small" />
      </van-cell>
      <van-cell title="昵称" is-link :value="name.username" @click="handle" />
      <van-cell title="性别" is-link :value="sex1" @click="sex" />

      <van-cell title="密码设置" is-link value />
      <van-cell title="手机号" is-link value />
    </van-cell-group>

    <van-popup v-model="show" round position="bottom">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>

    <van-button type="info" @click="exit">退出登录</van-button>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "SetUp",
  data() {
    return {
        sex1:'男',
      show: false,
      columns: ["保密", "男", "女"],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    handle() {
      Toast("提示内容");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    sex() {
      this.show = true;
    },
    onConfirm(value, index) {
      Toast(`${value}`);
    },
    onChange(picker, value, index) {
      Toast(`${value}`);
      this.sex1 = `${value}`
      this.show = false
    },
    onCancel() {
      this.show = false;
    },
    exit(){
        this.$store.commit('setUser','')
        this.$router.push('/')
    }
  },
  computed:{
      name(){
          return this.$store.state.user
      }
  }
};
</script>

<style scoped>
.set-up {
  width: 100%;
  box-sizing: border-box;
}
.van-button{
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
}
</style>