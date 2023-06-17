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
    setQuestion(question: QuestionI){
        this.question = question
    },
    setQuestions(questions: QuestionI[]){
        this.questions = [...questions]
    }

}

const getters = {
    getCurrent: ({question}:{question:QuestionI}) => question,
    getAll: ({questions}:{questions:QuestionI[]})=>questions
}


export const questionsStore = defineStore('questions', {
  
    state,actions,getters
})
