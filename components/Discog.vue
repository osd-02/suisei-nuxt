<template>
  <div>
    <v-card
      v-for="discog in discogs"
      v-bind:key="discog.index"
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
        <v-card-text>
          投稿日 : {{ discog.date }}
        </v-card-text>
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
        <v-card-text v-else>
          配信リリースのみ
        </v-card-text>
        <v-card-text v-html="`${discog.body}`" />
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  head() {
    return {
      title: "discog"
    };
  },
  data() {
    return {
      discogs: null,
    };
  },
  created() {
    this.discogs = this.$store.getters.discog;
    for (let i in this.discogs) {
      if (this.discogs[i]["id"] === this.articleid) {
        this.article = this.discogs[i];
      }
    }
  }
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
