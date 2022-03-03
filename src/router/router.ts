/**
 * 路由配置
*/

export default {
    routes:[
        {
            path: '/aaa',
            name: 'aaa',
            component: () => import('@/views/AboutView.vue')
        }, 
        {
            path: '/bbb',
            name: 'bbb',
            component: () => import('@/views/HomeView.vue')
        },                
    ]
}