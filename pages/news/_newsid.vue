<template>
  <div>
    <v-card
      color="sub"
      class="card"
      outlined
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-title class="news-title white--text" v-html="news.title" />
        </v-sheet>
        <v-card-text> 投稿日 : {{ news.date }} </v-card-text>
        <div
          class="img-wrapper"
          if="news.img"
          v-for="img in news.img"
          v-bind:key="img.index"
        >
          <img :src="img.image[0].url" />
        </div>
        <v-card-text v-html="`${news.body}`" />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "news | " + this.news.title
    };
  },
  data() {
    return {
      newsid: this.$route.params.newsid,
      newes: null,
      news: null
    };
  },
  created() {
    this.newes = this.$store.getters.news;
    for (let i in this.newes) {
      if (this.newes[i]["id"] === this.newsid) {
        this.news = this.newes[i];
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
