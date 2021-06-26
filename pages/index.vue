<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/home.png" />
    </div>
    <v-sheet color="main">
      <v-card
        v-for="live in liveData"
        v-bind:key="live.index"
        color="sub"
        class="card"
      >
        <div class="data-wrapper text-body1">
          <v-card-title class="live-title" v-html="live.title" />
          <div class="img-wrapper">
            <img :src="live.img[0].image[0].url" />
          </div>
          <v-card-text>
            {{ live.postDate }}
            {{ live.postTime }}
            {{ live.place }}
            {{ live.act }}
            {{ live.liveDate }}
            {{ live.liveTimeOpen }}
            {{ live.liveTimeStart }}
            {{ live.feeAdv }}
            {{ live.feeDoor }}
          </v-card-text>
          <v-card-text v-html="`${live.body}`" />
        </div>
      </v-card>
    </v-sheet>
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
  .card {
    margin: 20px 0;
    // .data-wrapper {

    // }
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
