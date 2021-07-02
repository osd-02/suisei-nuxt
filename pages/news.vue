<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/news.png" />
    </div>
    <v-sheet color="main">
      <News :data="this.newsData" id="news-location" />
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
  #footer-space {
    height: 40px;
  }
}
</style>

<script lang="js">
  function formatPostDate (object, after) {
    for (const property in object) {
          object[property].postDate = object[property].postDate.slice(0, -15).replace(/-/g, after)
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

    formatPostDate (newsData, '/')
      return { newsData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
