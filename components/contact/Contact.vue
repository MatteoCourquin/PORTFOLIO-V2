<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <section class="section contact">
      <h1>Un Projet ?</h1>
      <form method="post" ref="form" @submit.prevent="submitForm()">
       
        <span class="error">{{ errors.notSend }}</span>
        <span class="error">{{ errors.names }}</span>
        <div>
          <input v-bind:class="[errors.names ? 'error-input' : '']" type='text' ref='firstName' name='first-name' placeholder='Prénom' />
          <span>ou</span>
          <input v-bind:class="[errors.names ? 'error-input' : '']" type='text' ref='lastName' name='last-name' placeholder='Nom' />
        </div>

        <span class="error">{{ errors.contacts }}</span>
        <span class="error">{{ errors.mail }}</span>
        <span class="error">{{ errors.phone }}</span>

        <div>
          <input v-bind:class="[errors.contacts || errors.mail ? 'error-input' : '']" type='mail' ref='mail' name='mail' placeholder='Mail' />
          <span>ou</span>
          <input v-bind:class="[errors.contacts || errors.phone ? 'error-input' : '']" type='phone' ref='phone' name='phone' placeholder='Tel' />
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
      errors: {
        names: '',
        contacts: '',
        mail: '',
        phone: '',
        notSend: ''
      },
    };
  },
  methods: {
    submitForm() {

      let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
      let regexPhone = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

      if (!this.$refs.firstName.value && !this.$refs.lastName.value) {
        this.errors.names = 'Veuillez saisir au moins un prénom ou un nom';
      } else if (this.$refs.firstName.value || this.$refs.lastName.value) {
        this.errors.names = '';
      }

      if (!this.$refs.mail.value && !this.$refs.phone.value) {
        this.errors.contacts = 'Veuillez saisir au moins un mail ou un numéro de téléphone';
      } else if (this.$refs.mail.value || this.$refs.phone.value) {
        this.errors.contacts = '';
      }
      if (this.$refs.mail.value && !regexMail.test(this.$refs.mail.value)) {
        this.errors.mail = 'Veuillez entrer un e-mail valide';
      } else {
        this.errors.mail = '';
      }
      if (this.$refs.phone.value && !regexPhone.test(this.$refs.phone.value)) {
        this.errors.phone = 'Veuillez entrer un numéro de téléphone valide';
      } else {
        this.errors.phone = '';
      }

      if (!this.errors.names && !this.errors.contacts && !this.errors.mail && !this.errors.phone) {

        console.log('formulaire valide')
        
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

        const vm = this

        axios.post("https://api-portfolio-three.vercel.app/post", data, options)
        // axios.post("http://localhost:8080/post", data, options)
        .then(function (req) {
          if (req.status == 200) {
            vm.errors.notSend = ''
            vm.$router.push('/')
          } else {
            vm.errors.notSend = 'Le formulaire n\'a pas été envoyé, veuillez réessayer.'
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
}

</script>

<style scoped lang='scss'>

.error-input{
  border: 2px solid red !important;
}
.error{
  text-align: center;
  color: red;
}

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
      align-items: center;
      gap: 10px;
      margin: 15px 0;
      span{
        margin: 10px;
        padding: 0;
      }

      @include screen-s {
        flex-direction: column;
        gap: 0;
      }
    }
    input, textarea{
      outline: none;
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
      margin: 15px 0;
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