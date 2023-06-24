<template>
  <div class="main">
    <div class="main__container" v-if="listQuestions.length > 0">
      <Questions
        v-for="(q,id) in listQuestions" :key="id"
        @changeQuestion="changeQuestion"
        :detailsQuestion="listQuestions[id]" 
        :totalQuestions="listQuestions.length"
        :qualifications="qualifications"
        />
      <div class="main__wrapper-buttons">
        <div class="main__submit">
          <button @click="sendSurvey" class="main__button">{{ $t('title-button-submit') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {questionsStore} from '@/stores/questions.store'

import Service from "../services/index";
import Questions from './Questions.vue';

export default {

  components:{
    Questions,
  },

  data() {
    return {
      listQuestions: [],
      qualifications: [
        { id : 1, text : "Terrible", icon:['far', 'face-angry']},
        { id : 2, text : "Bad", icon:['far', 'face-frown']},
        { id : 3, text : "Regular", icon:['far', 'face-meh']},
        { id : 4, text : "Good", icon: ['far', 'face-smile']},
        { id : 5, text : "Excellent", icon: ['far', 'face-grin-stars']},
      ],
      indexQ: 0,
    }
  },

  created() {
    this.getQuestions();
  },

  methods:{
    getQuestions() {
      this.listQuestions = JSON.parse(localStorage.getItem('questionDetails')) || questionsStore().getAll;
    },

    async sendSurvey(){


      const validRates = this.listQuestions.every(question => question.rate != null);

      if(validRates){
        alert("respondiste todo")
        await Service.sendSurvey({survey_id: 1,answers: questionsStore().getAll})
        this.$router.push({name: 'survey-completed'})
      }else{
        alert("te falta responder")
      }
    },

    changeQuestion(){
      localStorage.setItem('questionDetails', JSON.stringify(this.listQuestions));
      }

  },

}
</script>

<style scoped>

.main{
  
  background: white;
  box-shadow: 0px 0px 30px 0px var(--vt-c-white-soft);
  border-radius: 20px;
  margin: -80px 15px 50px 15px;
  padding-right: 15px;
  padding-left: 15px;
}

.main__paginate button{
  background: lightblue;
  padding: 12px 20px;
  margin: 12px 20px;
  border-radius: 10px;

}

.main__container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main__paginate{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.main__submit{
  text-align: center;
  
}
.main__button{

  background: var(--color-blue-dark);
  border-radius: 4px;
  color: white;
  font-size: 15px;
  text-align: center;
  width: 82px;
  height: 36px;
  margin: 25px auto 50px auto;
  transition: all .3s ease;
}

.main__button:active{
  transform: scale(1.1);

}


@media (min-width: 768px) { 
  .main{
    margin: -80px 100px 50px 100px;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .main{
  margin: -80px 150px 50px 150px;
  }

  .main__button{

  font-size: 19px;
  width: 110px;
  height: 43px;

  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  .main{
  margin: -80px 200px 50px 200px;
  }
}


</style>
