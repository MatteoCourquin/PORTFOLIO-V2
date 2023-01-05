<template>
  <div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_first"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_third"></div>
    <div class="round-gradient round-gradient_second"></div>
    <div class="round-gradient round-gradient_second"></div>
    <Header />
    <!-- <Hero />
    <Projects /> -->
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
        gsap.to(targets, {
          duration: 3,
          x: e.clientX / 10,
          y: e.clientY / 10,
          ease: 'power4.out',
          overwrite: 'auto',
          stagger: 0.08,
        });
      });
    },
    addBgTitle(title) {
        if (window.scrollY > (title.offsetTop - 1)) {
          title.classList.add('title-section-background');
        } else if (window.scrollY < title.offsetTop) {
          title.classList.remove('title-section-background');
        }
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
    let titles = document.querySelectorAll('.title-section');
    titles.forEach((title) => {
      window.addEventListener('scroll', () => {
        console.log(title);
        this.addBgTitle(title);
      });
    });

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
