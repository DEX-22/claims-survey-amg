<template>
    
    <button class="btn green" @click="startSurvey" > 
        start survey
    </button>
    
    
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

            this.$router.push({name:'survey-questions'})
      }
    },
    mounted(){
        
        this.questions = questionsStore().getAll


    },
    computed:{
    }

}


</script>