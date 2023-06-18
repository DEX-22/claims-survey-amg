// Components
import Survey from '@/views/survey/Survey.vue'
import Question from '@/components/Question.vue'
import Questions from '@/components/Questions.vue'
import SurveyStart from '@/views/survey/SurveyStart.vue'
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
        
        // console.log(questions,'questions');
    store.setQuestions(questions)
}



export default{
    path: '/survey',
    name: 'survey-index',
    component: Survey,
    redirect:{name:'survey-start'},
    beforeEnter(to: { params: ValidateAccessI }, from: string, next: ( path? : RouterPathI) => void){
        const token = window.localStorage.getItem('clave')
        
        if(!token)
            window.localStorage.setItem('clave','asdasdasda')
        
        next()
        
    },
    children:[
        {
            path: 'start',
            name: 'survey-start',
            component: SurveyStart,
            async beforeEnter(to: { params: ValidateAccessI }, from: string) {
             
                await getQuestions()   

            }
        },
        {
            path:'questions',
            name:'survey-questions',
            component: Questions,
            redirect:{name:'survey-question',params:{id:1}},
            children:[
                {

                    path: ':id',
                    name: 'survey-question',
                    component: Question,
                },
            ]
        },
        {
            path:'completed',
            name: 'survey-completed',
            component: SurveyCompleted,
        }
    ]
}