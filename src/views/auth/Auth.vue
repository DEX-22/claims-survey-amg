<template>
    <h2 class="bg-blue-500">auth</h2>
    <pre>{{id}}</pre>
</template>
<script lang="ts">

export default{
    data(){
        return {

        }
    },
    
    methods:{

    },
    computed:{
        id(){
            return this.$route.params.id
        }
    }
}


</script>