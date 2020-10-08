<template>
  <div class="login">
    <div class="container">
      <img src="../../assets/header-pc.png" alt />
      <p>管理员</p>
      <div class="lable">
        <i class="el-icon-user"></i>
        <el-input v-model="username" placeholder="请输入用户名" clearable size="small"></el-input>
        <el-input v-model="password" placeholder="请输入密码" show-password size="small"></el-input>
        <i class="el-icon-lock"></i>
      </div>
      <div class="login-btn" style="font-size:13px">
        <a href="JavaScript:void(0)" class="flt" @click="registered">免费注册</a>
        <a href="JavaScript:void(0)" class="frt" :class="{ active: isactive }" @click="handleColor">忘记密码?</a>
        <el-button type="primary" @click="home">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      isactive: false,
    };
  },
  methods: {
    handleColor() {
      this.isactive = true;
      this.$router.push('/forgetmi');
    },
    registered() {
      this.$router.push('/registered');
    },
    home() {
      this.myrequest({
        url: '/user.json',
      })
        .then((res) => {
          // console.log(res);
          const dt = res.data.data;
          let user = dt.find((item) => this.username == item.username && this.password == item.password);
          if (user) {
            this.$router.push('/cmfooter');
            Toast('登录成功');
            this.$store.commit('setUser', user);
          } else {
            Toast('登录失败');
          }
        })
        .catch((error) => console.log('Login请求失败'));
      // this.$axios
      //   .get('/api/user.json')
      //   .then((res) => {
      //     // console.log(res);
      //     const dt = res.data.data;
      //     let user = dt.find((u) => {
      //       // console.log(u)
      //       return this.username == u.username && this.password == u.password;
      //     });
      //     if (user) {
      //       this.$router.push('/cmfooter');
      //       Toast('登录成功');
      //       this.$store.commit('setUser', user);
      //       // console.log("成功");
      //     } else {
      //       Toast('登录失败');
      //       // console.log("失败");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log('请求失败');
      //   });
    },
  },
  created() {
    // this.$axios.get("http://122.51.199.160:8080/wx/auth/info").then((res) => {
    //   console.log(res)
    // })
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  // height: 100%;
  box-sizing: border-box;
  //   display: flex;
  // align-items: center;
}
.container {
  width: 90%;
  margin: 0 auto;
  //   border: 1px solid red;
  text-align: center;
  margin-top: 35%;
  //   align-items: center;
}
.container img {
  width: 70px;
  border-radius: 20px;
}
.lable {
  margin-top: 30px;
  position: relative;
  //   border: 1px solid red;
  box-sizing: border-box;
}
.el-input {
  //   padding-left: 5px;
  box-sizing: border-box;
  margin-top: 20px;
}
.el-icon-user {
  position: absolute;
  //   left: 5px;
  top: 27px;
  z-index: 99;
}
.el-icon-lock {
  position: absolute;
  left: 0;
  bottom: 7px;
  z-index: 99;
}
.el-button {
  width: 100%;
  box-sizing: border-box;
}
.login-btn a {
  // display: block;
  padding: 0 5px;
  height: 50px;
  line-height: 50px;
  text-decoration: none;
}
.active {
  color: red;
}
</style>
