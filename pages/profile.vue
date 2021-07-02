<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/profile.png" />
    </div>
    <v-sheet color="main">
      <!-- <img :src="profileData.img.image.url" /> -->
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
        schemaKey: 'profile',
        populate: true,
      })

    console.log(profileData.img.image)
      return { profileData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
