<template>
  <div class="app-wrapper">
    <div class="title-bar">短信登录</div>
    <van-form @submit="onLogin">
      <van-field
        class="wrapper phone-wrapper"
        v-model="phone"
        type="tel"
        name="手机号"
        left-icon="phone-o"
        placeholder="手机号"
        :border="false"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        class="wrapper code-wrapper"
        v-model="code"
        name="短信验证码"
        left-icon="envelop-o"
        center
        clearable
        placeholder="短信验证码"
        :border="false"
        :rules="[{ required: true, message: '' }]"
      >
        <div slot="button" class="app-sms" @click="loginCode">{{codeText}}</div>
      </van-field>
      <div class="wrapper btn-wrapper">
        <van-button block color="#60d5c8" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// import AV from "leancloud-storage";
import { login } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      phone: "", //输入框中的手机号
      code: "", //输入框中的验证码
      codeText: "获取验证码", //倒计时显示文字
      timingBoard: 60, //倒计时数
      isRecede: false, //判断正在倒计时阶段，不允许用户再点击
      timer: null
    };
  },
  methods: {
    // onSubmit(values) {
    //   window.console.log("submit", values);
    // },
    login1() {
      let self = this;

      let username = self.username;
      let password = self.password;
      if (username && password) {
        let loginform = {
          username: username,
          password: password
        };
        window.console.log("login");
        login(loginform)
          .then(res => {
            if (res) {
              window.console.log("OK", res);
              window.console.log(res._isCurrentUser);
            }
            // self.$router.push("/home");
          })
          .catch(err => {
            window.console.log(err);
          });
      }
      // 同样用 leancloud 的登陆方法
      // 我们只需要负责传递用户名和密码给他就可以了
      // AV.User.logIn(username, password).then(
      //   function(loginedUser) {
      //     console.log(loginedUser);
      //     // 登陆后跳转到 Home 页面
      //     // self.$router.push("/home");
      //   },
      //   function(error) {
      //     console.log(JSON.stringify(error));
      //   }
      // );
    },
    //获取验证码
    async loginCode() {
      if (this.isRecede) {
        this.error("有用户在夏季八点");
      }
      window.console.log("start login");
      // 这是一个发送验证码的接口();
      // let result = await 这是一个发送验证码的接口(this.phone);
      let result = {code:1};
      window.console.log("验证码接口 result=", result);
      if (result.code == 1) {
        //成功登录
        window.console.log("请在手机短信查收验证码");
        this.isRecede = true;
        //开始获取验证码倒计时
        this.recede();
      } else {
        //登录失败
        window.console.log("获取验证码失败");
      }
    },
    //开始登录
    async onLogin() {
      if (!this.phone) {
        window.console.log('请填写手机号');
        this.$toast("请填写手机号");
      } else if (!this.code) {
        window.console.log('请填写验证码');
        this.$toast("请填写验证码");
      } else if (!/^1[345789]\d{9}$/.test(this.phone)) {
        window.console.log('请检查手机号是否正确');
        this.$toast("请检查手机号是否正确");
      } else if (!/^[0-9]{4}$/.test(this.code)) {
        window.console.log('验证码不正确');
        this.$toast("验证码不正确");
      } else {
        // let result = await 这是一个登录的接口(this.phone, this.code);
        let result = {};
        result.code = 1;
        window.console.log(result);
        if (result.code == 1) {
          window.console.log("登录成功");
          this.$router.replace({path: '/'})
        } else {
          this.code = "";
          window.console.log("登录失败");
        }
      }
    },
    //获取验证码倒计时定时器
    recede() {
      this.timer = setInterval(() => {
        window.console.log("开始定时器，", this.timingBoard);
        this.codeText = `重新发送 ${this.timingBoard}s`;
        this.timingBoard--;
        if (this.timingBoard < 0) {
          this.isRecede = false;
          this.timingBoard = 60;
          this.codeText = "获取验证码";
          clearInterval(this.timer);
        }
      }, 1000);
    },
    //稽查手机号输入框的长度
    changePhone() {
      if (this.$refs.phone.value.length <= 11) {
        this.phone = this.$refs.phone.value;
      } else {
        this.$refs.phone.value = this.phone;
      }
    },
    //稽查验证码输入框的长度
    changeCode() {
      if (this.$refs.code.value.length <= 4) {
        this.code = this.$refs.code.value;
      } else {
        this.$refs.code.value = this.code;
      }
    },
    error(msg) {
      throw new Error(msg);
    }
  },
  destroyed() {
    this.phone = "";
    this.timingBoard = 60;
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.app-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
}
.wrapper {
  overflow: auto;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10px;
  border: 1px solid #ebedf0;
}
.phone-wrapper {
  margin-top: 10%;
}
.code-wrapper {
  margin-top: 10%;
  position: relative;
  top: 0;
  left: 0;
}
.btn-wrapper {
  margin-top: 65px;
}
.title-bar {
  margin-top: 30%;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 40px;
  border-bottom: 2px solid #ebedf0;
  line-height: 40px;
  text-align: center;
  color: #555;
  font-size: 22px;
  position: relative;
}
.title-bar::after {
  position: absolute;
  width: 30%;
  height: 2px;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  background-color: #60d5c8;
  left: 35%;
  bottom: -2px;
}
.app-sms {
  width: 86px;
  padding-left: 10px;
  color: #60d5c8;
  position: relative;
}
.app-sms::after {
  position: absolute;
  width: 1px;
  height: 100%;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  background-color: #ebedf0;
  left: 0;
  top: 0;
  /* border-left: 1px solid #000; */
  /* -webkit-transform: scaleX(.5); */
  /* transform: scaleX(.5); */
}
</style>