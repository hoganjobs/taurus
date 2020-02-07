<template>
  <div class="container">
    <van-swipe :autoplay="3000" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        <van-image
          fit="fill"
          lazy-load
          :src="image"
        />
      </van-swipe-item>
    </van-swipe>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <van-card
         v-for="item in list" :key="item"
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">

        </div>
      </van-card>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import TodoList from "@/components/TodoList.vue";

export default {
  name: 'home',
  components: {
    // TodoList
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/cat.jpeg',
        '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
      ],
      list: [
        "a"
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
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  },
}
</script>
