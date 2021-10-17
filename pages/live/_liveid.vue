<template>
  <div>
    <v-card
      color="sub"
      class="card"
      outlined
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-title class="live-title white--text" v-html="live.title" />
        </v-sheet>
        <v-card-text> 投稿日 : {{ live.date }} </v-card-text>
        <div
          class="img-wrapper"
          if="live.img"
          v-for="img in live.img"
          v-bind:key="img.index"
        >
          <img :src="img.image[0].url" />
        </div>
        <v-card-text>
          {{ live.place }}
        </v-card-text>
        <v-card-text> ACT : {{ live.act }} </v-card-text>
        <v-card-text>
          {{ live.formatedLiveDate }}<br />
          OPEN / START : {{ live.formatedLiveDateOpen }} /
          {{ live.liveTimeStart }}
        </v-card-text>
        <v-card-text v-if="live.feeDoor">
          ADV / DOOR : ￥{{ live.feeAdv }} / ￥{{ live.feeDoor }}
        </v-card-text>
        <v-card-text v-else> ADV / DOOR : ￥{{ live.feeAdv }} / - </v-card-text>
        <v-card-text v-html="`${live.body}`" />
        <v-card-text v-if="live.reserve">
          取り置き可能！<br />reserveページからご予約ください．
        </v-card-text>
        <v-card-text v-else>
          取り置き不可！<br />企画公式ページなどからご予約ください．
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "live | " + this.live.title
    };
  },
  data() {
    return {
      liveid: this.$route.params.liveid,
      lives: null,
      live: null
    };
  },
  created() {
    this.lives = this.$store.getters.live;
    for (let i in this.lives) {
      if (this.lives[i]["id"] === this.liveid) {
        this.live = this.lives[i];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 600px;
  margin: auto;
}
.wrapper ::v-deep div {
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 30px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 20px;
  }
  hr {
    margin-bottom: 16px;
    size: 3px;
  }
  p {
    font-size: 0.8rem;
  }
  iframe {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 5px;
  }
  a {
    text-decoration: underline;
  }
}
</style>
