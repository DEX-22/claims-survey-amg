<template>
    <div class="completed">
        <img class="completed__img" src="../../assets/images/logo/amg-logo.svg" alt="amg image">
        <div class="completed__content">
            <h2 class="completed__title">{{ $t('title-survey-completed') }}</h2>
            <p class="completed__text">{{ $t('text-survey-completed') }}</p>
        </div>
    </div>
</template>
<style scoped>
 .completed{
    background-image: url('@/assets/images/background-header.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;
 }

.completed__content{
    text-align: center;
}

.completed__title{
    font-size: 20px;    
    font-weight: bold;
}

.completed__text{
    font-size: 16px;    
}


.completed__img{
    filter: invert(2);
    width: 200px;
}



@media (min-width: 768px) {

    .completed__title{
        font-size: 25px;    
    }

    .completed__text{
        font-size: 20px;    
    }


    .completed__img{
        width: 250px;
    }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    .completed{
    background-image: url('@/assets/images/background-header-desktop.png');
    }
    .completed__title{
        font-size: 30px;    
    }

    .completed__text{
        font-size: 25px;    
    }


    .completed__img{
        width: 300px;
    }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .completed__title{
        font-size: 35px;    
    }

    .completed__text{
        font-size: 30px;    
    }


    .completed__img{
        width: 400px;
    }
}

</style>