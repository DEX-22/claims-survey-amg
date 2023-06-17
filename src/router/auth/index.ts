import Auth from "@/views/auth/Auth.vue"
import Service from "@/services/index"
import { authStore } from "@/stores/auth.store"
import type {  ValidateAccessI,RouterPathI, SurveyViewsI, AuthI } from "@/types/index"

const SURVEY:SurveyViewsI = {
  INDEX: {name: 'survey-index',},
  QUESTION: {name: 'survey-question',params:{id: 1}},
  EXPIRED: {name: 'survey-expired',},
  COMPLETED: {name: 'survey-completed'},
}


const setToken = (auth,token: string) => { 
  let existsToken : string | null = window.localStorage.getItem('token')
  

  if(!existsToken)
    window.localStorage.setItem('token',token)
  
  
  auth.setToken(token)

  

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

      const auth = authStore()
  

      if(!client.access && !client.status) next({name: 'not-found'})
      else if(client.access && client.status == 'PENDING'){
        setToken(auth,client.token)
        next(SURVEY['INDEX'])
        
      }  
      else if(client.access && client.status == 'IN PROCESS') next(  SURVEY['QUESTION'])
      else if(!client.access && client.status == 'TIME EXPIRED') next(SURVEY['EXPIRED'])
      else if(!client.access && client.status == 'COMPLETED') next(SURVEY['COMPLETED'])
      else next({name: 'not-found'})
              
  
         
      },
  }

