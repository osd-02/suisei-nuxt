<template>
  <div>
   <v-card
      v-for="news in newses"
      v-bind:key="news.order"
      color="sub"
      class="mt-4 mb-4 border-none rounded-xl overflow-hidden"
      :to="`/news/${news.id}`"
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-text class="white--text pb-0"> 投稿日 : {{ news.date }} </v-card-text>
          <v-card-title class="pt-2 white--text" v-html="news.title" />
        </v-sheet>
        <div
          class="img-wrapper"
          if=news.img
          v-for="img in news.img"
          v-bind:key="img.index"
        >
          <img :src="img.image[0].url" />
        </div>
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
  },
}
</script>