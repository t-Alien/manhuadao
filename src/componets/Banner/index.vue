<template>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='item in imgs' :key="item.id"><img :src='item.imageurl'></van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    name:'Banner',
    props:{
       imgs: Array,
    }
    // created() {
    //   console.log(imgs);
      
    // }
}
</script>


<style lang='scss'>
.van-swipe{
  overflow-x: auto;
  background: blue;
  width: 100%;
  height:180px;
  .van-swipe-item{
    
    width: 100%;
  }
}
</style>
