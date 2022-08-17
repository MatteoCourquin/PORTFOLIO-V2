<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <section class="section contact">
      <h1>Un Projet ?</h1>
      <form method="post" ref="form" @submit.prevent="submitForm()">

        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
       
        <div>
          <input type='text' ref='firstName' name='first-name' placeholder='Prénom' />

          <input type='text' ref='lastName' name='last-name' placeholder='Nom' />
        </div>

        <div>
          <input type='mail' ref='mail' name='mail' placeholder='Mail' />

          <input type='phone' ref='phone' name='phone' placeholder='Tel' />
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
      errors: [],
    };
  },
  methods: {
    submitForm() {

      let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
      let regexPhone = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

      this.errors = [];

      if (!this.$refs.firstName.value && !this.$refs.lastName.value) {
        this.errors.push('Prénom ou Nom requis');
        console.log('prénom ou nom vide');
      }

      if (!this.$refs.mail.value && !this.$refs.phone.value) {
        this.errors.push('Mail ou Tel requis');
        console.log('mail ou tel vide');
      } else if (this.$refs.mail.value && !regexMail.test(this.$refs.mail.value)) {
        this.errors.push('Mail invalide');
        console.log('mail invalide');
      } else if (this.$refs.phone.value && !regexPhone.test(this.$refs.phone.value)) {
        this.errors.push('Tel invalide');
        console.log('tel invalide');
      }
      if (this.errors.length === 0) {
        
        const axios = require('axios');

        const data = JSON.stringify({
          firstName: this.$refs.firstName.value,
          lastName: this.$refs.lastName.value,
          mail: this.$refs.mail.value,
          phone: this.$refs.phone.value,
          message: this.$refs.message.value
        })
        const options = {
            headers: {"content-type": "application/json"}
        }

        axios.post("https://api-portfolio-three.vercel.app/post", data, options)
        .then(function (req) {
          console.log(req);
        })
        .catch(function (error) {
          console.log(error);
        });

        this.$router.push('/')
      }
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