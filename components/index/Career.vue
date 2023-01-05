<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Carière</h2>
    </div>
    <section ref="sectionCareer" class="section career">
      <div class="slider-section">
        <div ref="sliderContainer" class="slider-container" :style="slider">
          <div
            v-for="careerItem in careerItems"
            class="anim-career card-career"
            :key="careerItem.id"
            ref="sliderCard"
          >
            <h3>{{ careerItem.title }}</h3>
            <p>{{ careerItem.description }}</p>
            <span class="number">{{ careerItem.years }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-20 mt-10">
        <nuxt-img
          @click="slideLeft()"
          class="arrow-slider arrow-slider_left"
          src="/images/logos/arrow-slider.svg"
        />
        <nuxt-img
          @click="slideRight()"
          class="arrow-slider arrow-slider_right"
          src="/images/logos/arrow-slider.svg"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      // Slider
      counter: 0,
      cardWidth: 0,

      careerItems: [
        {
          title: 'Bachelor • IIM',
          description: 'Développeur Web',
          years: '2020 - 2023',
        },
        {
          title: 'Fortuneo',
          description: 'Développeur Angular / React',
          years: '2022 - En Cours',
        },
        {
          title: 'Mastère • IIM',
          description: 'Chef de projet digital',
          years: '2023 - 2025',
        },
        {
          title: 'À Suivre',
          description: 'Développeur',
          years: '',
        },
      ],
    };
  },
  methods: {
    // Function to slide Right
    slideRight: function () {
      this.counter++;
      if (this.counter >= this.$refs.sliderContainer.children.length) {
        this.counter = 0;
        this.cardWidth = 0;
      } else {
        this.cardWidth = this.$refs.sliderCard[0].offsetWidth;
        this.cardWidth = this.cardWidth * this.counter;
      }
    },
    // Function to slide Left
    slideLeft: function () {
      this.counter--;
      if (this.counter <= -1) {
        this.counter = this.$refs.sliderContainer.children.length;
        this.cardWidth = this.$refs.sliderCard[0].offsetWidth;
        this.cardWidth = this.cardWidth * this.counter - this.cardWidth;
      } else {
        this.cardWidth = this.$refs.sliderCard[0].offsetWidth;
        this.cardWidth = this.cardWidth * this.counter;
      }
    },
  },
  computed: {
    // Style to slide the card
    slider() {
      return {
        transform: `translateX(-${this.cardWidth}px)`,
        transition: 'transform .5s ease-in-out',
      };
    },
  },
  mounted() {
    let animCareer = gsap.utils.toArray('.anim-career');
    animCareer.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.career',
            start: 'top 80%',
            toggleActions: 'restart none none reverse',
            end: 'bottom 90%',
          },
        })
        .to(item, {
          opacity: 1,
          duration: 0.5,
        })
        .delay(index * 0.3);
    });
  },
};
</script>

<style scoped lang="scss">
.anim-career {
  opacity: 0;
}

.career {
  overflow: hidden;
  padding: 0 0 0 clamp(20px, 4vw, 60px) !important;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh !important;
  .slider-container {
    display: flex;
  }
}

.arrow-slider_right {
  transform: rotate(90deg);
  &:hover {
    transform: rotate(90deg) translateY(-10%) scaleY(1.2);
  }
}
.arrow-slider_left {
  transform: rotate(-90deg);
  &:hover {
    transform: rotate(-90deg) translateY(-10%) scaleY(1.2);
  }
}
.arrow-slider {
  height: 50px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

.slider-section {
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

.card-career {
  width: clamp(250px, 50vw, 500px);
  flex-shrink: 0;
  position: relative;
  .number {
    white-space: nowrap;
  }
  h3 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }
  .number {
    font-size: clamp(20px, 2vw, 40px);
  }
}
</style>
