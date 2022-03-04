import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RoutersJSON from './router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo-list',
    name: 'demolist',
    component: () => import('@/views-demo/list/index.vue')
  },


  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta:{independ:true},
    components: {
      independ: ()=> import('@/layout/login.vue')
    }
  },
  ...RoutersJSON.routes,  // 业务代码配置
  { 
    path: '/:pathMatch(.*)', 
    component: () => import("@/router/404.vue") 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
