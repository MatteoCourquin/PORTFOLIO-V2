<template>
  <div>
    <Header/>
    <Hero/>
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
  background-image: url("@/static/images/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  // backdrop-filter: blur( 6.5px );
  // -webkit-backdrop-filter: blur( 6.5px );
}

</style>