<template>
    <div class="question">
      <div class="question__content-text">
        <h2 class="question__number">Question {{ questionIndex }}</h2>
        <h3 class="question__title">{{ detailsQuestion.question }}</h3>
      </div>
        <div class="question__qualifications__container">
        <div class="question__qualifications" v-for="qualification in qualifications" :key="qualification.id">
              <input :class="`question__qualification-id image-qualification-${qualification.id}`"  type="radio" v-model="detailsQuestion.rate" :value="qualification.id">
              <span class="question__qualification-text"> {{ qualification.text }}</span>
        </div>
      </div>
    </div>
</template>
<script lang="ts">

import { questionsStore } from '@/stores/questions.store'



  export default {
    props: ['detailsQuestion', 'questionIndex', 'qualifications', 'totalQuestions'],
    data() {
      return {
        
      }
    },
    created() {
      // console.log(this.detailsQuestion)
    },
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
  };




</script>

<style scoped>
  *{
    margin: 10px;
  }
  .question{
      display: flex;
      flex-direction: column;
      justify-content: center; 
  }
  .question__qualifications{
        display: flex;
    flex-direction:column ;

}
.question__number{
  font-size: 32px;
  text-align: center;
}
.question__title{
  font-size: 24px;
  text-align: center;
}
.question__qualifications__container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
  .question__qualification-id {
    width: 50px;
  height: 50px;
}

.question__qualification-id:checked {
  background-color: darkorange;
  filter: brightness(80%);
}

.question__qualification-id::before {
  content: "";
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.image-qualification-1::before {
  background-image: url("../assets/images/qualifications/1.svg");
}
.image-qualification-1:hover::before {
  width: 55px;
  height: 55px;
}
.image-qualification-2::before {
  background-image: url("../assets/images/qualifications/2.svg");
}
.image-qualification-2:hover::before {
  width: 55px;
  height: 55px;
}
.image-qualification-3::before {
  background-image: url("../assets/images/qualifications/3.svg");
}
.image-qualification-3:hover::before {
  width: 55px;
  height: 55px;
}
.image-qualification-4::before {
  background-image: url("../assets/images/qualifications/4.svg");
}
.image-qualification-4:hover::before {
  width: 55px;
  height: 55px;
}
.image-qualification-5::before {
  background-image: url("../assets/images/qualifications/5.svg");
}
.image-qualification-5:hover::before {
  width: 55px;
  height: 55px;
}
</style>



























<!-- <template>
    <div class="question_wrapper">
      <h3 v-html="details.question"></h3>
      <ul>
        <li v-for="i in totalRate">
          <label>
            <input type="radio" v-model="details.rate" :value="i" name="question-rate">
            <span>{{ i }}</span>
          </label>
        </li>
      </ul>
    </div>
</template>
  
  <script>
  export default {
    props: ['details', 'totalRate']
  };
  </script>
  
  <style scoped>
  .question_wrapper > h3 {
    font-size: 21px;
    padding-bottom: 20px;
  }
  
  .question_wrapper > ul > li {
    display: inline-block;
    margin-right: 30px;
  }
  
  .question_wrapper > ul > li:last-child {
    margin-right: 0px;
  }
  
  .question_wrapper > ul > li > label {
    cursor: pointer;
  }
  
  .question_wrapper > ul > li > label > input {
    display: none;
  }
  
  .question_wrapper > ul > li > label > span {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #123D61;
    font-size: 20px;
    transition: all 0.3s;
  }
  
  .question_wrapper > ul > li > label:hover > span {
    box-shadow: 0px 0px 20px 1px #123D61;
  }
  
  .question_wrapper > ul > li > label > input:checked ~ span {
    color: #FFF;
    border: 1px solid transparent;
  }
  
  .question_wrapper > ul > li > label > span:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0%;
    height: 0%;
    background: #123D61;
    border-radius: 50%;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s;
  }
  
  .question_wrapper > ul > li > label > input:checked ~ span:before {
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  </style>
   -->