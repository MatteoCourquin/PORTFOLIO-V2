<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <section class="section contact">
      <h1>Un Projet ?</h1>
      <p>N'hésitez pas ! Un premier contact est indispensable pour discuter de votre projet. Nous parlerons de ce dernier afin de déterminer le meilleur pour vous.</p>
      <div class="form">
        <a class="button" href="mailto:matteo.courquin@gmail.com">Mail</a>
        <a class="button" href="tel:0652647110">Tel</a>
      </div>
    </section>
  </div>
</template>

<script>

export default {
}

</script>

<style scoped lang='scss'>

p{
  width: 70%;
}
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  .button{
    margin: 0 10px;
  }
}

</style>