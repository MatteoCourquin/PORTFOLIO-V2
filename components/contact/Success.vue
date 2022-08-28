<template>
  <div class="success-contact">
    <h1>Merci !</h1>
    <p>Votre demande a été enregistrée.</p>
    <nuxt-img preload src='images/logos/mail-send.svg'/>
    <p>Je m'efforce de vous répondre dans les plus brefs délais. Au plaisir de collaborer avec vous !</p>
    <p>Vous allez automatiquement être redirigé vers l'accueil dans {{ counter }} secondes</p>
    <nuxt-link to="/"><button class="button">Accueil</button></nuxt-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 20
    };
  },
  mounted() {
    setInterval(() => {
      this.counter --;
      if (this.counter == 0) {
        this.$router.push('/');
      }
    }, 1000);
  }
}

</script>

<style scoped lang='scss'>

.success-contact{
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3, p{
    text-align: center;
    padding: 0 clamp(20px, 10vw, 200px);
  }
  p{
    font-family: $font-montserrat-medium;
    font-size: clamp(16px, 1.5vw, 20px);
  }
  img{
    width: clamp(100px, 10vw, 200px);
  }
  img, p ,.button{
    margin: 20px 0;
  }
}
  
</style>