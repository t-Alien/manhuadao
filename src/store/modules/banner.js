import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    bannerList: []// 轮播图数据
  },

  getters: {

  },

  mutations: {
    setBannerList (state, payload) {
      state.bannerList = payload.info
    }
  },
  actions: {
    getBannerList ({ commit }) {
      request.get('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123').then(response => {
        if (response.code === 200) {
          commit({
            type: 'setBannerList',
            info: response.info
          })
        }
      })
    }
  }
}
