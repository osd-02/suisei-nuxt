<template>
  <div>
    <v-card
      v-for="live in lives"
      v-bind:key="live.order"
      color="sub"
      class="mt-4 mb-4 border-none rounded-xl overflow-hidden"
      :to="`/live/${live.id}`"
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-text class="white--text pb-0"> 投稿日 : {{ live.date }} </v-card-text>
          <v-card-title class="pt-2 white--text" v-html="live.title" />
        </v-sheet>
        <div
          class="img-wrapper"
          if=live.img
          v-for="img in live.img"
          v-bind:key="img.index"
        >
          <img :src="img.image[0].url" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="js">
export default {
  head() {
    return {
      title: "live"
    };
  },
  data() {
    return {
      lives: null,
    };
  },
  created() {
    this.lives = this.$store.getters.live;
  }
}
</script>