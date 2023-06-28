// Components
import Survey from '@/views/survey/Survey.vue'
import MainSurvey from '@/components/MainSurvey.vue'
import SurveyCompleted from '@/views/survey/SurveyCompleted.vue'

// Interfaces
import { RouterPathI, ValidateAccessI } from '@/types/index'

export default{
    path: '/survey',
    name: 'survey-index',
    component: Survey,
    redirect:{name:'survey-start'},
    async beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void){
        // const token = window.localStorage.getItem('token')
        
        // if(!token)
        
        next()
        
    },
    
    children:[
        {
            path:'questions',
            name:'survey-questions',
            component: MainSurvey,
        },
    ]
}