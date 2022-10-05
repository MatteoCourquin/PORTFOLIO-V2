<template>
  <div class="header-container">
    <div class="header-btns-container">
      <div class="container-burger">

        <div v-bind:class="[isActive ? 'active' : '', 'btn-burger']" @click="isActive = !isActive">
          <div class="lignes"></div>
          <div class="lignes"></div>
          <div class="lignes"></div>
        </div>

        <div class="container-burger-circle">
          <nuxt-img preload src="/images/logos/burger-circle.svg" quality="10" ref="burgerCircle" class="burger-circle" alt=""/>
          <svg class="progress-bar" id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
            <circle id="progress-bar-circle" cx="110" cy="110" r="95" fill="none" stroke="#000" stroke-width="23"/>
          </svg>
        </div>

      </div>

    </div>

    <header v-bind:class="[isActive ? 'active' : '']">
      <ul class="header-nav">
        <li @click="isActive = !isActive"><nuxt-link class="links" to="/">home</nuxt-link></li>
        <li @click="isActive = !isActive"><nuxt-link class="links" to="/projets">projets</nuxt-link></li>
        <li @click="isActive = !isActive"><nuxt-link class="links" to="/contact">contact</nuxt-link></li>
      </ul>
      <Footer class="footer" />
    </header>

  </div>
</template>

<script>

import Footer from '../components/Footer.vue';

export default {
  components: { Footer },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    progressScrollBar() {

      if (document.location.pathname == '/') {
        window.addEventListener("scroll", () => {

        let height = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let circle = (position / height) * 625;

        document.getElementById("progress-bar-circle").style.strokeDashoffset = circle - 625;

        }); 
      } else {
        document.getElementById("progress-bar-circle").style.strokeDashoffset = 625;
      }
    }
  },
  mounted() {
    this.isActive = false;
    this.progressScrollBar()
  },
};
</script>

<style scoped lang="scss">

header{
  width: 100vw;
  height: 100vh;
  padding-right: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  transform: translateY(-100%);

  transition: $current-transition;
  z-index: 99;

  @include background-image;

  @include screen-m {
    padding-right: 0;
  }

  .footer{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .header-nav{
    li{
      .links{
        font-family: $font-montserrat-black !important;
      }
      font-size: clamp(40px, 5vw, 80px);
      line-height: clamp(45px, 5.5vw, 100px);
      text-align: center;
    }
  }
}
header.active{
  position: fixed;
  transform: translateY(0);
}

.header-btns-container{
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
    width: fit-content;
    height: fit-content;
    border: none;
  }
  .container-burger{
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1 / 1;
    padding: 20px;

    position: relative;

    @include filter-background;

    display: flex;
    justify-content: center;
    align-items: center;

    @include screen-m {
      width: fit-content;
      padding: 30px;
      aspect-ratio: initial;

      justify-content: flex-end;

      backdrop-filter: blur( 0 );
      -webkit-backdrop-filter: blur( 0 );
    }
    
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
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

    animation: rotate 15s infinite linear;
  }
  .progress-bar{
    stroke-dasharray: 625;
    stroke-dashoffset: 625;
    transform: rotate3d(0, 1, 0, 180deg) rotate(-90deg);
    padding: 22px;
    position: absolute;
  }
}

</style>
