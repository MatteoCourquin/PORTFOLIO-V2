<template>
  <div>
    <div class="first-section-rectangle"></div>
    <div class="first-section-rectangle"></div>
    <div class="first-section-rectangle"></div>
    <Header/>
    <Hero/>
    <Projects/>
    <Career/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/index/Hero.vue';
import Projects from '../components/index/Projects.vue';
import Career from '../components/index/Career.vue';
import About from '../components/index/About.vue';
import Footer from '../components/Footer.vue';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { Header, Hero, Projects, Career, About, Footer },
  mounted() {
    let fadein = gsap.utils.toArray('.events')
    fadein.forEach((item, index) => {

    let tl = gsap.timeline({
      scrollTrigger: {
      trigger: item,
      start:"top 70%",
      toggleActions:"play none none reverse",
      end: "bottom 90%",
      }
    });
    tl.from(item, {
      opacity: 0,
      y: -50,
      duration: .5,
      });
    });
  },
}

</script>

<style lang="scss">

@import "../assets/scss/main.scss";

body{
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  overflow-x: hidden;

  @include background-image;
}

</style>