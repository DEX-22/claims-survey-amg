<template>
    <h2>
        esta es la pregunta {{id}}
    </h2>
    <!-- <button @click="goToNextQuestion"> -->
        <RouterLink class="btn blue" :to="`/survey/question/${parseInt(id)-1}`">
            Prev 
        </RouterLink>
        <RouterLink class="btn blue" :to="`/survey/question/${parseInt(id)+1}`">
            Next 
        </RouterLink>

    <!-- </button> -->
</template>
<script lang="ts">

export default{
    methods:{
        goToNextQuestion(){
            // console.table(this.$router.push)
            this.$router.go(2) //push({name:'survey-question',params: 2})
        }
    },
    computed:{
        id(){
            
            return this.$route.params.id
        }
    }
}

</script>
<style scoped>

</style>