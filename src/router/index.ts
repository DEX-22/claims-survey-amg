import { createRouter, createWebHistory } from 'vue-router'

import AuthRouter from '@/router/auth/index'
import SurveyRouter from '@/router/survey/index'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect:{name:'auth'}
    },
    AuthRouter,
    SurveyRouter
  ]
})

export default router
