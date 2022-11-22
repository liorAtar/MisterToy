import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import toyApp from '../pages/toy-app.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/toy',
      component: toyApp
    }
  ]
})

export default router
