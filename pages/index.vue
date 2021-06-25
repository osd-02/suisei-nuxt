<template>
  <div class="container">
    <v-sheet color="main">
      <div></div>
    </v-sheet>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: { Header },
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 200vh;
  #home-logo {
    margin: 0 auto;
  }
}
</style>
