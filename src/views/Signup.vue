<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/login" class="active">登陆</router-link>
                </li>
                <li>
                    <router-link to="/signUp">注册</router-link>
                </li>
            </ul>
        </nav>
        <form class="form signup">
            <h2>注册新用户</h2>
            <input v-model="signupUsername" type="username" id="inputUsername" class="form-control" placeholder="username" required autofocus>
            <input v-model="signupPassword" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <input v-model="emailAddress" type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
            <button v-on:click="pushMessage" type="submit">注册</button>
        </form>
    </div>
</template>

<script>
import AV from 'leancloud-storage';
// var APP_ID = 'JB6g2pSnF177yT8FCFReE0ae-MdYXbMMI';
// var APP_KEY = 'X0NNKO7j7U5tgkNRxS4ly4L3';
// AV.init({
//     appId: APP_ID,
//     appKey: APP_KEY
// });
export default {
    data() {
        return {
            signupUsername: "",
            signupPassword: "",
            emailAddress: ""
        }
    },
    methods: {
        pushMessage() {
            // let self = this;
            let username = this.signupUsername;
            let password = this.signupPassword;
            let email = this.emailAddress;
            console.log(username, password, email);

            // leancloud 有自己的 User 对象
            // 实例化
            var user = new AV.User();
            // 用 leancloud 提供的方法让 leancloud 自己管理账号密码邮箱
            // 我们只要提供这些值就可以了
            user.setUsername(username);
            user.setPassword(password);
            user.setEmail(email);
            // leancloud 提供的注册方法
            user.signUp().then(function (loginedUser) {
                console.log(loginedUser)
                // 注册成功后的异步函数
                // 就是成功之后才会执行的
                // 没有成功就不会执行这里
                // 注册成功后我们要跳转到 Home 也就是 todolist 页面
                // self.$router.push({path: '/home'}) // 不过这里这句语句会报错，一会说
            }, (function (error) {
                // 注册失败的提示
                // 其实这些代码那个 leancloud demo 都有现成的
                // 基本就是粘贴复制，感觉自己像个裁缝 
                alert(JSON.stringify(error));
            }));
        }
    },
}
</script>

<style scoped>

</style>