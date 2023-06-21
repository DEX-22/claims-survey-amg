<template>
    <Header></Header>
    <!-- <MainSurvey></MainSurvey> -->
    <!-- <div class="h-36"> -->
        <RouterView />
    <!-- </div> -->
    
    <Footer></Footer>
</template>


<script lang="ts">

import Header from '@/components/templates/Header.vue';
import Footer from '@/components/templates/Footer.vue';
import MainSurvey from '@/components/MainSurvey.vue';
export default {
    components: {
    Header,
    MainSurvey,
    Footer,
    }
}


</script>

<style scoped>
</style>

