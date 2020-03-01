<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="goods">
      <van-image
        width="100%"
        height="300"
        fit="fill"
        :src="defaultImg"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
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
      <div class="goods-cnt">
        <van-image
          v-for="(item, index) in imgs"
          :key="index"
          width="100%"
          height="300"
          fit="fill"
          lazy-load
          :src="item.url"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
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
import { getProductDetail } from '@/api/product'

export default {
  name: "Detail",
  data() {
    return {
      defaultImg: "",
      price: "0",
      num: "2.6",
      title: "",
      desc: "",
      productId: '',
      
      imgs: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
    getDetail() {
      window.console.log(this.productId);  
      const id = this.productId;
      getProductDetail(id).then(res => {
        if (res) {
          window.console.log("detail: ", res)
          const prod = res[0].attributes;
          this.defaultImg = prod.cover;
          this.title = prod.title;
          this.desc = prod.description;
          this.price = prod.price;
          this.imgs = prod.imgs || [];
        }
      }).catch(err => {
        window.console.log(err)
      });
    },
  },
  mounted () {
    let id = this.$route.query.id || '';
    this.productId = id;
    this.getDetail();
  },
};
</script>

<style  lang="less" scoped>
.goods {
  margin: 0 auto;
  padding: 0 5px;
  padding-bottom: 50px;
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
    color: #333;
  }
  .goods-t-b {
    margin-top: 5px;
    padding: 10px 12px;
    background-color: #ededed;
    border-radius: 8px;
    .goods-d-t {
      font-size: 16px;
      color: #333;
    }
    .goods-desc {
      margin-top: 6px;
      font-size: 14px;
      line-height: 24px;
      color: #666;
    }
  }
  .goods-cnt {
    margin-top: 10px;
  }
}
</style>
