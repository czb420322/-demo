import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component:()=>import('../pages/input.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/home/downTime',
        name: "DownTime",
        component: () => import('../views/downTime.vue')
    },
    {
        path: "/home/elementTable",
        name: "ElementTable",
        component: () => import("../views/ElementTable.vue")
    },
    {
        path: "/home/image",
        name: "Image",
        component: () => import("../views/EditableCell.vue")
    },
    {
        path: "/home/table",
        name: "Table",
        component: () => import("../views/table/MultiTable.vue")
    },
    {
        path: '/home/scroll',
        name: "Scroll",
        component: () => import("../views/tigers/RunScrollNum.vue")
    },
    {
        path: "/home/tree",
        name: "Tree",
        component: () => import("../views/tree/ParentMenueTree.vue")
    },
    {
        path: "/home/echarts",
        name: "Echarts",
        component: () => import("../views/echarts/Echarts.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router