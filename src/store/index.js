import Vue from 'vue'

import Vuex from 'vuex'

import banner from './modules/banner'
import content from './modules/content'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banner,
    content
  }
})
