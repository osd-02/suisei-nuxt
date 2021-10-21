<template>
  <v-sheet color="main">
    <img id="logo" src="../assets/img/update.png" />
    <v-card
      v-for="newPost in newPosts"
      v-bind:key="newPost.order"
      color="sub"
      class="mt-4 mb-4 border-none rounded-xl overflow-hidden"
      :to="`/${newPost._fl_meta_.schema}/${newPost.id}`"
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-text class="white--text pb-0 pt-1">
            投稿日 : {{ newPost.date }}
          </v-card-text>
          <v-card-text class="white--text pb-0 pt-1">
            {{ newPost._fl_meta_.schema }}
          </v-card-text>
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
