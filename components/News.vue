<template>
  <div>
    <v-card
      v-for="news in data"
      v-bind:key="news.index"
      color="sub"
      class="card"
      outlined
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-title class="news-title white--text" v-html="news.title" />
        </v-sheet>
        <v-card-text>
          投稿日 : {{ news.formatedPostDate }}
        </v-card-text>
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
import moment from 'moment'
export default {
  props: ['data'],

  computed: {
    date: function () {
      return moment(this.data.newsDate).format('YYYY-MM-DDThh:mm')
    },
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
