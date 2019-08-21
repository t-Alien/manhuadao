<template>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='item in imgs' :key="item.id"><img :src='item.imageurl'></van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    imgs: Array
  }
}
</script>

<style lang='scss'>
.van-swipe{
  padding-top: 45px;
  overflow-x: auto;
  width: 100%;
  height:180px;
  .van-swipe-item{
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
