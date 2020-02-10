<template>
  <div>
    <van-nav-bar
      title="浏览记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="text">welcome to jetsod</div>
  </div>
</template>

<script>
  export default {
    name: "Record",
    methods: {
      onClickLeft() {
        this.$router.push({ path: '/account' })
      }
    },
  }
</script>

<style scoped>
.text {
  text-align: center;
}
</style>