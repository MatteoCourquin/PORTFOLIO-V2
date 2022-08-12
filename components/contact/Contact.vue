<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Contact</h2>
    </div>
    <section class="section contact">
      <h1>Un Projet ?</h1>
      <form method="post" >
       
        <div>
          <input type='text' id='name' name='name' placeholder='Prénom' required />

          <input type='text' id='last-name' name='last-name' placeholder='Nom' />
        </div>

        <div>
          <input type='mail' id='mail' name='mail' placeholder='Mail' required />

          <input type='text' id='budget' name='budget' placeholder='Budget' />
        </div>

        <textarea name="message" id="message" placeholder="Message" ></textarea>

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