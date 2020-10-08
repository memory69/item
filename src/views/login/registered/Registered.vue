<template>
  <div class="registered">
    <p class="top">
      <i class="el-icon-arrow-left flt"></i>
      <span class="flt" @click="back">返回</span>登录
    </p>
    <div class="container">
      <p style="font-size:14px">我们将发送验证码到您的手机</p>

      <div class="phonenb">
        <i class="el-icon-mobile-phone"></i>
        <el-input
          placeholder="请输入手机号"
          clearable
          v-model.number="phone"
          type="number"
          maxlength="12"
          size="normal"
        ></el-input>
      </div>
      <el-button type="primary">下一步</el-button>
      <p style="text-align: right;margin-top:30px; color:#ddd;font-size:13px">
        已有账号？
        <span style="color:red" @click="back">登录</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registered",
  data() {
    return {
      phone: "",
    };
  },
  methods:{
      back(){
          this.$router.push('/')
      }
  }
};
</script>

<style lang="scss" scoped>
.registered {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
.container {
  width: 90%;
  padding-top: 20px;
  margin: 0 auto;
  text-align: left;
  //   border: 1px solid red;
}
.top {
  padding: 15px 0;
  text-align: center;
  border: 1px solid #ddd;
}
.top i {
  position: absolute;
  left: 5px;
  color: #1989fa;
  //   margin-left: 10px;
}
.top span {
  position: absolute;
  left: 20px;
  color: #1989fa;
}
.phonenb {
  position: relative;
}
.el-input {
  margin: 20px 0;
}
.el-icon-mobile-phone {
  position: absolute;
  left: 0;
  top: 32px;
  z-index: 99;
}
.el-button {
  margin-top: 10px;
  width: 100%;
}
</style>