<template>
  <!-- vip VIP专区组件页面 -->
  <div class="page-vip">
    <ul>
      <li v-for="item in vipList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>作者：{{item.author}}</p>
          <p>人气：{{item.popularity}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '../../utils/request'

export default {
  name: 'vip',
  data() {
    return {
      vipList: []
    }
  },
  computed: {
    // setvipList(value) {
    //   this.vipList = value
    // }
  },
  methods: {
    getVipList() {
      request.get('/vip').then(data => {
        //console.log(response.data)
        this.vipList = data
      })
    }
  },
  created() {
    this.getVipList()
  }
}
</script>>
