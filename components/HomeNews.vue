<template>
  <v-sheet color="main">
    <img id="logo" src="../assets/img/update.png" />
    <!-- <v-btn
      class="btn"
      v-for="(title, index) in data[0]"
      color="sub"
      :key="title.index"
      :href="`/${data[1][index]}`"
    >
      {{ data[1][index] }} : {{ title }}
    </v-btn> -->
    <v-card
      v-for="newPost in newPosts"
      v-bind:key="newPost.order"
      color="sub"
      class="m-5 border-none rounded-xl overflow-hidden"
       :to="`/live/${live.id}`"
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-text class="white--text pb-0"> 投稿日 : {{ newPost.date }} </v-card-text>
          <v-card-title class="pt-2 white--text" v-html="newPost.title" />
        </v-sheet>
        <div class="newPost-wrapper">
          <v-sheet color="main" class="newPost" v-html="newPost.videoLink" />
        </div>
      </div>
    </v-card>
  </v-sheet>
</template>

<script lang="js">
export default {
  data() {
    return {
      newPosts: null,
    };
  },
  created() {
    this.newPosts = this.$store.getters.newPosts;
  }
}
</script>

<style lang="scss" scoped>
#logo {
  height: 24px;
  margin: 8px 0;
}
.btn {
  margin: 8px 0;
  width: 100%;
  overflow: scroll;
  justify-content: left;
}
</style>
