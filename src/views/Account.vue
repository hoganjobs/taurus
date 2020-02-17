<template>
  <div>
    <div class="user">
      <van-image
        round
        width="5rem"
        height="5rem"
        fit="cover"
        lazy-load
        :src="avatar"
      />
      <span class="name">{{name}}</span>
    </div>
    <div>
      <van-cell title="我的收藏" to="/collection" is-link>
          <van-icon
            slot="icon"
            name="shop-collect"
            color="#f19c32"
            size="24"
            style="line-height: inherit; margin-right: 6px"
          />
      </van-cell>
      <van-cell title="收货地址" to="/address" is-link>
        <van-icon
          slot="icon"
          name="location"
          color="#2690ed"
          size="24"
          style="line-height: inherit; margin-right: 6px"
        />
      </van-cell>
      <van-cell title="浏览记录" to="/record" is-link>
        <van-icon
          slot="icon"
          name="label"
          color="#e1552c"
          size="24"
          style="line-height: inherit; margin-right: 6px"
        />
      </van-cell>
      <van-cell title="发货记录" to="/deliver" is-link>
        <van-icon
          slot="icon"
          name="gift"
          color="#4cab90"
          size="24"
          style="line-height: inherit; margin-right: 6px"
        />
      </van-cell>
      <van-cell title="支付信息" to="/payment" is-link>
        <van-icon
          slot="icon"
          name="bill"
          color="#2690ed"
          size="24"
          style="line-height: inherit; margin-right: 6px"
        />
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      active: 0,
      // avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
      avatar: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2244238741,1217077712&fm=5",
      name: "nono"
    }
  },
}
</script>

<style scoped>
.user {
  padding: 15px;
  background-color: #fdfdfd;
  color: #333;
  display: flex;
  align-items: center;
}
.name {
  margin-left: 5px;
}
</style>
