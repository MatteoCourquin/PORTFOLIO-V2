<template>
  <div>
    <div>
      <h1>Developpeur <br>Frontend</h1>
      <button class="draw meet">Draw Meet</button>
    </div>
    <img :src="profileImg">
  </div>
</template>

<script>

  import profileImg from "@/static/images/profile-img.png"

  export default {
  data() {
    return {
      profileImg,
    };
  },
  methods: {

  },
}

</script>

<!-- <style scoped lang='scss'>
  
</style> -->