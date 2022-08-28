<template>
  <div class="container-section">
    <div class="title-section">
      <h2>À propos</h2> 
    </div>
    <section class="section about">
      <div class="about-description">
        <div class="line"></div>
        <div class="rectangle"></div>
        <nuxt-img preload src="/images/logos/quote.svg" class="quote" />

        <p>Je m'appelle Matteo, je suis developpeur front-end depuis {{ years }} ans et {{ months }} mois.</p>

        <p>Initialement parti pour être architecte, c'est lors du confinement que ma vie a pris un autre tournant.</p>
        
        <p>Tout a commencé depuis <a class="links" href="https://openclassrooms.com/" target="_blank">OpenClassrooms</a>. Le premier site vers lequel on se dirige lorsque l'on s'intéresse au web !</p>

        <p>J'ai ensuite approfondi à l’<a class="links" href="https://www.iim.fr/" target="_blank">IIM</a>, l'une des meilleures école du web.</p>

        <p>Je suis quelqu'un de pointilleux, persévérant et mes études d'architecture m'ont apporté une certaine sensibilité esthétique et design. Ma vision graphique n’en sera que du plus.</p>

        <p>« Un code propre en vaut 10 »</p>

        <a href="documents/CV.pdf" target="_blank"><button class="button">Mon CV</button></a>
      </div>
      <div class="about-cv">
        <a href="documents/CV.pdf" target="_blank"><nuxt-img src="/images/about/CV.png"/></a>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      years: "",
      months: "",
    };
  },
  mounted() {
    let dateNow = new Date()
    let codingSince = new Date('Wed Apr 15 2020 16:00:00 GMT+0100')

    let tmp = dateNow - codingSince;

    this.years = Math.floor(tmp / 31536000000)
    this.months = Math.floor((tmp % 31536000000) / 2628000000)
  }
}

</script>

<style scoped lang='scss'>

.about{
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include screen-m {
    grid-template-columns: 1fr;
  }
  .about-description{
    padding: 50px 50px 50px 0;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .quote{
      width: clamp(70px, 6vw, 90px);
      margin-bottom: 20px;
    }

    @include screen-m {
      padding: 0;
    }
    p{
      margin-bottom: 30px;
    }
    .rectangle{
      width: 100px;
      height: 50%;
      background: $color-white;
      position: absolute;
      z-index: -1;
      top: -100px;
      transform: translate(-50%, -40px);
    }
    .line{
      width: 2px;
      height: 60%;
      background: $color-black;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      @include screen-m {
        display: none;
      }
    }
  }
  .about-cv{
    display: flex;
    justify-content: center;
    align-items: center;
    @include screen-m {
      display: none;
    }
    img{
      cursor: pointer;
      padding-left: 50px;
      width: clamp(20px, 100%, 600px);
  
    }
  }
}

</style>