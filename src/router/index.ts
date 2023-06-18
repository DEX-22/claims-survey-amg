import { createRouter, createWebHistory } from 'vue-router'

//routers
import AuthRouter from '@/router/auth/index'
import SurveyRouter from '@/router/survey/index'
import ErrorRouter from '@/router/error/index'

//views
import HomeView from '@/views/HomeView.vue'
import SurveyExpired from '@/views/survey/SurveyExpired.vue'

//store
import { authStore } from '@/stores/auth.store'


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

// router.beforeEach((to, from, next)=>{

//   let page = undefined 
//   const store = authStore()

//   if ( !store.isLogged )  next({ path: '/not-found', replace: true})
  
//   next();
  
//   })

export default router
