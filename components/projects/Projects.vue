<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section projects">

      <!-- Card Project -->
      <div v-for="(project, i) in projects" :id="i+1" class="card-project">
        <div class="project-image">
          <nuxt-img class="links-img" :src="project.image" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span class="number"><span v-if="i < 9">0</span>{{ i + 1 }}</span>
          <div class="line"></div>
          <p v-html="project.description"></p>
          <h3>{{ project.title }}</h3>
          <a :href="project.link" target="_blank" class="links links-to-project">voir le projet <nuxt-img class="img-links" src="/images/logos/arrow.svg"/></a>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

export default {
data() {
  return {
    projects: [
      {
        title: 'zLawyer',
        description: "<a class='links' href='https://www.zlawyer.fr/logiciel-avocats/' target='_blank'>zLawyer</a> est un logiciel de gestion de cabinets d'avocats. Ils m'ont contacter pour refonte leur site afin de vendre et présenter leur logiciel. <br><br>J'ai réalisé le projet en collaboration avec <a class='links' href='https://august1.dev' target='_blank'>Augustin Briolon</a>",
        image: '/images/projects/zLawyer.png',
        link: 'https://www.zlawyer.fr/logiciel-avocats/'
      },
      {
        title: 'NL • Architecture',
        description: "Intégration de la maquette de <a class='links' href='https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page' target='_blank'>Nadya Lazurenko</a>",
        image: '/images/projects/nlArchitecture.png',
        link: 'https://nl-architecture.courqu.in/'
      },
      {
        title: 'Semicolon',
        description: "Un projet d'études voué a sensibiliser sur les problématiques étudiantes.",
        image: '/images/projects/semicolon.png',
        link: 'https://semicolon.vercel.app'
      },
      {
        title: 'La Villa Savoye',
        description: "Un de mes projets de fin d'année préparatoire. Le thème du site était 'un monument ou un lieu culte en île-de-france'. <br>J'ai choisi <a href='https://www.villa-savoye.fr/' target='_blank' class='links'>la Villa Savoye</a> en raison de ma passion pour l'architecture et <a href='http://www.fondationlecorbusier.fr/' target='_blank' class='links'>le Corbusier</a>.",
        image: '/images/projects/villaSavoye.png',
        link: 'https://lavillasavoye-matteocourquin.herokuapp.com/index.php'
      },
      {
        title: 'La défense',
        description: "Un projet d'études dont le but était de réaliser une maquette UI. J'ai décidé de l'intégrer pour m'amuser !",
        image: '/images/projects/laDefense.png',
        link: 'https://la-defense.courqu.in/index.html'
      },
    ]
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

      border-bottom: 2px solid $color-black;
      box-shadow: 0 9px 10px -14px $color-black;

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