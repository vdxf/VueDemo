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
      path: '/retrievePassword',
      name: 'RetrievePassword',
      component: () => import('@/views/RetrievePassword.vue'),
      meta: { title: '找回密码' }
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
      component: () => import('@/views/HomePage.vue'),
      meta: { title: '个人中心' }
    },
    {
      path: '/myCollect',
      name: 'MyCollect',
      component: () => import('@/views/MyCollect.vue'),
      meta: { title: '我的收藏' }
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('@/views/EditView.vue'),
      meta: { title: '编辑资料' }
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: () => import('@/views/NotFount.vue'),
      meta: { title: '404' }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = window.localStorage.getItem('token')

//   if (token) {
//     if (to.path === '/login') {
//       // 已登录
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     // 未登录
//     if (to.path !== '/login' && to.path !== '/register') {
//       if (to.path === '/register') {
//         next('/register')
//       }
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })
router.afterEach((to, from) => {
  const { title } = to.meta || {}
  document.title = title || '立减金'
})

export default router
