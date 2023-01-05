<template>
  <div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_second"></div>
    <div class="round-gradient round-gradient_third"></div>
    <Success />
  </div>
</template>

<script>
import Success from '../components/contact/Success.vue';
import gsap from 'gsap';

export default {
  components: { Success },
  methods: {
    followMouse() {
      let targets = gsap.utils.toArray('.round-gradient');
      window.addEventListener('mousemove', (e) => {
        gsap.to(targets, {
          duration: 3,
          xPercent: e.screenX / 40,
          yPercent: e.screenY / 40,
          ease: 'power4.out',
          overwrite: 'auto',
          stagger: 0.08,
        });
      });
    },
  },
  mounted() {
    this.followMouse();
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

body {
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  overflow-x: hidden;

  @include background-image;
}
</style>
