<template>
  <div>
    <Header/>
    <Projects/>
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import Projects from '../components/projects/Projects.vue';

export default {
  components: { Header, Projects }
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