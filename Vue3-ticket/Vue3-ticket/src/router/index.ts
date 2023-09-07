import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/MainView.vue'),
      children: [
        {
          path: 'home',
          name: 'HomeView',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/user',
          name: 'UserView',
          component: () => import('@/views/UserView.vue'),
          meta: { title: '用户信息' }
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('@/views/LoginView.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { title: '注册账号' }
    },
    {
      path: '/imagecreate',
      name: 'ImageCreate',
      component: () => import('@/views/ImageCreate.vue'),
      meta: { title: '创建相片' }
    },
    {
      path: '/imagedetail',
      name: 'ImageDetail',
      component: () => import('@/views/ImageDetail.vue'),
      meta: { title: '相片详情' }
    },
    {
      path: '/search',
      name: 'SearchView',
      component: () => import('@/views/SearchView.vue'),
      meta: { title: '搜索' }
    },
    {
      path: '/retrievePassword',
      name: 'RetrievePassword',
      component: () => import('@/views/RetrievePassword.vue'),
      meta: { title: '忘记密码' }
    },
    {
      path: '/setup',
      name: 'SetupView',
      component: () => import('@/views/SetupView.vue'),
      meta: { title: '设置' }
    },
    {
      path: '/useragreement',
      name: 'UserAgreement',
      component: () => import('@/views/UserAgreement.vue'),
      meta: { title: '用户协议' }
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: () => import('@/views/PrivacyPolicy.vue'),
      meta: { title: '隐私政策' }
    },
    {
      path: '/help',
      name: 'HelpView',
      component: () => import('@/views/HelpView.vue'),
      meta: { title: '查看帮助' }
    },
    {
      path: '/homepage',
      name: 'HomePage',
      redirect: '/homepage/myhome',
      component: () => import('@/views/HomePage.vue'),
      meta: { title: '个人中心' },
      children: [
        {
          path: 'myhome',
          name: 'MyHome',
          component: () => import('@/views/MyHome.vue'),
          meta: { title: '个人中心主页' }
        },
        {
          path: 'mytrand',
          name: 'MyTrand',
          component: () => import('@/views/MyTrand.vue'),
          meta: { title: '个人中心动态' }
        },
        {
          path: 'mycollect',
          name: 'MyCollect',
          component: () => import('@/views/MyCollect.vue'),
          meta: { title: '个人中心收藏' }
        }
      ]
    },
    {
      path: '/mysearch',
      name: 'MySearch',
      component: () => import('@/views/MySearch.vue'),
      meta: { title: '个人中心搜索' }
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('@/views/EditView.vue'),
      meta: { title: '编辑资料' }
    },
    {
      path: '/followfans',
      name: 'FollowFans',
      component: () => import('@/views/FollowFans.vue'),
      meta: { title: '关注与粉丝' },
      children: [
        {
          path: 'follow',
          name: 'Follow',
          component: () => import('@/views/FollowView.vue'),
          meta: { title: '关注' }
        },
        {
          path: 'fans',
          name: 'Fans',
          component: () => import('@/views/FansView.vue'),
          meta: { title: '粉丝' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: () => import('@/views/NotFount.vue'),
      meta: { title: '404' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')

  if (token) {
    if (to.path === '/login') {
      // 已登录
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录
    if (
      to.path !== '/login' &&
      to.path !== '/register' &&
      to.path !== '/retrievePassword' &&
      to.path !== '/PrivacyPolicy' &&
      to.path !== '/help' &&
      to.path !== '/user' &&
      to.path !== '/home' &&
      to.path !== '/useragreement'
    ) {
      if (to.path === '/register') {
        next('/register')
      }
      next('/login')
    } else {
      next()
    }
  }
})
router.afterEach((to, from) => {
  const { title } = to.meta || {}
  document.title = title || '立减金'
})

export default router
