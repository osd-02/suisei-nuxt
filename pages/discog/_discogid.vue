<template>
  <div class="container">
    <v-card
      color="sub"
      class="card border-none rounded-xl overflow-hidden"
      outlined
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-title
            class="discog-title white--text"
            v-html="discog.title"
          />
        </v-sheet>
        <v-card-text> 投稿日 : {{ discog.date }} </v-card-text>
        <div
          class="img-wrapper"
          if="discog.img"
          v-for="img in discog.img"
          v-bind:key="img.index"
        >
          <img :src="img.image[0].url" />
        </div>
        <v-card-text>
          リリース日 : {{ discog.formatedReleaseDate }}
        </v-card-text>
        <v-card-text v-if="discog.price">
          価格 : ￥{{ discog.price }}
        </v-card-text>
        <v-card-text v-else> 配信リリースのみ </v-card-text>
        <v-card-text v-html="`${discog.body}`" />
      </div>
    </v-card>
  <div id="footer-space" />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "discography | " + this.discog.title
    };
  },
  data() {
    return {
      discogid: this.$route.params.discogid,
      discogs: null,
      discog: null
    };
  },
  created() {
    this.discogs = this.$store.getters.discog;
    for (let i in this.discogs) {
      if (this.discogs[i]["id"] === this.discogid) {
        this.discog = this.discogs[i];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 56px);
  width: 90%;
  max-width: 600px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  #footer-space {
    height: 40px;
  }
}
</style>