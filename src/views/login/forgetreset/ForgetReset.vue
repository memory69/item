<template>
  <div class="forget-reset">
    <p class="top">
      <i class="el-icon-arrow-left"></i>
      <span class="" @click="back">返回</span>
    </p>
    <div style="margin-top:40px">
      <van-field type="password" label="输入新密码" placeholder="" v-model="pwd" />
      <van-field type="password" label="验证新密码" placeholder="" v-model="pwdreset" />
      <div style="margin-top:10px;color:red;font-size:13px;height:20px;">
          <div>
              {{ city }}
          </div>
      </div>
      <van-button type="info" @click="handleReset">重置</van-button>
    </div>
    <!-- <el-input v-model="pwd" placeholder=""></el-input> -->
  </div>
</template>

<script>
export default {
  name: 'ForgetReset',
  data() {
    return {
      pwd: '',
      pwdreset: '',
      textderaction: '',
    };
  },
  methods: {
    back() {
      this.$emit('handleback');
    },
    handleReset() {
      this.$router.push('/');
    },
  },
  computed: {
    city() {
      if (this.pwd == this.pwdreset) {
        this.textderaction = '';
      } else {
        this.textderaction = '两次密码不一致';
      }
      return this.textderaction;
    },
  },
};
</script>

<style lang="scss" scoped>
.forget-reset {
  width: 100%;
  box-sizing: border-box;
}
.top {
  padding: 15px 0;
  border: 1px solid #ddd;
  height: 20px;
  line-height: 20px;
}
.top i {
  color: #1989fa;
}
.top span {
  color: #1989fa;
}
.van-field {
  margin-top: 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.van-button {
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
}
</style>
