import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'


import RoutersJSON from './router'




const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo-list',
    name: 'demolist',
    meta:{tittle:"列表"},
    component: () => import('@/views-demo/list/index.vue')
  },
  {
    path: '/demo-form',
    name: 'demoForm',
    meta:{tittle:"表单"},
    component: () => import('@/views-demo/form/index.vue')
  },

  {
    path: '/',
    name: 'home',
    meta:{tittle:"首页"},
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


/**
 * 路由拦截
 */
router.beforeEach((to, from, next) => {
  const {meta,path}=to;

  // add tabs
  if( !meta.independ ){
    store.dispatch("addTabs",{
      name:meta.tittle,
      path:path
    })
  }

  next();
})

export default router
