import Auth from "@/views/auth/Auth.vue"
import Service from "@/services/index"
import type {  ValidateAccessI,RouterPathI } from "@/types/index"

import SURVEY from '@/data/list-views';

export default {
    path: '/auth/:id',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth,
    async beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void) {
        // next()
        
      const client = await Service.validateAccess({id:to.params.id})
      localStorage.setItem('claim_survey_id', client.id)
      if (client.access) {
            localStorage.setItem('token', client.token)
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

