<template>
  <div class="item">
    <div class="shopList_left">
        <img :src="item.imgUrl" alt="">
    </div>
    <div class="shopList_right">
      <p class="shopList_right_tit">{{item.title}}</p>
      <div class="shopList_right_imgList">
          <div>
              <img :src="item.left" alt="">
          </div>
          <div>
              <img :src="item.right" alt="">
          </div>
      </div>
      <p class="shopList_right_price">￥{{item.price}}</p>
      <p class="shopList_right_numbers">已拼{{item.number}}万件</p>
    </div>
  </div>
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