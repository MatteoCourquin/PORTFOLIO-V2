<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section project">

      <div class="card-project">
        <div class="project-image">
          <nuxt-img preload src="/images/projects/project01.png" />
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
          <h3>NL • Architecture</h3>
          <p>Intégration de la maquette de Naila</p>
          <a href="#" target="_blank" class="links">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
        <div class="project-image">
          <nuxt-img preload src="/images/projects/project01.png" />
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
    gap: 2vw;
    margin-bottom: 100px;
    .project-description{
      display: flex;
      justify-content: center;
      flex-direction: column;
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
      display: flex;
      position: relative;
      img{
        width: 93%;
        z-index: 3;
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