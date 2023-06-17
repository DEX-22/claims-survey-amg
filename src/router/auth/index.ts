import Auth from "@/views/auth/Auth.vue"
import Service from "@/services/index"
import { ValidateAccessI,RouterPathI } from "@/types/index"

export default {
    path: '/auth/:id',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth,
    async beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void) {
        
      const client = await Service.validateAccess({id:to.params.id})

      if(!client.access && !client.status) next({name: 'not-found'})
      else if(!client.access && client.status == 'COMPLETED') next({name: 'survey-completed'})
      else if(client.access && client.status == 'PENDING') next({name:'survey-index'})
      else if(client.access && client.status == 'IN PROCESS') next(  {name: 'survey-question',params:{id: 1}})
      else next({name: 'not-found'})
              
  
         
      },
  }

