import { createRouter, createWebHistory } from 'vue-router'

//routers
import AuthRouter from '@/router/auth/index'
import SurveyRouter from '@/router/survey/index'
import ErrorRouter from '@/router/error/index'

//views
import SurveyStart from '@/views/survey/SurveyStart.vue'
import SurveyCompleted from '@/views/survey/SurveyCompleted.vue'

import { RouterPathI, ValidateAccessI } from '@/types/index'
import Service from "@/services/index"
import SURVEY from '@/data/list-views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/survey/start',
      name: 'survey-start',
      component: SurveyStart,
      async beforeEnter(to: { params: ValidateAccessI }, from: string,next) {
        const client = await Service.validateAccess({id:localStorage.getItem('token') || ""})
        if (client.access) {
            next()
        } else {
          if(client.status == "COMPLETED") {
            next(SURVEY['COMPLETED'])
        } else {
            next(SURVEY['NOT_FOUND'])
          }
        }
      }
  },

  {
    path: '/survey/completed',
    name: 'survey-completed',
    component: SurveyCompleted,
    async beforeEnter(to: { params: ValidateAccessI }, from: string,next) {
      const client = await Service.validateAccess({id:localStorage.getItem('token') || ""})
      if ((client.access && from.path == "/survey/questions") || (client.status == "COMPLETED")) {
          next()
      } else {
          next(SURVEY['NOT_FOUND'])
      }
    }
},
    ErrorRouter,
    AuthRouter,
    SurveyRouter
  ]
})

router.beforeEach((to: { params: ValidateAccessI,name? : string }, from: {name? : string},next: ()=>void)=>{

  const pathsPermited = [];

  for(const [key, value] of Object.entries(SURVEY)){
    pathsPermited.push(value.name)
  }

  pathsPermited.includes(to.name) ? next() : next(SURVEY['NOT_FOUND'])

})

export default router
