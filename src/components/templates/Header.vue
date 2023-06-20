<template>
    <header class="header">
        <div class="header__grid">
            <div class="header__lenguages">
              <span class="header__lenguages-es language-focus">ES</span>
              <span>/</span>
              <span class="header__lenguages-en">EN</span>
            </div>
            <div class="header__content">
              <h1 class="header__title">SATISFACTION SURVEY</h1>
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
  background-image: url("../../assets/images/background-header.png");
  position:relative;
  z-index: -1;
}


.header::before{
  position: absolute;
  content:"";
  background-image: url("../../assets/images/border-header.png");
  background-position: center;
  background-size: cover;
  inset: 30px 0;
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



/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .header {
    height: 610px;
    background-image: url("../../assets/images/background-header-full.png");
    position:relative;
    z-index: -1;
  }


  .header::before{
    position: absolute;
    content:"";
    /* background-image: url("../../assets/images/border-header-full.png"); */
    background-color: #052659df;
    inset: 0;
  }

  .header__grid{      
    place-items: center;
    grid-template-rows: none;
    grid-template-columns:  10% 90%;
  }

  .header__content{
  max-width: 800px;
  margin: 0 auto;
}

 }

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  }


</style>