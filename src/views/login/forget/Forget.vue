<template>
  <div class="forget">
    <div class="validation" v-show="!reset">
      <p class="top">
        <i class="el-icon-arrow-left"></i>
        <span class="" @click="back">返回</span>
      </p>
      <div class="phone-num">
        <van-icon name="phone-o" />
        <van-field type="text" center clearable label="手机号码：" placeholder="请输入与手机号" v-model="phone" />
      </div>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" :disabled="!codeObj.status" type="primary" @click="goGet()">{{ codeObj.title }}</van-button>
        </template>
      </van-field>
      <van-button type="info" @click="handleReset">下一步</van-button>
    </div>

    <forget-reset v-show="reset" @handleback="band()"></forget-reset>
    <!-- 
     <div class="reset" v-show="reset">
      <van-button type="primary" @click="handleback">返回</van-button>
    </div> -->
  </div>
</template>

<script>
import ForgetReset from '../forgetreset/ForgetReset';
export default {
  name: 'Forget',
  data() {
    return {
      phone: '', //手机号的值
      sms: '',
      reset: false,
      codeObj: {
        title: '获取验证码',
        status: true,
      },
    };
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    goGet() {
      this.gettimer(59);
    },
    gettimer(num) {
      this.codeObj.title = num + '秒后重新发送';
      const time = setInterval(() => {
        if (num <= 0) {
          clearInterval(time);
          this.codeObj.title = '重新发送';
          this.codeObj.status = true;
        } else {
          num--;
          this.codeObj.title = num + '秒后重新发送';
          this.codeObj.status = false;
        }
      }, 1000);
      // return this.codeObj;
    },
    handleReset() {
      this.reset = true;
    },
    band() {
      this.reset = false;
    },
  },
  components: {
    ForgetReset,
  },
};
</script>

<style lang="scss" scoped>
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
.phone-num {
  width: 100%;
  box-sizing: border-box;
  // border: 1px solid red;
  position: relative;
  margin-top: 40px;
}
.phone-num .van-field {
  width: 100%;
  // border: 1px solid red;
  // margin-left: 10px;
  position: relative;
  box-sizing: border-box;
}
.phone-num .van-icon {
  // border: 1px solid red
  position: absolute;
  z-index: 99;
  left: 0;
  top: 15px;
}
.van-button {
  margin-top: 10px;
  width: 100%;
}
.reset {
  width: 100%;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
