<template>

<!-- <Header></Header> -->
    <h2>SURVEY</h2>
    <RouterView />


<!-- <Questions></Questions> -->
</template>




<script lang="ts">
import Header from '@/components/templates/Header.vue';
import Questions from '@/components/Questions.vue';
export default {
    components: {
    Header,
    Questions,
    }
}


</script>
