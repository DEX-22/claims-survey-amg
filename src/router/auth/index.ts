import Auth from "@/views/auth/Auth.vue"
import Service from "@/services/index"
import type {  ValidateAccessI,RouterPathI, SurveyViewsI } from "@/types/index"

const SURVEY:SurveyViewsI = {
  INDEX: {name: 'survey-start',},
  QUESTION: {name: 'survey-questions'},
  COMPLETED: {name: 'survey-completed'},
  NOT_FOUND : {name: 'not-found'}
}

export default {
    path: '/auth/:id',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth,
    async beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void) {
        

      const client = await Service.validateAccess({id:to.params.id})
      
      if (client.access) {
            next(SURVEY['INDEX'])
      } else {
        if(client.status == 'COMPLETED') {
            next(SURVEY['COMPLETED'])
        } else {
          next(SURVEY['NOT_FOUND'])
        }
      }

    },
  }

