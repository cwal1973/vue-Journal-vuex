import { createRouter, createWebHashHistory } from 'vue-router'

import daybookRouter from '@/modules/daybook/router/index.js'
import authRouter from '@/modules/auth/router/index.js'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard.js'

const rutas = [
  {
    path: '/',
    name: 'Home', 
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/entradas',
    beforeEnter: [ isAuthenticatedGuard ],
    ...daybookRouter
  },
  {
    path:'/auth',
    ...authRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rutas
})

export default router
