import Auth from "@/views/auth/Auth.vue"
import Service from "@/services/index"
import { authStore } from "@/stores/auth.store"
import type {  ValidateAccessI,RouterPathI, SurveyViewsI, AuthI } from "@/types/index"

const SURVEY:SurveyViewsI = {
  INDEX: {name: 'survey-index',},
  QUESTION: {name: 'survey-questions'},
  EXPIRED: {name: 'survey-expired',},
  COMPLETED: {name: 'survey-completed'},
  NOT_FOUND : {name: 'not-found'}
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
      
      if(auth.isLogged)
          next(SURVEY['QUESTION'])
      
      
      switch (client.status) {
        case 'PENDING':
          
          setToken(auth,client.token)
          next(SURVEY['INDEX'])

          break;
        case 'IN PROCESS':
        
          next(SURVEY['QUESTION'])          

          break;
        case 'COMPLETED':
      
          next(SURVEY['COMPLETED'])

        break;
        }
          

        
          
      
        

      // if(!client.access && !client.status) next({name: 'not-found'})
      // else if(client.status == 'COMPLETED'){
      //   window.localStorage.setItem('isCompleted', true)
      //   next(SURVEY['COMPLETED'])
      // }
      // else if(client.access && client.status == 'PENDING'){
      //   setToken(auth,client.token)
      //   next(SURVEY['INDEX'])
        
      // }  
      // else if(client.access && client.status == 'IN PROCESS') next(  SURVEY['QUESTION'])
      // else if(!client.access && client.status == 'TIME EXPIRED') next(SURVEY['EXPIRED'])
      // else next({name: 'not-found'})
              
  
         
      },
  }

