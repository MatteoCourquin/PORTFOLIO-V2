<template>
  <div>
    <Header/>
    <Hero/>
    <Projects/>
    <Career/>
    <About/>
    <About/>
    <About/>
    <!-- <Section/>
    <Elements/> -->
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/index/Hero.vue';
import Projects from '../components/index/Projects.vue';
import Career from '../components/index/Career.vue';
import About from '../components/index/About.vue';

export default {
    components: { Header, Hero, Projects, Career, About }
}

</script>

<style lang="scss">

@import "../assets/scss/main.scss";

body{
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  @include background-image;
}

</style>