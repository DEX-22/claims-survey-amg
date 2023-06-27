<template>
    <div class="question">
      <div class="question__content-text">
        <h2 class="question__number">{{ $t('title-question') }} {{ detailsQuestion.id }}</h2>
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
              <span class="question__qualification-text">{{ $i18n.locale == 'en' ? qualification.text_en : qualification.text_es }}</span>
        </div>
      </div>
    </div>
</template>
<script lang="ts">


  export default {
    props: ['listQuestions','detailsQuestion', 'qualifications', 'totalQuestions'],
    data() {
      return {
        
      }
    },
    created() {},

    watch: {

      'detailsQuestion.rate'(){
      this.$emit('changeQuestion');
    }
  }

  };




</script>

<style scoped>
.question{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  border-bottom: 1px solid var(--vt-c-white-mute);
  padding: 44px 0;
}
.question__qualifications-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(57px, 1fr));
  column-gap: 5px;
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
  transition: all 0s ease-in-out;
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

  .question__qualification-text{
  margin-right: 20px;
  margin-left: 20px;
  font-size: 17px;
}

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  .question{
  margin: 0 auto;
  width: 750px;
  }

  .question__number{
    font-size: 25px;
  }
  .question__title{
    font-size: 25px;

  }

  .question__qualification-container{
    height: 114px;
    width: 114px;
    margin: 0 20px;
  }

  .question__qualification-text{
  margin-right: 20px;
  margin-left: 20px;
  font-size: 19px;
  }

  .question__qualification-container .question__qualification-icon {
    font-size: 66px;
  }
}

</style>

