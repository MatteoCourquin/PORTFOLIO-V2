<template>
  <div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_second"></div>
    <div class="round-gradient round-gradient_second"></div>
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
          xPercent: e.screenX / 40,
          yPercent: e.screenY / 40,
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

body {
  position: relative;

  max-width: 2000px;
  margin: 0 auto;

  @include background-image;
}
</style>
