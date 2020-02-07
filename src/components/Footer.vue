<template>
  <van-tabbar v-model="active" :route="true" active-color="#e3422d" inactive-color="#7e7e7e">
    <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
    <!-- <van-tabbar-item replace to="/jetsod" icon="hot-o">JETSOD</van-tabbar-item> -->
    <van-tabbar-item replace to="/account" icon="more-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  namr: "Footer",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
</style>
