<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/reserve.png" />
    </div>
    <v-sheet color="main">
      <div class="img-wrapper">
        <img :src="profileData.img[0].image[0].url" />
      </div>
      <div class="body" v-html="`${profileData.body}`" />
    </v-sheet>
    <div id="footer-space" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 90%;
  max-width: 600px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  #logo-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 56px;
    #home-logo {
      height: 30px;
    }
  }
  .img-wrapper {
    padding: 0 16px 16px 16px;
    img {
      border-radius: 16px;
    }
  }
  .body {
    text-align: center;
  }
  #footer-space {
    height: 40px;
  }
}
</style>

<script lang="js">
export default {
  async asyncData({ app }) {
    try {
      const profileData = await app.flamelink.content.get({
        schemaKey: 'prof',
        populate: true,
      })
      return { profileData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
