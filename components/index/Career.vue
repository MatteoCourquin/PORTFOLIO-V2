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

        <!-- Card Career -->
        <div v-for="(careerItem) in careerItems" class="anim-career card-career">
          <h3>{{ careerItem.title }}</h3>
          <p>{{ careerItem.description }}</p>
          <div class="line"></div>
          <span class="number">{{ careerItem.years }}</span>
          <div class="rectangle"></div>
        </div>

        <div ref="timeLine" class="time-line">
          <div class="time-line-arrow"></div>
        </div>

    </section>
  </div>
</template>

<script>

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {

  data() {
    return {
      cursorActive: false,
      padding: 0,

      careerItems: [
        {
          title: 'Bachelor • IIM',
          description: 'Développeur Web',
          years: '2020 - 2023',
        },
        {
          title: 'Fortuneo',
          description: 'Développeur Angular',
          years: '2022 - En Cours',
        },
        {
          title: 'Mastère • IIM',
          description: 'Chef de projet digital',
          years: '2023 - 2025',
        },
        {
          title: 'À Suivre',
          description: 'Développeur',
          years: '',
        },
      ]
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

    let animCareer = gsap.utils.toArray('.anim-career')
    animCareer.forEach((item, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".career",
          start:"top 80%",
          toggleActions:"restart none none reverse",
          end: "bottom 90%",
        },
      })
      .to(item, {
        opacity: 1,
        duration: .5,
      }).delay(index * .3)
    })

    this.isMobile()
  },
}

</script>

<style scoped lang='scss'>

.anim-career{
  opacity: 0;
}

.career{
  overflow: scroll !important;
  display: flex;
  align-items: center;
  width: max-content;
  cursor: initial;
  transition: all 0.5s ease-in-out;
  height: 500px;
  position: relative;

  .time-line{
    width: calc(clamp(150px, 20vw, 600px) * 7);
    height: 2px;
    background: $color-black;
    position: absolute;
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

  @include screen-m {
    justify-content: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}

.card-career{
  width: clamp(fit-content, 20vw, 600px);
  height: 250px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: 10vw;

  padding-left: 20px;

  position: relative;

  &:first-child{
    margin-left: 0;
  }
  &:nth-child(even){
    transform: translateY(-50%);
  }
  &:nth-child(odd){
    transform: translateY(50%);
  }
  h3, .number{
    white-space: nowrap
  }
  h3{
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }
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

</style>