// Components
import Survey from '@/views/survey/Survey.vue'
import MainSurvey from '@/components/MainSurvey.vue'
import SurveyCompleted from '@/views/survey/SurveyCompleted.vue'

// Interfaces
import { RouterPathI, ValidateAccessI } from '@/types/index'

import SURVEY from '@/data/list-views';

import Service from "@/services/index"

export default{
    path: '/survey',
    name: 'survey-index',
    component: Survey,
    redirect:{name:'survey-start'},
    async beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void){

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

    },
    
    children:[
        {
            path:'questions',
            name:'survey-questions',
            component: MainSurvey,
        },
    ]
}