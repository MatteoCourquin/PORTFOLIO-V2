<template>
  <div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_second"></div>
    <div class="round-gradient round-gradient_third"></div>
    <Header />
    <Hero />
    <Projects />
    <Career />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/index/Hero.vue';
import Projects from '../components/index/Projects.vue';
import Career from '../components/index/Career.vue';
import About from '../components/index/About.vue';
import Footer from '../components/Footer.vue';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { log } from 'console';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { Header, Hero, Projects, Career, About, Footer },
  data() {
    return {};
  },
  methods: {
    followMouse() {
      let targets = gsap.utils.toArray('.round-gradient');
      window.addEventListener('mousemove', (e) => {
        console.log(e);
        gsap.to(targets, {
          duration: 3,
          xPercent: e.screenX / 30,
          yPercent: e.screenY / 30,
          ease: 'power4.out',
          overwrite: 'auto',
          stagger: 0.08,
        });
      });
    },
    changeTitle() {
      let docTitle = document.title;
      window.addEventListener('blur', () => {
        document.title = 'Revenez vite !';
      });
      window.addEventListener('focus', () => {
        document.title = docTitle;
      });
    },
    animGsapToBottom() {
      let fadein = gsap.utils.toArray('.events');
      fadein.forEach((item, index) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
            end: 'bottom 90%',
          },
        });

        tl.from(item, {
          opacity: 0,
          y: -50,
          duration: 0.5,
        });
      });
    },
  },
  mounted() {
    this.animGsapToBottom();
    this.changeTitle();
    this.followMouse();
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

.round-gradient {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: fixed;
  opacity: 0.6;
  z-index: -10;
  &:nth-child(1) {
    top: -50%;
    left: -20%;
  }
  &:nth-child(2) {
    bottom: -10%;
    right: 30%;
  }
  &:nth-child(3) {
    top: 30%;
    left: 0%;
  }
  &:nth-child(4) {
    top: -30%;
    right: 0%;
  }
  &:nth-child(5) {
    top: -10%;
    left: 20%;
  }
  &:nth-child(6) {
    bottom: -10%;
    right: 0%;
  }
}
.round-gradient_first {
  background: radial-gradient(
    $color-first 0%,
    transparent 50%,
    transparent 100%
  );
}
.round-gradient_second {
  background: radial-gradient(
    $color-second 0%,
    transparent 50%,
    transparent 100%
  );
}
.round-gradient_third {
  background: radial-gradient(
    $color-third 0%,
    transparent 70%,
    transparent 100%
  );
}

body {
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  @include background-image;
}
</style>
