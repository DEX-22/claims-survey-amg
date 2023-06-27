<template>
    <Header></Header>
        <RouterView />
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

