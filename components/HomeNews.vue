<template>
  <v-sheet color="main">
    <img id="logo" src="../assets/img/update.png" />
    <v-btn
      class="btn"
      v-for="(title, index) in data[0]"
      color="sub"
      :key="title.index"
      :href="`/${data[1][index]}`"
    >
      {{ data[1][index] }} : {{ title }}
    </v-btn>
  </v-sheet>
</template>

<script lang="js">
export default {
  props: ['data'],
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
