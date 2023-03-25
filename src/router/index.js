import { createRouter, createWebHistory } from 'vue-router'
import EmployeeListView from '../views/EmployeeListView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'employee-list',
      component: EmployeeListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
