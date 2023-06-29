import { createRouter, createWebHistory } from 'vue-router'

//routers
import AuthRouter from '@/router/auth/index'
import SurveyRouter from '@/router/survey/index'
import ErrorRouter from '@/router/error/index'

import { RouterPathI, ValidateAccessI } from '@/types/index'

//views
import SurveyStart from '@/views/survey/SurveyStart.vue'
import SurveyCompleted from '@/views/survey/SurveyCompleted.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/survey/start',
      name: 'survey-start',
      component: SurveyStart,
      async beforeEnter(to: { params: ValidateAccessI }, from: string,next) {
        
          next()
      }
  },
  {
    path: '/survey/completed',
    name: 'survey-completed',
    component: SurveyCompleted,
    async beforeEnter(to: { params: ValidateAccessI }, from: string,next) {
      
        next()
    }
},
    ErrorRouter,
    AuthRouter,
    SurveyRouter
  ]
})

router.beforeEach((to: { params: ValidateAccessI,name? : string }, from: {name? : string},next: ()=>void)=>{

  let page = undefined 

  // TODO *** REDIRECCIONAMIENTO - VALIDACION DE TOKEN
  // const auth = authStore()


  // if()  
  // console.log('each');
  
  // console.log(auth.isLogged);

  next()


    // if(store.isLogged) 
    // else next({name:'not-found'})




  // if(from.name != 'survey-completed') return {name:'survey-completed'}

  // else if ( to.name === 'auth' )  return true

  // else if ( from.name === 'survey-completed' )  return false

  // else if ( to.name === 'survey-start' && from.name === 'survey-questions'  )  return false
    
  // else if(to.name != 'not-found' &&  !store.isLogged ) return {name:'not-found'}
  
  })

export default router
