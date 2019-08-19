import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import { Swipe, SwipeItem ,Grid, GridItem,Image} from 'vant';

import "./assets/styles/base.scss";
import 'vant/lib/index.css';
Vue.config.productionTip = false;

Vue.use(Swipe)
.use(SwipeItem)
.use(Grid)
.use(GridItem)
.use(Image);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
