<template>
  <van-card
    :num="item.price + '万件'"
    price="2.00"
    desc=""
    :title="item.title"
    :thumb="item.image"
    @click="toDetail(item.id)"
  > 
    <div slot="desc">
      <van-image width=24 height=24 :round="true" :src="item.image" />
      <van-image width=24 height=24 :round="true" :src="item.image" />
    </div>
    <div slot="tags">
      <span class="dtag">全网团购推荐</span>
    </div>
    <div slot="price">
      <div><span class="unit">¥</span><span class="price">{{item.price}}</span></div>
    </div>
  </van-card>
</template>

<script>
export default {
  name: "GoodCard",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: '/detail', query:{ id: id } });
    },
  },
}
</script>

<style lang="less" scoped>
.van-card {
  padding: 0 16px 0 8px;
  background-color: #fff;
  .van-card__thumb {
    width: 180px;
    height: 180px;
  }
  .van-card__title {
    max-height: 48px;
    font-size: 14px;
    line-height: normal;
  }
}
.price {
  font-size: 18px;
  color: #e3422d;
}
.unit {
  font-size: 12px;
  color: #e3422d;
}
.dtag {
  padding: 2px 4px;
  background-color: #fcf0ed;
  color: #b63525;
}
</style>