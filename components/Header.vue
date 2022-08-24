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
          <nuxt-img preload src="/images/logos/burger-circle.svg" ref="burgerCircle" class="burger-circle" />
        </div>

      </div>

    </div>

    <header v-bind:class="[isActive ? 'active' : '']">
      <div class="social-medias">
        <a href="https://github.com/MatteoCourquin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-74.4 -120.90175 644.8 725.4105"><path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/matteo-courquin-6658b0207/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-11.493675 -16.3118 99.61185 97.8708"><path d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67"/><path d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"/></svg>
        </a>
      </div>
      <ul class="header-nav">
        <li @click="isActive = !isActive"><nuxt-link class="links" to="/">home</nuxt-link></li>
        <li @click="isActive = !isActive"><nuxt-link class="links" to="/projects">projets</nuxt-link></li>
        <li @click="isActive = !isActive"><nuxt-link class="links" to="/contact">contact</nuxt-link></li>
      </ul>
    </header>

  </div>
</template>

<script>

export default {

  data() {
    return {
      isActive: false,
    };
  },
  methods: {
  },
  mounted() {
    this.isActive = false;
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

  .social-medias{
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    svg{
      width: 70px;
      height: auto;
      cursor: pointer;
      transition: .2s;
      &:hover{
        fill: $color-white;
      }
    }
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

</style>
