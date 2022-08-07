<template>
  <div class="hero">
    <div class="hero-description">
      <h1>Developpeur <br>Frontend</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus atque magnam animi minus ex facere quia sunt dolore. Deleniti, ipsa.</p>
      <button class="button">Draw Meet</button>
    </div>
    <div class="container-image">
      <img :src="profileImg">
    </div>
    <div class="container-coding-since">
      <p class="coding-since-items"><span class="coding-since-number">{{ date.years }}</span>an</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.months }}</span>mois</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.days }}</span>jours</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.hours }}</span>heures</p>
      <div class="coding-since-lines"></div>
      <p class="coding-since-items"><span class="coding-since-number">{{ date.minutes }}</span>minutes</p>
      <!-- <span class="coding-since-items"><span class="coding-since-number">{{ date.seconds }}</span>seconds</span> -->
    </div>
  </div>
</template>

<script>

  import profileImg from "@/static/images/profile-img.png"

  export default {
  data() {
    return {
      profileImg,

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
    }
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

.hero{
  overflow: hidden;
  width: calc(100% - 220px);
  height: 100vh;
  min-height: 900px;
  position: relative;
  display: grid;
  grid-template-columns: 5fr 4fr;
  align-items: center;
  padding: 0 clamp(20px, 4vw, 60px) calc( clamp(20px, 4vw, 60px) + clamp(20px, 3.5vw, 60px)) clamp(20px, 4vw, 60px);
  .hero-description{
    p{
      margin: 20px 0;
      width: 70%;
    }
  }
  .container-image{
    width: clamp(200px, 30vw, 500px);
    border-bottom: 2px solid $color-black;
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
    .coding-since-lines{
      width: 2px;
      height: clamp(20px, 3.5vw, 60px);
      background: $color-black;
    }
    .coding-since-items{
      padding: 0 20px;
      .coding-since-number{
        font-size: clamp(20px, 5vw, 80px);
        font-family: $font-montserrat-extra-bold;
        margin-right: 5px;
      }
    }
  }
}
  
</style>