<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/home.png" />
    </div>
    <v-sheet color="main">
      <HomeNews :data="this.homeNewsData" id="home-news-location" />
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

const homeNewsTitle = []
const homeNewsSchema = []
function formatDate (object) {
  for (const property in object) {
    object[property].nowDate = new Date()
    object[property].baseDate = new Date().remove({"months": 1})
    object[property].postDate = new Date(object[property].postDate)
    console.log(object[property])

    if (Date.compare(object[property].postDate, object[property].nowDate) == 1 || Date.compare(object[property].postDate, object[property].baseDate) == 1) {
      homeNewsSchema.push(object[property]._fl_meta_.schema)
      homeNewsTitle.push(object[property].title)
    };
  }
};
const homeNewsData = [homeNewsTitle, homeNewsSchema]

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

      formatDate(liveData)
      formatDate(newsData)
      formatDate(discogData)
      console.log(homeNewsData)
      return { homeNewsData }
    } catch (err) {
      console.log(err)
      return { homeNewsData: [] }
    }
  }
};
</script>
