<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section projects">


      <!-- Card Project -->
      <div id="project1" class="card-project">
        <div class="project-image">
          <nuxt-img class="links-img" preload src="/images/projects/zLawyer.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">01</span>
          <div class="line"></div>
          <p><a class="links" href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank">zLawyer</a> est un logiciel de gestion de cabinets d'avocats. Ils m'ont contacter pour refonte leur site afin de vendre et présenter leur logiciel. <br><br>J'ai réalisé le projet en collaboration avec <a class="links" href="https://august1.dev" target="_blank">Augustin Briolon</a></p>
          <h3>zLawyer</h3>
          <a href="https://www.zlawyer.fr/logiciel-avocats/" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>
      
      <!-- Card Project -->
      <div id="project2" class="card-project">
        <div class="project-image">
          <nuxt-img class="links-img" preload src="/images/projects/nlArchitecture.png" />
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
      <div id="project3" class="card-project">
        <div class="project-image">
          <nuxt-img class="links-img" preload src="/images/projects/semicolon.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">03</span>
          <div class="line"></div>
          <p>Un projet d'études voué a sensibiliser sur les problématiques étudiantes.</p>
          <h3>Semicolon</h3>
          <a href="https://semicolon.vercel.app" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>

      <!-- Card Project -->
      <div id="project4" class="card-project">
        <div class="project-image">
          <nuxt-img class="links-img" preload src="/images/projects/villaSavoye.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">04</span>
          <div class="line"></div>
          <p>Un de mes projets de fin d'année préparatoire. Le thème du site était "un monument ou un lieu culte en île-de-france". <br>J'ai choisi <a href="https://www.villa-savoye.fr/" target="_blank" class="links">la Villa Savoye</a> en raison de ma passion pour l'architecture et <a href="http://www.fondationlecorbusier.fr/" target="_blank" class="links">le Corbusier</a>.</p>
          <h3>La Villa Savoye</h3>
          <a href="https://lavillasavoye-matteocourquin.herokuapp.com/index.php" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>

      <!-- Card Project -->
      <div id="project5" class="card-project">
        <div class="project-image">
          <nuxt-img class="links-img" preload src="/images/projects/laDefense.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number">05</span>
          <div class="line"></div>
          <p>Un projet d'études dont le but était de réaliser une maquette UI. J'ai décidé de l'intégrer pour m'amuser !</p>
          <h3>La défense</h3>
          <a href="https://la-defense.courqu.in/index.html" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
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
      max-height: 70vh;

      margin-bottom: 20px;

      @include screen-m {
        width: 100%;
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