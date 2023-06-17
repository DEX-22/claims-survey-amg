<template>
    <header class="header">
        <div class="header__grid">
            <div class="header__lenguages">
              <span class="header__lenguages-es language-focus">ES</span>
              <span>/</span>
              <span class="header__lenguages-en">EN</span>
            </div>
            <div class="header__content">
              <h1 class="header__title">ENCUESTA DE SATISFACCIÓN</h1>
              <span class="header__content-line line-short"></span>
              <p class="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <span class="header__content-line line-long"></span>
            </div>
        </div>    
      </header>
</template>

<style scoped>
.header {
  width:100%;
  height: 465px;
  background-position: center;
  background-size: cover;
  background-image: url("https://f.hubspotusercontent20.net/hubfs/2639771/Improving%20Your%20Software%20Quality%20Assurance%20Process%20in%202021.png");
  position:relative;
}


.header::before{
  position: absolute;
  content:"";
  inset:0;
  background-color: rgba(0,0,0,.80);
  
}

.header__grid{
    height: 100%;
    position:relative;
    color: white;
    display: grid;
    justify-content: center;
    /* place-items: center; */
    grid-template-rows: 20% 80%;
}


.header__lenguages{
  width: 80%;
  margin: 0 auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* margin: 5px; */
}

.header__lenguages span{
  margin: 2px;
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
  margin: 0 auto;
}

.header__title{
  font-size: 30px;
  font-weight: bold;
}

.header__text{
  font-size: 16px;
}

.header__content-line{
  width: 100px;
  border: 1px solid white;
  margin: 5px 0;
}

.line-short{
  width: 22px;
  margin: 5px 0;
}

.line-long{
  width: 328px;
  border: 1px solid white;
  margin: 40px 0 0 0;
}


</style>