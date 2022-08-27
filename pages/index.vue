<template>
  <div>
    <div class="first-section-rectangle"></div>
    <div class="first-section-rectangle"></div>
    <div class="first-section-rectangle"></div>
    <Header/>
    <Hero/>
    <Projects/>
    <Career/>
    <!-- <About/>
    <Footer/> -->
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/index/Hero.vue';
import Projects from '../components/index/Projects.vue';
import Career from '../components/index/Career.vue';
import About from '../components/index/About.vue';
import Footer from '../components/Footer.vue';

export default {
    components: { Header, Hero, Projects, Career, About, Footer }
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