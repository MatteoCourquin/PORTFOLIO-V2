<template>
  <div class="hero">
    <div class="hero-rectangle"></div>
    <div class="hero-rectangle"></div>
    <div class="hero-rectangle"></div>
    <div class="hero-description">
      <h1>Developpeur <br>Frontend</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus atque magnam animi minus ex facere quia sunt dolore. Deleniti, ipsa.</p>
      <button class="button">Contact</button>
    </div>
    <div class="container-image">
      <nuxt-img preload src='/images/profile-img.png'/>
    </div>
    <div class="container-coding-since">
      <p class="coding-since-items"><span class="coding-since-number">{{ date.years }}</span>{{ isPlural(date.years, "an") }}</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.months }}</span>mois</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.days }}</span>{{ isPlural(date.days, "jour") }}</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.hours }}</span>{{ isPlural(date.hours, "heure") }}</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.minutes }}</span>{{ isPlural(date.minutes, "minute") }}</p>
      <!-- <span class="coding-since-items"><span class="coding-since-number">{{ date.seconds }}</span>seconds</span> -->
    </div>
  </div>
</template>

<script>

  export default {
  data() {
    return {
      date: {
        years: Number,
        months: Number,
        days: Number,
        hours: Number,
        minutes: Number,
        seconds: Number,
      }
    };
  },
  methods: {
    addZero(i) {
      return i.toString().length < 2 ? i = "0" + i : i = i
    },
    isPlural(number, word) {
      return number > 1 ? word + "s" : word
    },
  },
  mounted() {
    let dateNow = new Date()
    let codingSince = new Date('2020-04-15 16:00:00')

    let tmp = dateNow - codingSince;

    this.date.years = this.addZero(Math.floor(tmp / 31536000000));
    this.date.months = this.addZero(Math.floor((tmp % 31536000000) / 2628000000));
    this.date.days = this.addZero(Math.floor((tmp % 2628000000) / 86400000));
    this.date.hours = this.addZero(Math.floor((tmp % 86400000) / 3600000));
    this.date.minutes = this.addZero(Math.floor((tmp % 3600000) / 60000));
    this.date.seconds = this.addZero(Math.floor((tmp % 60000) / 1000));
  },
}

</script>

<style scoped lang='scss'>

.hero-rectangle{
  position: absolute;
  background: $color-white;
  z-index: -1;
}
.hero-rectangle:nth-child(1){
  top: 25%;
  height: clamp(50px, 6vw, 90px);
  aspect-ratio: 10 / 5;
}
.hero-rectangle:nth-child(2){
  top: 40%;
  right: 0;
  width: clamp(40px, 4vw, 90px);
  aspect-ratio: 4 / 15;
}
.hero-rectangle:nth-child(3){
  bottom: clamp(20px, 4vw, 60px);
  right: 30%;
  height: clamp(30px, 3vw, 70px);
  aspect-ratio: 10 / 1;

  @include screen-s {
    display: none;
  }
}

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
  @include screen-s{
    grid-template-columns: 1fr;
    padding: 220px clamp(20px, 4vw, 60px) calc( clamp(20px, 4vw, 60px) + clamp(20px, 3.5vw, 60px)) clamp(20px, 4vw, 60px);
  }
  .hero-description{
    p{
      width: 70%;
      margin: 20px 0;
    }
  }
  .container-image{
    width: clamp(200px, 30vw, 500px);

    border-bottom: 2px solid $color-black;

    @include screen-s{
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

    @include screen-s {
      padding: 0;

      flex-direction: column;
      align-items: flex-start;

      position: relative;
    }
    .coding-since-lines{
      width: 2px;
      height: clamp(20px, 3.5vw, 60px);

      background: $color-black;

      @include screen-s {
        display: none;
      }
    }
    .coding-since-items{
      padding: 0 20px;

      @include screen-s {
        padding: 0;
      }
      .coding-since-number{
        margin-right: 5px;

        font-size: clamp(20px, 5vw, 80px);
        font-family: $font-montserrat-extra-bold;
      }
    }
  }
}
  
</style>