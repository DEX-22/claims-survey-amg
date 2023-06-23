// Components
import Survey from '@/views/survey/Survey.vue'
import Question from '@/components/Question.vue'
import Questions from '@/components/Questions.vue'
import MainSurvey from '@/components/MainSurvey.vue'
import SurveyCompleted from '@/views/survey/SurveyCompleted.vue'

// Interfaces
import { RouterPathI, ValidateAccessI } from '@/types/index'

import { questionsStore } from '@/stores/questions.store'
import Service from '@/services/index'

const getQuestions = async () => {
       
    const store = questionsStore()

    const hasQuestions = window.localStorage.getItem('questions')
    
    let questions

    if(!hasQuestions)
        questions = await Service.getQuestions()
    else
        questions = JSON.parse(hasQuestions)
        

    store.setQuestions(questions)


    
}



export default{
    path: '/survey',
    name: 'survey-index',
    component: Survey,
    redirect:{name:'survey-start'},
    async beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void){
        // const token = window.localStorage.getItem('token')
        
        // if(!token)

            
            await getQuestions()  
        
        next()
        
    },
    
    children:[
       
        {
            path:'questions',
            name:'survey-questions',
            component: MainSurvey,
            // redirect:{name:'survey-question',params:{id:1}},
            /* children:[
                {

                    path: ':id',
                    name: 'survey-question',
                    component: Question,
                },
            ] */
        },
        {
            path:'completed',
            name: 'survey-completed',
            component: SurveyCompleted,
        }
    ]
}