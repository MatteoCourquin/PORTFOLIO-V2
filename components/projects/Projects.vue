<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section projects">
      
      <!-- Card Project -->
      <div class="card-project">
        <div class="project-image">
          <nuxt-img preload src="/images/projects/nlArchitecture.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">01</span>
          <div class="line"></div>
          <p>Intégration de la maquette de <a class="links" href="https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page" target="_blank">Nadya Lazurenko</a></p>
          <h3>NL • Architecture</h3>
          <a href="https://nl-architecture.courqu.in/" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>
      
      <!-- Card Project -->
      <div class="card-project">
        <div class="project-image">
          <nuxt-img preload src="/images/projects/nlArchitecture.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">02</span>
          <div class="line"></div>
          <p>Intégration de la maquette de <a class="links" href="https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page" target="_blank">Nadya Lazurenko</a></p>
          <h3>NL • Architecture</h3>
          <a href="https://nl-architecture.courqu.in/" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>
      
      <!-- Card Project -->
      <div class="card-project">
        <div class="project-image">
          <nuxt-img preload src="/images/projects/nlArchitecture.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">03</span>
          <div class="line"></div>
          <p>Intégration de la maquette de <a class="links" href="https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page" target="_blank">Nadya Lazurenko</a></p>
          <h3>NL • Architecture</h3>
          <a href="https://nl-architecture.courqu.in/" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
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
.section.projects{
  overflow: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  .card-project{
    scroll-snap-align: start;
    padding: 0 clamp(20px, 4vw, 60px);
    flex-shrink: 0;
    width: calc(100vw - 220px);
    @include screen-m {
      width: 100vw;
    }
    height: fit-content;
    position: relative;
    .project-image{
      overflow: hidden;
      width: 88%;
      max-height: 60vh;

      margin-bottom: 20px;

      @include screen-m {
        width: 100%;
      }

      img{
        @include filter-image;
      }
    }
    .project-description{
      h3{
        @include screen-m {
          margin: 20px 0;
        }
      }
      p{
        margin-top: 40px;
        @include screen-m {
          margin-top: 0;
        }
      }
      .number{
        position: absolute;
        top: 15vh;
        right: 50px;

        @include screen-m {
          position: relative;
          right: 0;
          top: 0;
        }
      }
      .line{
        display: none;
        width: 10%;
        height: 2px;
        background: $color-black;
        margin: 20px 0;

        @include screen-m {
          display: block;
        }
      }
      .links.links-to-project{
        position: absolute;
        right: 50px;
        bottom: 10px;

        @include screen-m {
          right: 0;
          position: relative;
        }
      }
    }
  }
}

</style>