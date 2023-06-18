<template>
    <h2>
        esta es la pregunta {{id}}
    </h2>
    <!-- <button @click="goToNextQuestion"> -->
        <button @click="goTo('prev')" :disabled="id == 0" class="btn blue" >
            Prev 
        </button>
        <button @click="goTo('next')" :disabled="id == totalPages" class="btn blue" >
            Next 
        </button>

    <!-- </button> -->
</template>
<script lang="ts">

import { questionsStore } from '@/stores/questions.store'

export default{
    methods:{
        goTo(page : string){
            
            if(page == 'next')
                this.$router.push({name:'survey-question',params:this.nextPage})
            else
                this.$router.push({name:'survey-question',params:this.prevPage})



        },
    },
    computed:{
        id(){
            
            return parseInt(this.$route.params.id)
        },
        totalPages(){
            return questionsStore().count
        },
        nextPage(){

            const param = {
                id: this.id == this.totalPages ? this.id : (this.id+1)
            }

            return param
        },
        prevPage(){
            
            const param = {
                id: this.id == 0 ? this.id : (this.id-1)
            }

            return param
        }
    }
}

</script>
<style scoped>

</style>