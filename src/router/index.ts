import { createRouter, createWebHistory } from 'vue-router'

//routers
import AuthRouter from '@/router/auth/index'
import SurveyRouter from '@/router/survey/index'
import ErrorRouter from '@/router/error/index'

//store
import { authStore } from '@/stores/auth.store'
import { RouterPathI, ValidateAccessI } from '@/types/index'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'only-home',
      component: ()=> import('@/views/HomeView.vue'),
      redirect:{name:'not-found'}
    },
    {
      path: '/:some',
      name: 'home',
      component: ()=> import('@/views/HomeView.vue'),
      redirect:{name:'not-found'}
    },
    {
      path:'/time-expired',
      name: 'survey-expired',
      component: ()=>import('@/views/survey/SurveyExpired.vue'),
    },
    ErrorRouter,
    AuthRouter,
    SurveyRouter
  ]
})

router.beforeEach((to: { params: ValidateAccessI,name? : string }, from: {name? : string})=>{

  let page = undefined 
  const store = authStore()

  // console.log();
  

  if ( to.name === 'auth' )  return true

  if ( from.name === 'survey-completed' )  return false
    
  if(to.name != 'not-found' &&  !store.isLogged ) return {name:'not-found'}
  
  })

export default router
