<template>
    <div class="question">
      <div class="question__content-text">
        <h2 class="question__number">Question {{ detailsQuestion.id }}</h2>
        <h3 class="question__title">{{ detailsQuestion.question }}</h3>
      </div>
        <div class="question__qualifications-container">
        <div class="question__qualifications" v-for="qualification in qualifications" :key="qualification.id">
              <div class="question__qualification-container">
                <input type="radio" v-model="detailsQuestion.rate" :value="qualification.id">
                <div class="question__qualification-tile">
                  <font-awesome-icon :icon="qualification.icon" class="question__qualification-icon" />
                </div>
              </div>
              <span class="question__qualification-text">{{ qualification.text }}</span>
        </div>
      </div>
    </div>
</template>
<script lang="ts">

// import { questionsStore } from '@/stores/questions.store';



  export default {
    props: ['detailsQuestion', 'qualifications', 'totalQuestions'],
    data() {
      return {
        
      }
    },
    created() {
      // console.log(this.detailsQuestion)
    },
    methods:{

    },
    computed:{

    }
  };




</script>

<style scoped>
  /* *{
    margin: 10px;
  } */
.question{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  border-bottom: 1px solid var(--vt-c-white-mute);
  padding: 44px 0;
}
.question__qualifications-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.question__qualifications{
  display: flex;
  flex-direction:column;
  align-items: center;

}
.question__number{
  margin: 0 auto 10px auto;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: var(--color-blue-dark);
}
.question__title{
  font-size: 16px;
  text-align: center;
  margin-bottom: 18px;
  color: var(--color-blue-dark);

}

.question__qualification-container{
  position: relative;
  height: 57px;
  width: 57px;
  margin-right: 5px;
}

.question__qualification-container input {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
}

.question__qualification-container .question__qualification-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 3px;
  background: var(--vt-c-white-mute);
  transition: all .3s ease-in-out;
}

.question__qualification-container .question__qualification-icon {
  color: var( --color-blue-dark);
  font-size: 32px;
}

input:checked+.question__qualification-tile {
  background-color: var( --color-blue-dark);
  box-shadow: 0 0 5px var( --color-blue-dark);
}

input:hover+.question__qualification-tile {
  box-shadow: 0 0 3px var( --color-blue-dark);

}

input:checked+.question__qualification-tile .question__qualification-icon {
  color: white;
}

.question__qualification-text{
  font-size: 12px;
  margin: 5px;
}

@media (min-width: 768px) { 

  .question__number{
  font-size: 18px;
  }
  .question__title{
    font-size: 18px;

}

  .question__qualification-container{
    height: 77px;
    width: 77px;

  }
  .question__qualification-container .question__qualification-icon {
    font-size: 42px;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 

  .question__number{
  font-size: 20px;
}
.question__title{
  font-size: 20px;

}
  .question__qualification-container{
    height: 97px;
    width: 97px;

  }

  .question__qualification-container .question__qualification-icon {
    font-size: 52px;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  .question{
  margin: 0 auto;
}
  .question__qualification-container{
    height: 114px;
    width: 114px;
    margin: 0 20px;
  }

  .question__qualification-text{
  margin-right: 20px;
  margin-left: 20px;
}

  .question__qualification-container .question__qualification-icon {
    font-size: 66px;
  }
}

</style>

