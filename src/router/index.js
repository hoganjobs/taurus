import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Jetsod from '../views/Jetsod.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'main',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', icon: 'form' }
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/Account.vue'),
        meta: { title: '预警分析', icon: 'form' }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/jetsod',
    name: 'jetsod',
    component: Jetsod
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
