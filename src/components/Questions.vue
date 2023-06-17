<template lang="">
    <div>
        <h2>Question </h2>
        <RouterView />
    </div>
</template>
<script>
export default {
    computed:{
        id(){
            return this.$route.params
        }
    }
}
</script>
<style lang="">
    
</style>