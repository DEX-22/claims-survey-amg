<template>
  <div class="main">
    <div class="main__container" v-if="listQuestions.length > 0">
      <Question 
        v-for="(q,id) in listQuestions" :key="id"
        :detailsQuestion="listQuestions[id]" 
        :totalQuestions="listQuestions.length" 
        :questionIndex="indexQ+1" 
        :qualifications="qualifications"
        />
      <div class="main__wrapper-buttons">
        <div class="main__paginate">
          <button class="main__button" @click="changeQuestion(-1)">Prev</button>
          <button class="main__button" @click="changeQuestion(1)">Next</button>
        </div>
        <div class="main__submit">
          <button @click="sendSurvey" class="main__button btn-submit">Submit</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {questionsStore} from '@/stores/questions.store'

import Service from "../services/index";
import Question from './Question.vue';

export default {

  components:{
    Question,
  },

  data() {
    return {
      listQuestions: [],
      qualifications: [
        { id : 1, text : "Terrible"},
        { id : 2, text : "Bad"},
        { id : 3, text : "Regular"},
        { id : 4, text : "Good"},
        { id : 5, text : "Excellent"},
      ],
      indexQ: 0,
    }
  },

  created() {
    this.getQuestions();
  },

  methods:{
    getQuestions() {
      console.log(questionsStore().questions);
      
      this.listQuestions = questionsStore().getAll;
    },

    changeQuestion(index) {
        let new_index = this.indexQ + index;
  
        if (new_index < 0 || new_index >= this.listQuestions.length)
          return;
  
        this.indexQ = new_index;
      },
    sendSurvey(){
     
        this.$router.push({name: 'survey-completed'})

    }

  },

}
</script>

<style scoped>

.main{
  
  background: white;
  box-shadow: 0px 0px 15px 0px #000000;
  margin: 20px;
  border-radius: 20px;
  margin-top: -80px;
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
.btn-submit{

  background: green;
  border-radius: 15px;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  width: 200px;
  padding: 12px 20px;
  margin: 12px 20px;
}
</style>


















<!-- <template>
    <div id="app" :class="{ submitted: is_submitted }">
      <form>
        <h1>Give Your Feedback</h1>
        <rating-feedback :details="questions[curIndex]" :total-rate="totalRate"></rating-feedback>
        <div class="button_wrapper">
          <div @click="changeQuestion(-1)" :class="['button', { disabled: curIndex == 0 }]">Prev</div>
          <div @click="changeQuestion(1)" :class="['button', { disabled: curIndex == questions.length - 1 }]">Next</div>
        </div>
        <div class="submit_button_wrapper">
          <div class="button" @click="submit()">Submit</div>
        </div>
      </form>
      <div class="thank_you_wrapper">
        <h2>Thank You for Submitting Feedback</h2>
        <h3>Refresh the page to see/change your feedback</h3>
      </div>
    </div>
</template>
  
  <script>
  import Question from './Question.vue';
  
  export default {
    components: {
      Question,
    },
    data() {
      return {
        totalRate: 5,
        questions: [
          {
            question: 'How was our product?',
            rate: null
          },
          {
            question: 'How was our service?',
            rate: null
          },
          {
            question: 'How was our staff?',
            rate: null
          },
          {
            question: 'How was our website?',
            rate: null
          },
          {
            question: 'How was your experience?',
            rate: null
          }
        ],
        curIndex: 0,
        is_submitted: false
      };
    },
    methods: {
      changeQuestion(index) {
        var new_index = this.curIndex + index;
  
        if (new_index < 0 || new_index >= this.questions.length)
          return;
  
        this.curIndex = new_index;
      },
      submit() {
        localStorage.setItem('questionDetails', JSON.stringify(this.questions));
        this.is_submitted = true;
      }
    }
  };
  </script>
  
  <style scoped>
  
  #app {
    max-width: 800px;
    margin: 200px auto;
    padding: 20px 0px;
    text-align: center;
    color: #123D61;
  }
  
  #app > .thank_you_wrapper {
    display: none;
  }
  
  #app.submitted > form {
    display: none;
  }
  
  #app.submitted > .thank_you_wrapper {
    display: block;
  }
  
  h1 {
    font-size: 32px;
    padding-bottom: 30px;
    border-bottom: 1px solid #AAA;
    margin-bottom: 30px;
    text-shadow: 0px 5px 10px #888;
  }
  
  .button_wrapper {
    margin: 20px 10px;
  }
  
  .button_wrapper > .button,
  .submit_button_wrapper > .button {
    width: 100px;
    padding: 7px;
    border: 1px solid #123D61;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .button_wrapper > .button:first-child {
    float: left;
  }
  
  .button_wrapper > .button:last-child {
    float: right;
  }
  
  .button_wrapper:after {
    content: '';
    display: block;
    clear: both;
  }
  
  .button_wrapper > .button:hover {
    box-shadow: 0px 0px 20px 1px #123D61;
  }
  
  .button_wrapper > .button.disabled {
    cursor: auto;
    opacity: 0.3;
    box-shadow: none !important;
  }
  
  .submit_button_wrapper {
    padding-top: 30px;
    border-top: 1px solid #AAA;
    margin-top: 30px;
  }
  
  .submit_button_wrapper > .button,
  .main_link {
    width: 120px;
    padding: 10px;
    margin: 0 auto;
    background: #123D61;
    color: #FFF;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .submit_button_wrapper > .button:hover,
  .main_link:hover {
    box-shadow: 0px 0px 20px 1px #123D61;
  }
  
  .thank_you_wrapper > h2 {
    font-size: 40px;
    padding-bottom: 20px;
  }
  
  .thank_you_wrapper > h3 {
    font-size: 24px;
  }
  
  .main_link {
    display: block;
    position: fixed;
    right: 10px;
    top: 10px;
    text-align: center;
  }
  
  
  </style> -->