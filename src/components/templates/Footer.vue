<template lang="">

  <footer class="footer">
      <div class="footer__container">
        <div class="footer__contact">
          <div class="footer__email">
            <h2 class="footer__email-title">{{ $t('title-footer-email') }}</h2>
            <p class="footer__email-info">costumer@amgqualitycontrol.us</p>
          </div>
          <div class="footer__phone">
            <h2 class="footer__phone-title">{{ $t('title-footer-phone') }}</h2>
            <p class="footer__phone-info">805-626-5659</p>
          </div>
          <div class="footer__working">
            <h2 class="footer__working-title">{{ $t('title-footer-working') }}</h2>
            <p class="footer__working-info">{{ $t('text-footer-working') }}</p>
            <span class="footer__working-span">09:00 a.m. - 06:00 p.m.</span>
          </div>
          <div class="footer__follow">
            <h2 class="footer__follow-title">{{ $t('title-footer-follow') }}</h2>
            <div class="footer__socials">
              <a href="#"><img src="../../assets/images/icon-facebook.svg" alt="facebook amg"></a>
              <a href="#"><img src="../../assets/images/icon-instagram.svg" alt="instagram amg"></a>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          <p>{{ $t('title-copyright') }}</p>
        </div>
      </div>
  </footer>

</template>
<script>



export default {
  
};
</script>
  <style scoped>
.footer {
  background-image: url('../../assets/images/background-footer-mobile.png');
  background-position: center;
  background-size: cover;
  color: white;
}


.footer__contact{
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 50px 0;
  margin: 0 auto;
}

.footer__email,.footer__phone,.footer__working,.footer__follow{
  padding: 10px 0;
}

.footer__email-title,.footer__phone-title,.footer__working-title,.footer__follow-title{
  font-weight: bold;
}

.footer__icons{
  display: flex;
}

.footer__socials{
  display: flex;
  margin-top: 5px;
}


.footer__socials a{
  margin-right: 10px;
  color: red;
  padding: 10px;
  border-radius: 5px;
}

.footer__socials a:first-child{
  margin-left: -10px;
}

.footer__socials a:hover{
  background: var(--color-blue-dark);
}

.footer__socials a:active{
  transform: scale(.9);
}


.footer__copyright{
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

}

@media (min-width: 768px) { 

  .footer__contact{
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

}



@media (min-width: 1200px) { 

  .footer {
  background-image: url('../../assets/images/background-footer-desktop.png');
  }

  .footer__email-title,.footer__phone-title,.footer__working-title,.footer__follow-title{
    font-size: 20px;
  }

  .footer__email-info,.footer__phone-info,.footer__working-info,.footer__follow-info ,.footer__working-span{
    font-size: 20px;
  }

}


</style>