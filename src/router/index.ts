import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Login.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'index',
        component: Home,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
