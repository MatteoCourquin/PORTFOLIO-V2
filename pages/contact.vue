<template>
  <div>
    <!-- <div class="first-section-rectangle"></div>
    <div class="first-section-rectangle"></div> -->
    <Header/>
    <Contact/>
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import Contact from '../components/contact/Contact.vue';

export default {
  components: { Header, Contact }
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