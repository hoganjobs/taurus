<template>
  <div class="container">
    <van-swipe :autoplay="3000" height="100">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!-- <img v-lazy="image" /> -->
        <van-image
          fit="fill"
          lazy-load
          :src="image"
        />
      </van-swipe-item>
    </van-swipe>
    <van-list
      class="shopList"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- <good-card v-for="(item, index) in list" :key="index" :item="item"></good-card> -->
      <van-card
         v-for="(item, index) in list" :key="index"
        :num="item.number + '万件'"
        price="2.00"
        desc=""
        :title="item.title"
        :thumb="item.imgUrl"
        @click="toDetail(item.id)"
      >
        <div slot="desc">
          <van-image width=24 height=24 :round="true" :src="item.left" />
          <van-image width=24 height=24 :round="true" :src="item.right" />
        </div>
        <div slot="tags">
          <span class="dtag">全网团购推荐</span>
        </div>
        <div slot="price">
          <div><span class="unit">¥</span><span class="price">{{item.price}}</span></div>
        </div>
      </van-card>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import TodoList from "@/components/TodoList.vue";
// import GoodCard from "@/components/GoodCard.vue";

export default {
  name: 'home',
  components: {
    // TodoList
    // GoodCard
  },
  data() {
    return {
      images: [
        "http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg",
        "http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg",
        "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
      ],
      list: [
        {
          id:1,
          imgUrl:"https://gw.alicdn.com/tfs/TB1hJ2KX6ihSKJjy0FlXXadEXXa-254-318.png",
          left:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2872812906,4161433995&fm=26&gp=0.jpg",
          right:"https://gw.alicdn.com/tfs/TB1hJ2KX6ihSKJjy0FlXXadEXXa-254-318.png",
          price:9.92,
          number:3.1,
          title: "四川丑橘不知火丑八怪橘子新鲜孕妇水果当季桔子柑橘丑柑丑桔批发"
        },
        {
          id:2,
          imgUrl:"https://img.alicdn.com/tfs/TB1qSevu.z1gK0jSZLeXXb9kVXa-520-280.jpg_q90_.webp",
          left:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2872812906,4161433995&fm=26&gp=0.jpg",
          right:"https://gw.alicdn.com/tfs/TB1hJ2KX6ihSKJjy0FlXXadEXXa-254-318.png",
          price:9,
          number:4.1,
          title: "四川丑橘不知火丑八怪橘子新鲜孕妇水果当季桔子柑橘丑柑丑桔批发"
        }
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list[0]);
          this.list.push(this.list[1]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    toDetail(id) {
      this.$router.push({ path: '/detail', query:{ id: id } });
    }
  },
}
</script>

<style  lang="less" scoped>
.van-card {
  padding: 0 16px 0 8px;
  background-color: #fff;
  .van-card__thumb {
    width: 128px;
    height: 160px;
  }
  .van-card__title {
    max-height: 48px;
    font-size: 16px;
    line-height: normal;
    // font-weight: 700;
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
<style>
.van-card__thumb img {
  border-radius: 0;
}
</style>