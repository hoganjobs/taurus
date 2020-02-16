<template>
  <van-list
    class="shopList"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <!-- <good-card v-for="(item, index) in list" :key="index" :item="item"></good-card> -->
    <van-card
        v-for="(item, index) in products" :key="index"
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
  </van-list>
</template>

<script>
export default {
  name: "GoodList",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
  } 
}
</script>

<style lang="less" scoped>
.item{
    width: 100%;
    margin-bottom: 20px; 
    list-style: none;
    height: 318px;
    .shopList_left{
        float: left;
        height: 318px;
        width: 254px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
    }
    .shopList_right{
        float: left;
        width: 496px;
        height: 318px;
        padding: 0 10px;
        box-sizing: border-box;
        position: relative;
        .shopList_right_tit{
            margin: 0;
            text-align: left;
            font-size: 25px;
        }
        .shopList_right_imgList{
            float: left;
            margin: 25px 0;
            height: 30px;
            position: relative;
            div{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                      border-radius: 50%;
                }
            }
            div:first-child{
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10
            }
            div:nth-child(2){
                position: absolute;
                top: 0;
                left: 15px;
                z-index: 1
            }
        }
        .shopList_right_price{
            position: absolute;
            bottom: 40px;
            left: 5px;
            font-size: 30px;
            color: red
        }
        .shopList_right_numbers{
            position: absolute;
            bottom: 0px;
            left: 5px;
            font-size: 25px;
            color: #cccccc;
        }
    }
}
</style>