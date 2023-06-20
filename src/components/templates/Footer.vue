<template lang="">

  <footer class="footer">
      <div class="footer__container">
        <div class="footer__contact">
          <div class="footer__email">
            <h2 class="footer__email-title">EMAIL</h2>
            <p class="footer__email-info">customer@amggroup.us</p>
          </div>
          <div class="footer__phone">
            <h2 class="footer__phone-title">PHONE</h2>
            <p class="footer__phone-info">(949) 375 - 1002</p>
          </div>
          <div class="footer__working">
            <h2 class="footer__working-title">WORKING HOURS</h2>
            <p class="footer__working-info">Monday to Saturday:</p>
            <span>09:00 a.m. - 06:00 p.m.</span>
          </div>
          <div class="footer__follow">
            <h2 class="footer__follow-title">FOLLOW US</h2>
            <div class="footer__socials">
              <a href="#"><img src="../../assets/images/icon-facebook.svg" alt="facebook amg"></a>
              <a href="#"><img src="../../assets/images/icon-instagram.svg" alt="instagram amg"></a>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          <p>All Right Reserved.</p>
        </div>
      </div>
  </footer>

</template>
<script>



export default {};
</script>
  <style scoped>
.footer {
  background-color: var(--color--blue-dark);
  color: white;
}

.footer__container{

}

.footer__contact{
  width: 80%;
  display: grid;
  /* padding: 1rem; */
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
}

.footer__copyright{
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

}

</style>