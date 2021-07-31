<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/mv.png" />
    </div>
    <v-sheet color="main">
      <v-sheet class="mv" v-for="mv in mvData" v-bind:key="mv.index">
        <v-sheet color="main">
          <h6>{{ mv.title }}</h6>
        </v-sheet>
        <div class="mv-wrapper">
          <v-sheet color="main" class="mv" v-html="mv.videoLink" />
        </div>
      </v-sheet>
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
  .mv {
    margin: 24px 0;
  }
  .mv-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    ::v-deep iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  #footer-space {
    height: 40px;
  }
}
</style>

<script lang="js">
require('date-utils');

const mvData = []
function formatDate (object) {
  for (const property in object) {
    mvData[object[property].order] = object[property]
    object[property].nowDate = new Date()
    object[property].postDate = new Date(object[property].postDate)
    object[property].liveDate = new Date(object[property].liveDate)
    object[property].formatedPostDate = new Date(object[property].postDate).toFormat("YYYY年MM月DD日")
    object[property].formatedLiveDate = new Date(object[property].liveDate).toFormat("YYYY年MM月DD日")
    object[property].formatedLiveDateOpen = new Date(object[property].liveDate).toFormat("HH24:MI")

    if (Date.compare(object[property].postDate, object[property].nowDate) == true) {
      delete object[property]
    };
  }
};

export default {
  async asyncData({ app }) {
    try {
      const data = await app.flamelink.content.get({
        schemaKey: 'mv',
        populate: true,
      })
      formatDate(data)
      return { mvData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
