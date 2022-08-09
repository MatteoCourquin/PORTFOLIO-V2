<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Carière</h2>
    </div>
    <section class="section career">
        <div class="container-card-career">
          <!-- Card Career -->
          <div class="card-career first-card-career">
            <h3>Bachelor • IIM</h3>
            <p>Développeur Étudiant</p>
            <div class="line"></div>
            <span class="number">2020 - 2023</span>
            <div class="rectangle"></div>
          </div>
          <!-- Card Career -->
          <div class="card-career">
            <h3>Master • IIM</h3>
            <p>Développeur Étudiant</p>
            <div class="line"></div>
            <span class="number">2023 - 2025</span>
            <div class="rectangle"></div>
          </div>
        </div>
        <div class="time-line">
          <div class="arrow"></div>
        </div>
        <div class="container-card-career">
          <!-- Card Career -->
          <div class="card-career">
            <h3>Fortuneo</h3>
            <p>Développeur Angular</p>
            <div class="line"></div>
            <span class="number">2022 - En cours</span>
            <div class="rectangle"></div>
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
.career{
  overflow: scroll !important;
  display: flex;
  flex-direction: column;
  width: max-content;
  &::-webkit-scrollbar {
    display: none;
  }
  .time-line{
    width: 100vw;
    height: 2px;
    background: $color-black;

    position: relative;
    .arrow{
      width: 30px;
      height: 30px;

      position: absolute;
      right: 0;
      transform: translate(-4px, -47%) rotate(45deg);
      border-top: 2px solid $color-black;
      border-right: 2px solid $color-black;
    }
  }
  .container-card-career{
    width: max-content;
    flex-shrink: 0;
    display: flex;
    .card-career{
      width: fit-content;
      min-width: 200px;
      height: 200px;

      display: flex;
      justify-content: center;
      flex-direction: column;

      margin-left: 400px;

      padding-left: 20px;

      position: relative;
      .rectangle{
        width: 80px;
        height: 100%;
        background: $color-white;

        left: 0;
        position: absolute;
        z-index: -1;
      }
      .line{
        width: 20%;
        height: 2px;
        background: $color-black;
        margin: 10px 0;
      }
      .number{
        font-size: clamp(20px, 2vw, 40px);
      }
    }
  }
  .card-career.first-card-career{
    margin-left: 0;
  }
}

</style>