<template>
  <div class="hero">
    <div class="hero-description">
      <h1>Developpeur <br>web</h1>
      <p>Développeur de passion, mon travail n'est qu'une partie de plaisir. Selon moi, c'est primordial pour faire des projets soignés et de qualité ! <br><br>
      Votre projet sera peut-être le prochain ?</p>
      <nuxt-link to="/contact"><button class="button">Contact</button></nuxt-link>
    </div>
    <div class="container-image">
      <nuxt-img alt="matteo courquin" preload src='/images/profile-img.png'/>
    </div>
    <div class="container-coding-since">
      <p>depuis</p>
      <p class="coding-since-items"><span class="number"><span v-if="showZero(years)">0</span>{{ years }}</span>{{ isPlural(years, "an") }}</p>
      <div class="months coding-since-lines"></div>
      <p class="months coding-since-items"><span class="number"><span v-if="showZero(months)">0</span>{{ months }}</span>mois</p>
      <div class="days coding-since-lines"></div>
      <p class="days coding-since-items"><span class="number"><span v-if="showZero(days)">0</span>{{ days }}</span>{{ isPlural(days, "jour") }}</p>
      <div class="hours coding-since-lines"></div>
      <p class="hours coding-since-items"><span class="number"><span v-if="showZero(hours)">0</span>{{ hours }}</span>{{ isPlural(hours, "heure") }}</p>
      <div class="minutes coding-since-lines"></div>
      <p class="minutes coding-since-items"><span class="number"><span v-if="showZero(minutes)">0</span>{{ minutes }}</span>{{ isPlural(minutes, "minute") }}</p>
      <div class="seconds coding-since-lines"></div>
      <p class="seconds coding-since-items"><span class="number"><span v-if="showZero(seconds)">0</span>{{ seconds }}</span>{{ isPlural(seconds, "seconde") }}</p>
    </div>
  </div>
</template>

<script>
// import { gsap } from "gsap";

  export default {
  data() {
    return {
      years: "",
      months: "",
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    showZero(i) {
      return i.toString().length < 2 ? true : false
    },
    isPlural(number, word) {
      return number > 1 ? word + "s" : word
    },
    timeAdvance() {
      setInterval(() => {
        this.seconds++
        if (this.seconds >= 60) {
          this.seconds = 0
          this.minutes++
          if (this.minutes >= 60) {
            this.minutes = 0
            this.hours++
            if (this.hours >= 24) {
              this.hours = 0
              this.days++
              if (this.days >= 30) {
                this.days = 0
                this.months++
                if (this.months >= 12) {
                  this.months = 0
                  this.years++
                }
              }
            }
          }
        }
      }, 1000)
    }
  },
  mounted() {
    let dateNow = new Date()
    let codingSince = new Date('Wed Apr 15 2020 16:00:00 GMT+0100')

    let tmp = dateNow - codingSince;

    this.years = Math.floor(tmp / 31536000000)
    this.months = Math.floor((tmp % 31536000000) / 2628000000)
    this.days = Math.floor((tmp % 2628000000) / 86400000)
    this.hours = Math.floor((tmp % 86400000) / 3600000)
    this.minutes = Math.floor((tmp % 3600000) / 60000)
    this.seconds = Math.floor((tmp % 60000) / 1000)

    this.timeAdvance()
  },
}

</script>

<style scoped lang='scss'>

.hero{
  width: calc(100% - 220px);
  height: 100vh;
  min-height: 900px;
  padding: 0 clamp(20px, 4vw, 60px) calc( clamp(20px, 4vw, 60px) + clamp(20px, 3.5vw, 60px)) clamp(20px, 4vw, 60px);

  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: 5fr 4fr;
  align-items: center;

  @include screen-m {
    width: 100%;
  }
  @include screen-xs{
    grid-template-columns: 1fr;
    padding: calc( clamp(20px, 4vw, 60px) + clamp(20px, 3.5vw, 60px)) clamp(20px, 4vw, 60px);
    min-height: 100vh;
  }
  .hero-description{
    p{
      width: 70%;
      margin: 20px 0;

      @include screen-m {
        width: 100%;
      }
    }
  }
  .container-image{
    width: clamp(200px, 30vw, 500px);

    border-bottom: 2px solid $color-black;
    box-shadow: 0 9px 10px -14px $color-black;

    @include screen-xs{
      display: none;
    }
  }
  .container-coding-since{
    padding: clamp(20px, 4vw, 60px) 0;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    @include screen-m {
      bottom: 20px;
    }
    .coding-since-lines{
      width: 2px;
      height: clamp(20px, 3.5vw, 60px);

      background: $color-black;
    }
    .coding-since-items{
      padding: 0 20px;
      display: flex;
      align-items: center;
      .number{
        margin-right: 5px;
      }
    }
    .seconds{
      @media screen and (max-width : 1500px) {
        display: none;
      }
    }
     .minutes{
      @media screen and (max-width : 1200px) {
        display: none;
      }
    }
     .hours{
      @media screen and (max-width :700px) {
        display: none;
      }
    }
     .days{
      @media screen and (max-width :500px) {
        display: none;
      }
    }
    .months{
      @media screen and (max-width : 350px) {
        display: none;
      }
    }
  }
}
  
</style>