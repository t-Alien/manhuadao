<template>
    <div class="hott">
        <p>热门推荐</p>
        <ul class="hot-recommoned">
          <li v-for='item in detas' :key='item.bigbook_id'>
            <img :src="item.coverurl" alt="">
            <p>{{item.bigbook_name}}</p>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Hot',
    props:{
        detas:{},
    }
}
</script>

<style lang='scss'>
p{
    padding-left: 10px;
    font-size: 14px;
    height: 26px;
    line-height: 20px;
  }
  .hot-recommoned{
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
      margin-bottom: 10px;
    }
    p{
      font-size: 12px;
    }
    img{
      height: 142px;
      width: 110px;
    }
  }
  </style>
