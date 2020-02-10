import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Jetsod from '../views/Jetsod.vue'
import Detail from '../views/Detail.vue'
import Address from '../views/Address.vue'
import Collection from '../views/Collection.vue'
import Deliver from '../views/Deliver.vue'
import Payment from '../views/Payment.vue'
import Record from '../views/Record.vue'

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
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/jetsod',
    name: 'jetsod',
    component: Jetsod
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/deliver',
    name: 'deliver',
    component: Deliver
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/record',
    name: 'record',
    component: Record
  },
]

const router = new VueRouter({
  routes
})

export default router
