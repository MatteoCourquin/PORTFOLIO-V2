<template>
  <div class="container-section">
    <div ref="cursor" v-bind:class="[cursorActive ? 'active' : '', 'cursor-career']">
      <div class="cursor-line"><div class="cursor-arrow"></div></div>
    </div>
    <div class="title-section">
      <h2>Carière</h2>
    </div>
    <section ref="sectionCareer" class="section career">
    <!-- <section ref="sectionCareer" class="section career" @scroll="returnArrow()" @click="scroll()" @mousemove="moveCursor()" @mouseleave="cursorActive = false"> -->
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

        <div ref="timeLine" class="time-line">
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
          <!-- Card Career -->
          <div class="card-career">
            <h3>À Suivre</h3>
            <p>Développeur ...</p>
            <div class="line"></div>
            <span class="number"></span>
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

      padding: 0,
    };
  },
  methods: {
    moveCursor() {
      this.cursorActive = true;

      this.returnArrow()
    },
    returnArrow() {

      let top = event.pageY + "px"
      let left = event.pageX + "px"

      let containerWidth = this.$refs.timeLine.offsetWidth
      let scrollPosition = this.$refs.sectionCareer.scrollLeft
      let windowWidth = window.innerWidth - 220

      if (window.innerWidth >= 2000) {
        left = `calc(${event.pageX}px - (100vw - 2000px) / 2)`
        // windowWidth = windowWidth - ((window.innerWidth - 2000) / 2) 
      }

      console.log("scroll position : " + scrollPosition);

      this.getPadding()

      let maxScroll = Math.round((containerWidth - windowWidth) + (this.padding * 2) - 100)

      this.$refs.cursor.setAttribute('style', `top: ${top}; left: ${left}; transform: translate(-50%, -50%); transition: transform 0.3s ease;`)

      if (maxScroll <= scrollPosition) {
        this.$refs.cursor.setAttribute('style', `top: ${top}; left: ${left}; transform: translate(-50%, -50%) rotate(-180deg); transition: transform 0.3s ease;`)
      }

    },
    scroll() {
      let containerWidth = this.$refs.timeLine.offsetWidth
      let scrollPosition = this.$refs.sectionCareer.scrollLeft
      let windowWidth = window.innerWidth - 220

      let top = event.pageY + "px"
      let left = event.pageX + "px"

      this.getPadding()

      if (window.innerWidth >= 2000) {
        left = `calc(${event.pageX}px - (100vw - 2000px) / 2)`
        windowWidth = windowWidth - ((window.innerWidth - 2000) / 2)
      }

      let maxScroll = Math.round((containerWidth - windowWidth) + (this.padding * 2))

      console.log(maxScroll);

      this.$refs.cursor.setAttribute('style', `top: ${top}; left: ${left}; transform: translate(-50%, -50%) rotate(-180deg); transition: transform 0.5s ease;`)

      if ((maxScroll - 100) <= scrollPosition) {
        this.$refs.cursor.setAttribute('style', `top: ${top}; left: ${left}; transform: translate(-50%, -50%) rotate(0); transition: transform 0.5s ease;`)
        maxScroll = 0
      }

      this.$refs.sectionCareer.scroll({
        left: maxScroll,
        behavior: 'smooth'
      });
    },
    getPadding() {
      if (window.innerWidth <= 500) {
        this.padding = 20
      } else if (window.innerWidth > 500 && window.innerWidth < 1500) {
        this.padding = window.innerWidth * 0.04
      } else if (window.innerWidth <= 1500) {
        this.padding = 60
      }
    },
    isMobile() {
      if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)){
          this.cursorActive = false
      }
    }
  },
  mounted() {
    this.isMobile()
  },
}

</script>

<style scoped lang='scss'>

.career{
  overflow: scroll !important;
  display: flex;
  flex-direction: column;
  width: max-content;
  cursor: initial;
  transition: all 0.5s ease-in-out;

  @include screen-m {
    justify-content: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .time-line{
    width: calc(clamp(200px, 20vw, 600px) * 4);
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
      width: clamp(fit-content, 20vw, 600px);
      height: 200px;

      display: flex;
      justify-content: center;
      flex-direction: column;

      margin-left: clamp(150px, 20vw, 600px);

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