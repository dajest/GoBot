import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import RunbotView from '../views/RunbotView.vue'
import ConfigureView from '../views/ConfigureView.vue'
import StatisticsView from '../views/StatisticsView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/runbot',
    name: 'RunbotView',
    component: RunbotView
  },
  {
    path: '/configure',
    name: 'ConfigureView',
    component: ConfigureView
  },
  {
    path: '/statistics',
    name: 'StatisticsView',
    component: StatisticsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
