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

<script>
export default {
  async asyncData({ app }) {
    try {
      const data = await app.flamelink.content.get({
        schemaKey: 'live', 
        populate: true,
      })
      console.log({ data })
      return { data }
    } catch (err) {
      console.log(err)
      return { data: [] }
    }
  },
}
</script>
