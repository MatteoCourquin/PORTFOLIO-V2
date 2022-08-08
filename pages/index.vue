<template>
  <div>
    <Header/>
    <Hero/>
    <Project/>
    <Section/>
    <Elements/>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="scss">

@import "../assets/scss/main.scss";

body{
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  background-image: url("@/static/images/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

</style>