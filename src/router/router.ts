/**
 * 路由配置
*/

export default {
    routes:[
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue')
        },        
    ]
}