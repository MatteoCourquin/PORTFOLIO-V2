<template>
  <div class="header-container">
    <header>
      <div class="container-burger">
        <div class="btn-burger">
          <div class="lignes"></div>
          <div class="lignes"></div>
          <div class="lignes"></div>
        </div>
        <img class="burger-circle" :src="burgerCircle" />
      </div>
    </header>
  </div>
</template>

<script>

import burgerCircle from "@/static/images/logos/burger-circle.svg"

export default {

  data() {
    return {
      burgerCircle,
    };
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">

@keyframes rotate {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

header{
  width: 220px;
  height: 100vh;

  position: fixed;
  right: 0;

  @media screen and (min-width : 2000px) {
    right: calc((100vw - 2000px) / 2);
  }

  border-left: 2px solid $color-black;

  z-index: 9999;
  .container-burger{
    width: 100%;
    aspect-ratio: 1 / 1;
    padding: 20px;

    position: relative;

    backdrop-filter: blur( 50px );
    -webkit-backdrop-filter: blur( 50px );

    display: flex;
    justify-content: center;
    align-items: center;
    .btn-burger{
        width: 50px;
        height: 40px;

        cursor: pointer;

        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: column;

        z-index: 9999;
        .lignes{
          width: 100%;
          height: 2px;

          transition: $current-transition;

          background-color: $color-black;
          &:nth-child(2){
            width: 50%;
          }
          &:nth-child(3){
            width: 70%;
          }
        }

        &:hover{
          .lignes{
            width: 100%;
          }
        }
      }

    .burger-circle{
      padding: 20px;
      width: 100%;
      position: absolute;

      animation: rotate 10s infinite linear;
    }
  }
}

</style>
