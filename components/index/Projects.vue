<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section project">

      <div class="card-project">
        <div class="project-image">
          <nuxt-img preload src="/images/projects/nlArchitecture.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">01</span>
          <div class="line"></div>
          <h3>NL • Architecture</h3>
          <p>Intégration de la maquette de <a class="links" href="https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page" target="_blank">Nadya Lazurenko</a></p>
          <a href="https://nl-architecture.courqu.in/" target="_blank" class="links">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>

      <div class="card-project">
        <div class="project-description">
          <span class="number">02</span>
          <div class="line"></div>
          <h3>zLawyer</h3>
          <p><a class="links" href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank">zLawyer</a> est un logiciel de gestion de cabinets d'avocats. Ils m'ont contacter pour refonte leur site afin de vendre et présenter leur logiciel. <br>J'ai fait le projet en collaboration avec <a class="links" href="https://august1.dev" target="_blank">Augustin Briolon</a></p>
          <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" class="links">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
        <div class="project-image">
          <nuxt-img preload src="/images/projects/zLawyer.png" />
          <div class="rectangle-image"></div>
        </div>
      </div>

      <nuxt-link to="/projects"><button class="button all-project">Tout les projets</button></nuxt-link>

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

.project{
  .card-project{
    display: grid;
    align-items: center;
    gap: 2vw;
    margin-bottom: 100px;
    .project-description{
      display: flex;
      justify-content: center;
      flex-direction: column;

      @include screen-m {
        margin-top: 50px;
      }
      .line{
        width: 20%;
        height: 2px;
        background: $color-black;
        margin: 20px 0;
      }
      .links{
        margin-top: 40px;
      }
    }
    .project-image{
      height: fit-content;
      display: flex;
      position: relative;
      img{
        width: 93%;
        height: auto;
        z-index: 3;
        @include filter-image;
      }
      .rectangle-image{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 70%;
        height: 70px;
        background: $color-white;
        transform: translateY(40%);
      }
    }
    grid-template-columns: 3fr 2fr;
    @include screen-m {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    &:nth-child(even){
      grid-template-columns: 2fr 3fr;
      @include screen-m {
        flex-direction: column-reverse;
      }
    }
  }
  .all-project{
    display: block;
    margin: 0 auto;
  }
}

</style>