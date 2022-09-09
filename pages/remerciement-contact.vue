<template>
  <div>
    <div class="first-section-rectangle"></div>
    <div class="first-section-rectangle"></div>
    <Success />
  </div>
</template>

<script>

import Success from "../components/contact/Success.vue";

export default {
    components: { Success }
}

</script>

<style lang='scss'>

@import "../assets/scss/main.scss";

body{
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  overflow-x: hidden;

  @include background-image;
}
  
</style>