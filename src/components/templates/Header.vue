<template>
    <header class="header" :class="isPageStart && 'header-start'">
          <div class="header__grid">
            <div class="header__languages">
              <label class="header__languages-label">
                <input type="radio" name="language" class="header__languages-input" value="es" checked v-model="$i18n.locale">
                <span class="header__languages-text">ES</span>
              </label>
              <span class="header__languages-separator">/</span>
              <label class="header__languages-label">
                <input type="radio" name="language" class="header__languages-input" value="en" v-model="$i18n.locale">
                <span class="header__languages-text">EN</span>
              </label>
            </div>



            <div class="header__content">
              <h1 class="header__title">{{  $t('title-header') }}</h1>
              <span class="header__content-line line-short"></span>
              <p class="header__text">{{ $t('text-header') }}</p>
              <span class="header__content-line line-long" :class="isPageStart && 'hidden'"></span>
            <button class="header__btn-start" v-if="isPageStart" @click="startSurvey" > 
            {{ $t('text-btn-start')}}
            </button>
            </div>
        </div>    
      </header>
</template>

<script>

export default {
  created() {},

  props:{
    isPageStart : {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods:{
      startSurvey(){
            this.$router.push({name:'survey-questions'})
      }
    },

  
  watch: {
    '$i18n.locale': function(newValue, oldValue) {
      localStorage.setItem('lang',newValue);
    }
  }
};

</script>

<style scoped>
.header {
  width:100%;
  background-position: center;
  background-size: cover;
  background-image: url("../../assets/images/background-header.png");
  z-index: -1;
  padding: 0 0 80px 0;
}

.header-start{
  height: 100vh;
}
.header__grid{
    height: 100%;
    color: white;
    display: grid;
    justify-content: center;
    grid-template-rows: 20% 80%;
}


.header__languages{
  width: 80%;
  margin: 0 auto 0 auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header__languages-input {
  display: none;
}

.header__languages-text {
  padding: 5px 10px;
  cursor: pointer;
}

.header__languages-input:checked + .header__languages-text {
  font-weight: bold;
}

.language-focus{
  font-weight: bold;
}

.header__content{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-width: 80%;
  margin: 20px auto 0 auto;
}

.header__title{
  font-size: 30px;
  font-weight: bold;
}

.header__text{
  font-size: 16px;
  margin-top: 15px;
}

.header__content-line{
  border: 1px solid white;
  margin: 10px 0;
}

.line-short{
  width: 22px;
  margin: 5px 0;
}

.line-long{
  width: 328px;
  border: 1px solid white;
  margin-bottom: 80px;
}


.header__btn-start{
    background: var(--color-blue-dark);
    border-radius: 4px;
    border: 1px solid var(--vt-c-white-mute);
    color: white;
    font-size: 15px;
    text-align: center;
    padding: 10px 20px;
    margin: 25px auto 50px auto;
    transition: all .3s ease;
  }
  
  .header__btn-start:hover{
    box-shadow: 0px 0px 10px 0px var(--vt-c-white-soft);
    border: 1px solid var(--vt-c-white-mute-2);
    color: white;
    transform: scale(1.01);

}

.header__btn-start:active{
  transform: scale(1.1);

}



/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .header__title{
  font-size: 35px;
  }

  .header__content{
   margin: 30px auto 0 auto;
  }


 }

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .header__title{
  font-size: 40px;
  margin-bottom: 24px;
  }

  .header__text{
    font-size: 18px;
    margin-top: 8px;
  }

  .header__btn-start{
    font-size: 20px;
    text-align: center;
    margin: 25px auto 50px auto;
    transition: all .3s ease;
  }


 }

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 

  .header {
    height: 610px;
    background-image: url("../../assets/images/background-header-desktop.png");
  }

  .header-start{
  height: 100vh;
}


  .header__grid{      
    place-items: center;
    grid-template-rows: none;
    grid-template-columns:  100px 1fr;
  }

  .header__content{
  max-width: 800px;
  margin: 0 0 0 -80px;
  }


  .header__languages{
    width: 80%;
    margin: 0 auto;
    font-size: 25px;
    flex-direction: column;
  }

  .header__languages-separator{
    display: none;
  }

  .header__languages-text{
    margin-left: 20px;
  }

  .header__title{
    font-size: 54px;
    margin-bottom: 27px;
  }

  .header__content-line{
    border: 1px solid white;
    margin: 5px 0;
  }

  .line-short{
    width: 50px;
    margin: 5px 0;
  }

  .line-long{
    width: 90%;
    margin: 40px 0;
  }

}


</style>