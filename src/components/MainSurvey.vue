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
          <button
            v-tooltip="{ content: 'Please complete the survey.', disabled: validRates }"
            @click="sendSurvey"
            :class="validRates && 'button-enable'"
            class="main__button">
            {{ $t('title-button-submit') }}
          </button>
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
        { id : 1, text_en : "Terrible",text_es: "Pésimo", icon:['far', 'face-angry']},
        { id : 2, text_en : "Bad",text_es: "Malo", icon:['far', 'face-frown']},
        { id : 3, text_en : "Regular",text_es: "Regular", icon:['far', 'face-meh']},
        { id : 4, text_en : "Good",text_es: "Bueno", icon: ['far', 'face-smile']},
        { id : 5, text_en : "Excellent",text_es: "Excelente", icon: ['far', 'face-grin-stars']},
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
      if(this.validRates){
        alert("respondiste todo") //
        await Service.sendSurvey({survey_id: 1,answers: questionsStore().getAll})
        this.$router.push({name: 'survey-completed'})
      }else{
        return
      }
    },

    changeQuestion(){
      localStorage.setItem('questionDetails', JSON.stringify(this.listQuestions));
      }

  },

  computed:{
    validRates(){
      return this.listQuestions.every(question => question.rate != null)
    }
  }

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

  background: var(--vt-c-white-soft);
  border-radius: 4px;
  color: white;
  font-size: 15px;
  text-align: center;
  width: 82px;
  height: 36px;
  margin: 25px auto 50px auto;
  cursor: not-allowed;  
  transition: all .3s ease;
}

.button-enable{
  background: var(--color-blue-dark);
  cursor: pointer;
}
.button-enable:active{
  transform: scale(.9);
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
