<template>
  <div>
    <van-nav-bar
      title="浏览记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="text">welcome to jetsod</div>
      <van-list
        class="shopList"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <good-card v-for="(item, index) in products" :key="index" :item="item"></good-card>
      </van-list>
  </div>
</template>

<script>
import GoodCard from "@/components/GoodCard.vue";
import { getProduct } from '@/api/product'
export default {
  name: "Record",
  components: {
    GoodCard
  },
  data() {
    return {
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
      finished: false,
      productData: []
    }
  },
  computed: {
    products() {
      let list = [];
      if (this.productData.length) {
        this.productData.forEach(el => {
          const id = el.id || '';
          const attr = el.attributes;
          let obj = {
            id: id,
            title: attr.title || '',
            description: attr.description || '',
            price: attr.price || 0,
            image: attr.cover || '',
          }
          list.push(obj);
        });
      }
      return list
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: '/account' })
    },
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
    },
    getList() {
      getProduct().then(res => {
        if (res) {
          window.console.log("list: ", res)
          this.productData = res;

          setTimeout(() => {
            window.console.log(this.products)
          }, 1000)
        }
      }).catch(err => {
        window.console.log(err)
      });
    }
  },
  mounted () {
    this.getList();
  },
}
</script>

<style scoped>
.text {
  text-align: center;
}
</style>