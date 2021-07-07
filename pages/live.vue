<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/live.png" />
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

function formatDate (object) {
  for (const property in object) {
    object[property].nowDate = new Date()
    object[property].postDate = new Date(object[property].postDate)
    object[property].liveDate = new Date(object[property].liveDate)
    object[property].order = object[property].liveDate.getTime()
    object[property].formatedPostDate = new Date(object[property].postDate).toFormat("YYYY年MM月DD日")
    object[property].formatedLiveDate = new Date(object[property].liveDate).toFormat("YYYY年MM月DD日")
    object[property].formatedLiveDateOpen = new Date(object[property].liveDate).toFormat("HH24:MI")
    console.log(Date.compare(object[property].nowDate, object[property].postDate))

    if (Date.compare(object[property].postDate, object[property].nowDate) == true) {
      delete object[property]
    };
  }
};

export default {
  async asyncData({ app }) {
    try {
      const liveData = await app.flamelink.content.get({
        schemaKey: 'live',
        populate: true,
      })

      formatDate(liveData)
      console.log({ liveData })
      return { liveData }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  }
};
</script>
