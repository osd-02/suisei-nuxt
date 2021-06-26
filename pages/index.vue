<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/home.png" />
    </div>
    <v-sheet color="main">
      <Live :data="this.liveData" id="live-location" />
    </v-sheet>
    <div id="footer-space" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 80%;
  max-width: 600px;
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
  #footer-space {
    height: 40px;
  }
}
</style>

<script>
export default {
  async asyncData({ app }) {
    try {
      console.log('aaa')
      const liveData = await app.flamelink.content.get({
        schemaKey: 'live',
        populate: true,
      })
      console.log('bbb')
      const newsData = await app.flamelink.content.get({
        schemaKey: 'news',
        populate: true,
      })
      const discogData = await app.flamelink.content.get({
        schemaKey: 'discog',
        populate: true,
      })
      console.log({ liveData, newsData, discogData })
      return { liveData, newsData, discogData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
