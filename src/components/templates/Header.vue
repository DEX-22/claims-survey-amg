<template>
    <header class="header h-56 bg-cover items-center justify-center text-center">
        
        <div class="header__text">
            <div class="header__languages">
            </div>
          <h1 class="text-2xl font-bold">ENCUESTA DE SATISFACCIÓN</h1>
          <p class="my-4 w-10/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugit vitae dolorem quos, sunt facere adipisci rem ea iure possimus aperiam illum voluptate omnis illo, id hic excepturi nihil pariatur.</p>
        </div>    
        </header>
</template>

<style>

.header {
  width:100%;
  height: 300px;
  display: grid;
  background-position: center;
  place-items:center;
  background-image: url("https://f.hubspotusercontent20.net/hubfs/2639771/Improving%20Your%20Software%20Quality%20Assurance%20Process%20in%202021.png");
  position:relative;
}

.header::before{
  position: absolute;
  content:"";
  inset:0;
  background-color: rgba(0,0,0,.80);
  
}
.header__text {
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
    position:relative;
}

</style>