<template>
  <div class="classify-list">
    <div class="list-item" v-for="item in classifyList" :key="item.type">
      <div class="item-pic">
        <img :src="item.imgUrl" />
      </div>
      <div class="item-info">
        <div class="info-book font-30">{{item.title}}</div>
        <div class="info-author font-26">作者：{{item.author}}</div>
        <div class="info-fans font-26">人气:{{item.popularity}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClassifyList',
  props: {
    classifyList: Array
  }
}
</script>>
<style lang="scss">
.classify-list {
  width: 350px;
  margin: 0 auto;
  .list-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 125px;
    padding: 0 0 0 10px;
    border-bottom: 1px solid #dbd9dc;
    position: relative;
  }
  .list-item .item-pic {
    width: 80px;
    height: 105px;
    border-radius: 6px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    img {
      width: 100%;
    }
  }
  .list-item .item-info {
    // max-width: 70%;
    margin: 0 0 0 10px;
    color: #999;
    .info-book {
      margin: 0 0 20px;
      color: #333;
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .info-author {
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 0 20px;
    }
    .info-fans {
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
