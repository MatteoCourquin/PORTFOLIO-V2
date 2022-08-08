<template>
  <div class="header-container">
    <div class="header">
      <div class="container-burger">

        <div v-bind:class="[isActive ? 'active' : '', 'btn-burger']" @click="isActive = !isActive">
          <div class="lignes"></div>
          <div class="lignes"></div>
          <div class="lignes"></div>
        </div>

        <div ref="triggerBurgerCircle" class="container-burger-circle">
          <nuxt-img preload src="/images/logos/burger-circle.svg" ref="burgerCircle" class="burger-circle" />
        </div>

      </div>

    </div>

    <header v-bind:class="[isActive ? 'active' : '']">
      <ul>
        <li>home</li>
        <li>projets</li>
        <li>contact</li>
      </ul>
    </header>

  </div>
</template>

<script>

export default {

  data() {
    return {
      isActive: true,
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
  width: calc(100vw - 220px);
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -100vh;
  left: 0;

  transition: .4s;
  z-index: 99;

  background-image: url("../static/images/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @include screen-m {
    width: 100vw;
  }

  ul{
    li{
      font-family: $font-montserrat-black;
      font-size: clamp(20px, 5vw, 80px);
      line-height: clamp(25px, 5.5vw, 100px);
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
      color: $color-black;
      transition: all .1s;
      &:hover{
        color: transparent;
        -webkit-text-stroke: 2px $color-black;
      }
    }
  }
}
header.active{
  top: 0;
}

.header{
  width: 220px;
  height: 100vh;

  position: fixed;
  right: 0;
  @media screen and (min-width : 2000px) {
    right: calc((100vw - 2000px) / 2);
  }

  border-left: 2px solid $color-black;

  z-index: 9999;

  @include screen-m {
    width: 150px;
    height: 120px;
    border: none;
  }
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

    @include screen-m {
      justify-content: flex-end;
      aspect-ratio: initial;
      padding: 50px;
    }
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
          background: $color-white;
          width: 100%;
        }
      }
    }
    .btn-burger.active{
      align-items: center;
      .lignes{
        width: 100%;
        &:nth-child(1){
          transform: translateY(19px) rotate(-45deg);
        }
        &:nth-child(2){
          width: 0px;
        }
        &:nth-child(3){
          transform: translateY(-19px) rotate(45deg);
        }
      }
      &:hover{
        .lignes:nth-child(3){
          width: 20px;
        }
      }
    }

    .container-burger-circle{
      position: absolute;
      aspect-ratio: 1 / 1;
      width: 100%;

      @include screen-m {
        display: none;
      }
      .burger-circle{
        padding: 20px;
        width: 100%;
        position: absolute;
  
        animation: rotate 10s infinite linear;
      }
    }
  }
}

</style>
