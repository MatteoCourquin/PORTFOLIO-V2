<template>
  <div class="container-section">
    <div ref="cursor" v-bind:class="[cursorActive ? 'active' : '', 'cursor-career']">
      <div class="cursor-line"><div class="cursor-arrow"></div></div>
    </div>
    <div class="title-section">
      <h2>Carière</h2>
    </div>
    <section class="section career" @mousemove="changeCursor()" @mouseleave="cursorActive = false">
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
          <div class="time-line-arrow"></div>
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
      cursorActive: false,
    };
  },
  methods: {
    changeCursor() {
      this.cursorActive = true;

      let top = event.pageY + "px";
      let left = event.pageX + "px";

      if (window.innerWidth >= 2000) {
        left = `calc(${event.pageX}px - (100vw - 2000px) / 2)`
      }

      this.$refs.cursor.setAttribute('style', `top: ${top}; left: ${left}; `)
    }
  },
  mounted() {
    if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)){
        this.cursorActive = false
    }
  },
}

</script>

<style scoped lang='scss'>

.career{
  overflow: scroll !important;
  display: flex;
  flex-direction: column;
  width: max-content;
  cursor: normal;

  @include screen-m {
    justify-content: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .time-line{
    width: 1300px;
    height: 2px;
    background: $color-black;

    position: relative;
    .time-line-arrow{
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
      min-width: 400px;
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
        z-index: -2;
      }
      .line{
        width: 90px;
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