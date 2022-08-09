<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section projects">
        <div class="box-red"></div>
        <div class="box-red"></div>
        <div class="box-red"></div>
        <div class="box-red"></div>
    </section>
  </div>
</template>

<script>

export default {
data() {
  return {

  };
},
}

</script>

<style scoped lang='scss'>
.projects{
  overflow: scroll !important;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  .box-red{
    flex-shrink: 0;
    width: 80vw;
    height: 80vh;
    border: 2px solid black;
    background: lightblue;
  }
}

</style>