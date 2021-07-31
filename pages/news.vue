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
require('date-utils');

const newsData = []
function formatDate (object) {
  for (const property in object) {
    newsData[object[property].order] = object[property]
    object[property].nowDate = new Date()
    object[property].postDate = new Date(object[property].postDate)
    object[property].formatedPostDate = new Date(object[property].postDate).toFormat("YYYY年MM月DD日")

    if (Date.compare(object[property].postDate, object[property].nowDate) == true) {
      delete object[property]
    };
  }
};

export default {
  async asyncData({ app }) {
    try {
      const data = await app.flamelink.content.get({
        schemaKey: 'news',
        populate: true,
      })

      formatDate (data)
      console.log(data)
      return { newsData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
