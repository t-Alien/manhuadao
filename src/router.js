import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    component: () => import('./views/Home/index.vue')
  },
  {
    // 分类页
    path: '/classify',
    component: () => import('./views/Classify/index.vue')
  },
  {
    // 排行页
    path: '/ranking',
    component: () => import('./views/Ranking/index.vue')
  },
  {
    // vip专区页
    path: '/vip',
    component: () => import('./views/Vip/index.vue')
  },
  {
    // 历史页
    path: '/history',
    component: () => import('./views/History/index.vue')
  },
  {
    // 收藏页
    path: '/favorite',
    component: () => import('./views/Favorite/index.vue')
  },
  {
    // 我的页
    path: '/mine',
    component: () => import('./views/Mine/index.vue')
  },
  {
    // 搜索页
    path: '/search',
    component: () => import('./views/Search/index.vue')
  },
  {
    // 登录页
    path: '/login',
    component: () => import('./views/Login/index.vue')
  },
  {
    // 注册页
    path: '/register',
    component: () => import('./views/Register/index.vue')
  },
  {
    // 更多页
    path: '/more/:specialid',
    component: () => import('./views/More/index.vue')
  },
  {
    // 关于页
    path: '/about',
    component: () => import('./views/About/index.vue')
  },
  {
    // 反馈页
    path: '/feedback',
    component: () => import('./views/Feedback/index.vue')
  },
  {
    // 详情页
    path: '/detail',
    component: () => import('./views/Detail/index.vue')
  },
  {
    // 我的账户页
    path: '/account',
    component: () => import('./views/Account/index.vue')
  },
  {
    // 兑换页
    path: '/mine-exchange',
    component: () => import('./views/mineExchange/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
