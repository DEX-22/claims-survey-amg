// Components
import Survey from '@/views/survey/Survey.vue'
import Question from '@/components/Question.vue'
import SurveyCompleted from '@/views/survey/SurveyCompleted.vue'

// Interfaces
import { RouterPathI, ValidateAccessI } from '@/types/index'

export default{
    path: '/survey',
    name: 'survey-index',
    component: Survey,
    beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void){
        const token = window.localStorage.getItem('clave')
        
        if(!token)
            window.localStorage.setItem('clave','asdasdasda')
        
        next()
        
    },
    children:[
        {

            path: 'question/:id',
            name: 'survey-question',
            component: Question,
        },
        {
            path:'/completed',
            name: 'survey-completed',
            component: SurveyCompleted,
        }
    ]
}