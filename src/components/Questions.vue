<template lang="">
    <div>
        <h2>Question </h2>
        
        <li>
            {{question.question}}
        </li>

        <RouterView />
    </div>
</template>
<script>
import {questionsStore} from '@/stores/questions.store'

   

export default{
    data(){
        return{
            question: {},
        }
    },  
    methods:{
      
    },
    mounted(){
        
        this.question = questionsStore().currentQuestion


    },
    computed:{
        question () {
            return this.question
        },
        id(){
            return this.$route.params
        }
    }

}

</script>
<style lang="">
    
</style>