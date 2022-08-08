<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section project">

      <div class="card-project">
        <div class="project-image">
          <nuxt-img src="/images/projects/project01.png" />
          <div class="rectangle-image"></div>
        </div>
        <div class="project-description">
          <span>01</span>
          <div class="line"></div>
          <h3>NL • Architecture</h3>
          <p>Intégration de la maquette de Naila</p>
          <button class="button">Projet</button>
        </div>
      </div>

      <div class="card-project">
        <div class="project-description">
          <span>02</span>
          <div class="line"></div>
          <h3>NL • Architecture</h3>
          <p>Intégration de la maquette de Naila</p>
          <button class="button">Projet</button>
        </div>
        <div class="project-image">
          <nuxt-img src="/images/projects/project01.png" />
          <div class="rectangle-image"></div>
        </div>
      </div>

      <button class="button all-project">Tout les projets</button>

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
      span{
        font-size: clamp(20px, 5vw, 80px);
        font-family: $font-montserrat-extra-bold;
      }
      button{
        margin-top: 2vw;
      }
    }
    .project-image{
      display: flex;
      position: relative;
      img{
        width: 93%;
        z-index: 99;
      }
      .rectangle-image{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 80%;
        height: 80px;
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