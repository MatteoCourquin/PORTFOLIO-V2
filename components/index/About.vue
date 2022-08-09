<template>
  <div class="container-section">
    <div class="title-section">
      <h2>À propos</h2> 
    </div>
    <section class="section about">
      <div class="about-description">
        <div class="line"></div>
        <div class="rectangle"></div>

        <p>Qu’en est-il de mes compétences de développeur Web ? Mettre des superbes logos, c’est bien. Mais détaillons. Je maîtrise évidement HTML sans problème, CSS et JavaScript. J’ai quand même une particulière aisance en CSS. Tout les modules n’ont presque plus de secret pour moi. La logique de Grid, Flexbox, SASS, et j’en passe, est acquise. Mettez moi à l’épreuve, je saurais vous surprendre.</p>

        <p>Parti pour être architecte, le design m’est presque inné. J’aime les belles choses bien réalisées. Ce qui fait de moi quelqu’un de pointilleux doté d’une certaine sensibilité esthétique. Ma vision graphique n’en sera que du plus.</p>

        <p>Je précise que je suis toujours en apprentissage à l’ IIM et que mes compétences grandissent de jour en jour. Je ne suis qu’au début de ma carrière.</p>

        <p>Ma motivation est telle que mes études ne sont qu’une partie de plaisir.</p>

        <p>« Un code propre en vaut 10 »</p>
        <a href="documents/CV.pdf" target="_blank"><button class="button">Mon CV</button></a>
      </div>
      <div class="about-img">
        <nuxt-img src="/images/about/CV.png"/>
      </div>
    </section>
  </div>
</template>

<script>

export default {
data() {
  return {

  };
},
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
  .about-img{
    display: flex;
    justify-content: center;
    align-items: center;
    @include screen-m {
      display: none;
    }
    img{
      padding-left: 50px;
      width: clamp(20px, 100%, 600px);
  
    }
  }
}

</style>