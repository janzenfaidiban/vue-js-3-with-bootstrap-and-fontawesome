import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import SaCodesWeekend from '../views/community/SaCodesWeekend.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/community/sacodes-weekend',
    name: 'sacodes-weekend',
    component: SaCodesWeekend
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
