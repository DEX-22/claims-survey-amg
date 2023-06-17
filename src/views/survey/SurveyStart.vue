<template>
    
    <RouterLink class="btn green" @click="startSurvey" :to="{name:'survey-questions'}" > 
        start survey
    </RouterLink>
    
    
</template>
<script lang="ts">
import {mapActions } from 'pinia'
import {authStore,questionsStore} from '@/stores/questions.store'

   

export default{
    data(){
        return{
            questions: [],
        }
    },  
    methods:{
      startSurvey(){
            questionsStore().setQuestion(
                {
                    ...this.questions[1],
                    result: null
                }
            )
      }
    },
    mounted(){
        
        this.questions = questionsStore().getAll


    },
    computed:{
        questions () {
            return this.questions
        }
    }

}


</script>