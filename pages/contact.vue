<template>
  <div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_second"></div>
    <div class="round-gradient round-gradient_third"></div>
    <Header />
    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Contact from '../components/contact/Contact.vue';
import gsap from 'gsap';

export default {
  components: { Header, Contact },
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

  @include background-image;
}
</style>
