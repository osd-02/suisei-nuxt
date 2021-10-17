<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/home.png" />
    </div>
    <v-sheet color="main">
      <HomeNews :data="this.homeNewsData" id="home-news-location" />
      <LatestMv id="latest-mv-location" />
      <Twitter />
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
require('date-utils');

let latestMvData = []
let homeNewsData = [[],[]]
function formatDate (object) {
  for (const property in object) {
    object[property].nowDate = new Date()
    object[property].baseDate = new Date().remove({"months": 1})
    object[property].postDate = new Date(object[property].postDate)

    if (Date.compare(object[property].postDate, object[property].nowDate) == 1 || Date.compare(object[property].postDate, object[property].baseDate) == 1) {
      homeNewsData[1].push(object[property]._fl_meta_.schema)
      homeNewsData[0].push(object[property].title)
    };
  }
};

export default {
  async asyncData({ app }) {
    try {
      const liveDataOrigin = await app.flamelink.content.get({
        schemaKey: 'live',
        populate: true,
      })
      const newsDataOrigin = await app.flamelink.content.get({
        schemaKey: 'news',
        populate: true,
      })
      const discogDataOrigin = await app.flamelink.content.get({
        schemaKey: 'discog',
        populate: true,
      })
      const mvDataOrigin = await app.flamelink.content.get({
        schemaKey: 'mv',
        populate: true,
      })

      homeNewsData = [[],[]]
      formatDate(liveDataOrigin)
      formatDate(newsDataOrigin)
      formatDate(discogDataOrigin)
      formatDate(mvDataOrigin)

      return { homeNewsData }
    } catch (err) {
      console.log(err)
      return { homeNewsData: [] }
    }
  }
};
</script>
