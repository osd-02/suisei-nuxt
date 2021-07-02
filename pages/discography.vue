<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/discography.png" />
    </div>
    <v-sheet color="main">
      <Discog :data="this.discogData" id="discog-location" />
    </v-sheet>
    <div id="footer-space" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 90%;
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

<script lang="js">

  function formatLiveDate (object, after) {
    for (const property in object) {
          object[property].liveDate = object[property].liveDate.slice(0, -15).replace(/-/g, after)
        }
  }
  function formatReleaseDate (object, after) {
    for (const property in object) {
          object[property].releaseDate = object[property].releaseDate.slice(0, -15).replace(/-/g, after)
        }
  }
  function formatPostTime (object, after) {
    for (const property in object) {
          object[property].date = object[property].date.slice(0, -6).replace(/-/g, after)
        }
  }

export default {
  async asyncData({ app }) {
    try {
      const liveData = await app.flamelink.content.get({
        schemaKey: 'live',
        populate: true,
      })
      const newsData = await app.flamelink.content.get({
        schemaKey: 'news',
        populate: true,
      })
      const discogData = await app.flamelink.content.get({
        schemaKey: 'discog',
        populate: true,
      })
      formatReleaseDate(discogData, '/')
      return { discogData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
