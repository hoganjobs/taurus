<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/login">登陆</router-link>
        </li>
        <li>
          <router-link to="/signUp">注册</router-link>
        </li>
      </ul>
    </nav>
    <form class="form login">
      <h2>登陆</h2>
      <input
        v-model="username"
        type="username"
        class="form-control"
        placeholder="username"
        required
        autofocus
      />
      <input
        v-model="password"
        class="form-control"
        type="password"
        placeholder="Password"
        required
      />
      <!-- <button v-on:click="login" type="submit">登陆</button> -->
    </form>
    <button @click="login" type="submit">登陆</button>
  </div>
</template>

<script>
// import AV from "leancloud-storage";
import { login } from '@/api/user'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let self = this;

      let username = self.username;
      let password = self.password;
      if (username && password) {
        let loginform = {
          username: username,
          password: password
        }
        console.log("login")
        login(loginform).then(res => {
          if (res) {
            console.log("OK", res)
            console.log(res._isCurrentUser)
          }
          // self.$router.push("/home");
        }).catch(err => {
          console.log(err)
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
    }
  }
};
</script>

<style scoped>
</style>