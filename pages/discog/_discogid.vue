<template>
  <div>
    <v-card
      color="sub"
      class="card"
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
