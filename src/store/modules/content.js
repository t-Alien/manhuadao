import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    details: [],
    comicslist: []
  },
  getters: {
  },
  mutations: {
    setDetails (state, payload) {
      state.details = payload.info
    }
  },
  actions: {
    getDetails ({ commit }) {
      request.get('https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1')
        .then(response => {
          if (response.code === 200) {
            commit({
              type: 'setDetails',
              info: response.info
            })
          }
        })
    }
  }
}
