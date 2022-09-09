<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <section class="section contact">
      <h1>Un Projet ?</h1>
      <!-- <p>N'hésitez pas ! Un premier contact est indispensable pour discuter de votre projet. Nous parlerons de ce dernier afin de déterminer le meilleur pour vous.</p> -->
      <div class="container-form">
        <iframe class="form" src="https://tally.so/embed/n9qP0Q?alignLeft=1&hideTitle=1&transparentBackground=1" width="90%" frameborder="0" marginheight="0" marginwidth="0"></iframe>
      </div>
    </section>
  </div>
</template>

<style scoped lang='scss'>

@include screen-m {
  h1{
    display: none;
  }
}
.container-form{
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form{
    height: 400px;
    @media screen and (max-width : 717px) {
      height: 600px;
    }
  }
}

</style>