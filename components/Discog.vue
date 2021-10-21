<template>
  <div>
    <v-card
      v-for="discog in discogs"
      v-bind:key="discog.order"
      color="sub"
      
      class="mt-4 mb-4 border-none rounded-xl overflow-hidden"
      :to="`/discog/${discog.id}`"
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-text class="white--text pb-0"> 投稿日 : {{ discog.date }} </v-card-text>
          <v-card-title class="pt-2 white--text" v-html="discog.title" />
        </v-sheet>
        <div
          class="img-wrapper"
          if=discog.img
          v-for="img in discog.img"
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
      title: 'discog',
    }
  },
  data() {
    return {
      discogs: null,
    }
  },
  created() {
    this.discogs = this.$store.getters.discog;
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
