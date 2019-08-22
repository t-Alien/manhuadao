import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    component: () => import('./views/Home/index.vue'),
    meta: {
      title: '漫画岛'
    }
  },
  {
    // 分类页
    path: '/classify',
    component: () => import('./views/Classify/index.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    // 排行页
    path: '/ranking',
    component: () => import('./views/Ranking/index.vue'),
    meta: {
      title: '排行榜'
    }
  },
  {
    // vip专区页
    path: '/vip',
    component: () => import('./views/Vip/index.vue'),
    meta: {
      title: 'Vip专区'
    }
  },
  {
    // 历史页
    path: '/history',
    component: () => import('./views/History/index.vue'),
    meta: {
      title: '历史'
    }
  },
  {
    // 收藏页
    path: '/favorite',
    component: () => import('./views/Favorite/index.vue'),
    meta: {
      title: '收藏'
    }
  },
  {
    // 我的页
    path: '/mine',
    component: () => import('./views/Mine/index.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    // 登录之后的我的页面
    path: '/mine2',
    component: () => import('./views/Mine2/index.vue')
  },
  {
    // 搜索页
    path: '/search',
    component: () => import('./views/Search/index.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    // 登录页
    path: '/login',
    component: () => import('./views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    // 注册页
    path: '/register',
    component: () => import('./views/Register/index.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    // 更多页
    path: '/more/:id',
    component: () => import('./views/More/index.vue'),
    meta: {
      title: '分类详情'
    }
  },
  {
    // 关于页
    path: '/about',
    component: () => import('./views/About/index.vue'),
    meta: {
      title: '关于漫画岛'
    }
  },
  {
    // 反馈页
    path: '/feedback',
    component: () => import('./views/Feedback/index.vue'),
    meta: {
      title: '求书&反馈'
    }
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

router.beforeEach((to, form, next) => {
  /*路由变化修改title*/
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
