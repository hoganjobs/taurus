<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="goods">
      <van-image
        width="100%"
        height="300"
        fit="fill"
        lazy-load
        :src="defaultImg"
      />
      <div class="goods-top">
        <div>
          <span class="goods-unit">¥</span><span class="goods-price">{{price}}</span>
        </div>
        <div class="goods-num">已拼{{num}}万件</div>
      </div>
      <div>
        <van-tag color="#dd412b" text-color="#fff">强烈推荐</van-tag>
        <span class="goods-title">{{title}}</span>
      </div>
      <div class="goods-t">商品详情</div>
      <div class="goods-t-b">
        <div class="goods-d-t">商品描述</div>
        <div class="goods-desc">{{desc}}</div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button color="#f3aaa4" type="warning" text="立即拼单" />
      <van-goods-action-button color="#e1422c" type="danger" text="单独购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      defaultImg: "https://gw.alicdn.com/tfs/TB1hJ2KX6ihSKJjy0FlXXadEXXa-254-318.png",
      price: "20",
      num: "2.1",
      title: "好吉利酒精消毒湿巾75%乙醇含量杀菌抑菌【2月20日发完】",
      desc: "好吉利酒精消毒湿巾75%乙醇含量杀菌抑菌"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style  lang="less" scoped>
.goods {
  margin: 0 auto;
  padding: 0 5px;
  .goods-top {
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goods-unit {
      font-size: 16px;
      color: #e3422d;
    }
    .goods-price {
      font-size: 28px;
      color: #e3422d;
    }
    .goods-num {
      font-size: 14px;
      color: #666;
    }
  }
  .goods-title {
    margin-left: 5px;
    line-height: normal;
  }
  .goods-t {
    margin-top: 20px;
    font-size: 20px;
    color: 333;
  }
  .goods-t-b {
    padding: 10px 4px;
    background-color: #ededed;
    border-radius: 8px;
    .goods-d-t {
      font-size: 16px;
      color: 333;
    }
    .goods-desc {
      margin-top: 6px;
      font-size: 14px;
      color: 333;
    }
  }
}
</style>
