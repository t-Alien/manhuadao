import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    //首页
    path: '/',
    component: () => import('./views/Home/index.vue')
  },
  {
    //分类页
    path: '/classify',
    component: () => import('./views/Classify/index.vue')
  },
  {
    //排行页
    path: '/ranking',
    component: () => import('./views/Ranking/index.vue')
  },
  {
    //vip专区页
    path: '/vip',
    component: () => import('./views/Vip/index.vue')
  },
  {
    //历史页
    path: '/history',
    component: () => import('./views/History/index.vue')
  },
  {
    //收藏页
    path: '/favorite',
    component: () => import('./views/Favorite/index.vue')
  },
  {
    //我的页
    path: '/mine',
    component: () => import('./views/Mine/index.vue'),
    meta: {
      title: '我的'
    }
  },
  {
    //搜索页
    path: '/search',
    component: () => import('./views/Search/index.vue')
  },
  {
    //登录页
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    //注册页
    path: '/register',
    name: 'Register',
    component: () => import('./views/Register/index.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    //更多页
    path: '/more/:specialid',
    component: () => import('./views/More/index.vue')
  },
  {
    //关于页
    path: '/about',
    component: () => import('./views/About/index.vue')
  },
  {
    //反馈页
    path: '/feedback',
    component: () => import('./views/Feedback/index.vue'),
    meta: {
      title: '求书&反馈-海量正版页面在线阅读！吃我漫画岛安利'
    }
  },
  {
    //详情页
    path: '/detail',
    component: () => import('./views/Detail/index.vue')
  },
  {
    //我的账户页
    path: '/account',
    component: () => import('./views/Account/index.vue')
  },
  {
    //兑换页
    path: '/mine-exchange',
    component: () => import('./views/mineExchange/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
