import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tab, Tabs, Toast } from 'vant'
import './assets/styles/base.scss'
import 'vant/lib/index.css'

Vue.use(Tab)
  .use(Tabs)
  .use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
