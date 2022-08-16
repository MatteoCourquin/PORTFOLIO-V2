<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <section class="section contact">
      <h1>Un Projet ?</h1>
      <form method="post" v-on:submit.prevent="submitForm()">
       
        <div>
          <input type='text' ref='firstName' name='first-name' placeholder='Prénom' />

          <input type='text' ref='lastName' name='last-name' placeholder='Nom' />
        </div>

        <div>
          <input type='mail' ref='mail' name='mail' placeholder='Mail' />

          <input type='text' ref='budget' name='budget' placeholder='Budget' />
        </div>

        <textarea name="message" ref="message" placeholder="Message" ></textarea>

        <button type="submit" class="button">Envoyer</button>
       
      </form>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  methods: {
    async submitForm() {

      const axios = require('axios');

      const data = JSON.stringify({
        firstName: this.$refs.firstName.value,
        lastName: this.$refs.lastName.value,
        mail: this.$refs.mail.value,
        budget: this.$refs.budget.value,
        message: this.$refs.message.value
      })
      const options = {
          headers: {"content-type": "application/json"}
      }

      // axios.post("https://api-portfolio-three.vercel.app/prospects", data, options)
      axios.post("http://localhost:8080/prospects", data, options)
      .then(function (req) {
        console.log(req);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}

</script>

<style scoped lang='scss'>

.section.contact{
  h1{
    margin-bottom: 30px;

    @include screen-m {
      display: none;
    }
  }
  form{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
    div{
      display: flex;
      gap: 30px;

      @include screen-s {
        flex-direction: column;
        gap: 0;
      }
    }
    input, textarea{
      outline: none;
      margin-bottom: 30px;
      border-radius: 0;
      border: 2px solid $color-black;
      background: transparent;
      padding: 10px;
      width: 100%;
      resize: none;
      &::placeholder{
          color: lighten($color-black, 40%);
      }
    }
    textarea{
      height: 150px;
    }
    button[type="submit"] {
      margin-top: 20px;
      align-self: flex-end;

      @include screen-s {
        width: 100%;
      }
    }
  }
}

</style>