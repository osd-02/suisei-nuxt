<template>
  <v-sheet color="main">
    <img id="logo" src="../assets/img/latest-mv.png" />
    <v-sheet class="mv" v-for="mv in data" v-bind:key="mv.index">
      <v-sheet color="main">
        <h6>{{ mv.title }}</h6>
      </v-sheet>
      <div class="mv-wrapper">
        <v-sheet color="main" class="mv" v-html="mv.videoLink" />
      </div>
    </v-sheet>
  </v-sheet>
</template>

<style lang="scss" scoped>
#logo {
  height: 24px;
  margin: 8px 0;
}
// .mv {
//   margin: 24px 0;
// }
.mv-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  ::v-deep iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<script lang="js">
export default {
  props: ['data'],
}
</script>
