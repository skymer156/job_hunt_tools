import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'EStools',
    component: () => import('../views/EStools.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router