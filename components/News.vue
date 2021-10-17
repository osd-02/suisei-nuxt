<template>
  <div>
    <v-card
      v-for="news in newses"
      v-bind:key="news.index"
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
      title: 'news',
    }
  },
  data() {
    return {
      newses: null,
    }
  },
  created() {
    this.newses = this.$store.getters.news
    for (let i in this.newses) {
      if (this.newses[i]['id'] === this.articleid) {
        this.article = this.newses[i]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0;
  border-radius: 16px;
  .data-wrapper {
    .data-title-wrapper {
      border-radius: 16px 16px 0 0;
    }
    .img-wrapper {
      padding: 0 16px 16px 16px;
      img {
        border-radius: 16px;
        width: 100%;
      }
    }
  }
}
</style>
