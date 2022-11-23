import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import toyApp from '../views/toy-app.vue'
import toyChart from '../views/toy-chart.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
    {
      path: '/toy/chart',
      name: 'toy-chart',
      component: toyChart,
    },
    {
      path: '/toy/:_id',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:_id?',
      name: 'toy-edit',
      component: toyEdit,
    },
  ]
})

export default router
