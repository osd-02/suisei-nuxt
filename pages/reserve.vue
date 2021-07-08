<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/reserve.png" />
    </div>
    <v-sheet color="main">
      <Form :data="this.items" />
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
require('date-utils');

function formatDate (object) { //取り置きの項目追加関数
  for (const property in object) {
    object[property].nowDate = new Date()
    object[property].postDate = new Date(object[property].postDate)
    object[property].liveDate = new Date(object[property].liveDate)
    object[property].order = object[property].liveDate.getTime()
    console.log(Date.compare(object[property].nowDate, object[property].postDate))

    if (Date.compare(object[property].postDate, object[property].nowDate) == true || Date.compare(object[property].nowDate, object[property].liveDate) == true) {
      delete object[property]
    };
  }
};

const items = []
function addLiveName (object) {
  for (const property in object) {
    if (object[property].reserve == true) {
      items.push(object[property].title)
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
    addLiveName(liveData)
    return { items }
  } catch (err) {
    console.log(err)
    return { data: [] }
  }
}
};
</script>
