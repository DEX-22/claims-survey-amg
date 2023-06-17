import { createRouter, createWebHistory } from 'vue-router'

import AuthRouter from '@/router/auth/index'
import SurveyRouter from '@/router/survey/index'
import ErrorRouter from '@/router/error/index'


import HomeView from '@/views/HomeView.vue'
import SurveyExpired from '@/views/survey/SurveyExpired.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'only-home',
      component: HomeView,
      redirect:{name:'not-found'}
    },
    {
      path: '/:some',
      name: 'home',
      component: HomeView,
      redirect:{name:'not-found'}
    },
    {
      path:'/time-expired',
      name: 'survey-expired',
      component: SurveyExpired,
    },
    ErrorRouter,
    AuthRouter,
    SurveyRouter
  ]
})

export default router
