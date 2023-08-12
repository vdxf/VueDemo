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
          component: () => import('@/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
