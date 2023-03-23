// 路由模块
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    // 重定向
    {
        path    : '/',
        redirect: '/login'
    },
    // 登录
    {
        path     : '/login',
        name     : 'login',
        component: () => import('../views/Login/index.vue')
    },
    {
        // 主页
        path     : '/home',
        name     : 'home',
        component: () => import('../components/Home/index.vue'),
        redirect : '/welcome',
        children : [
            // 首页
            {
                path     : '/welcome',
                name     : 'welcome',
                component: () => import('../views/Welcome/index.vue')
            },
            //商品管理
            {
                path     : '/goods',
                name     : 'goods',
                component: () => import('../views/Goods/index.vue')
            },
            //订单管理
            {
                path     : '/order',
                name     : 'order',
                component: () => import('../views/Order/index.vue')
            }
        ]
    },
    //     404
    {
        path     : '/:pathMatch(.*)*',
        name     : 'not-found',
        component: () => import('../components/NotFound.vue')
    }
];
