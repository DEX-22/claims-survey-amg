import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//types
import QuestionI from '@/types/index'


const state = ()=>{
    return {
        questions: [],
        question:  {}

    }

}
const actions = {
    setQuestions(question: QuestionI){
        this.question = question
    }

}

const getters = {
    currentQuestion: ({question}:{question:QuestionI}) => question,
    listQuestions: ({questions}:{questions:QuestionI[]})=>questions
}


export const questionsStore = defineStore('questions', {
  
    state,actions,getters
})
