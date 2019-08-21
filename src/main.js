import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import { Swipe, SwipeItem ,Grid, GridItem,Image, Tab, Tabs, Toast,Search } from 'vant';
=======
import { Swipe, SwipeItem, Grid, GridItem, Image, Tab, Tabs, Toast } from 'vant'
>>>>>>> 7e80d03c4ec80569217e608335eba4c15fc753e9

import TabBar from './components/TabBar/index'

import './assets/styles/base.scss'
import 'vant/lib/index.css'
Vue.config.productionTip = false

Vue.use(Swipe)
<<<<<<< HEAD
.use(SwipeItem)
.use(Grid)
.use(GridItem)
.use(Image)
.use(Tab)
.use(Tabs)
.use(Toast)
.use(Search)
=======
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(TabBar)
>>>>>>> 7e80d03c4ec80569217e608335eba4c15fc753e9

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
