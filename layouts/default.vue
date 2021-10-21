<template>
  <div>
    <v-app>
      <v-main>
        <Header />
        <v-sheet color="main">
          <Loading v-show="loading"/>
          <Nuxt v-show="!loading"/>
        </v-sheet>
        <Footer />
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
* {
  font-family: "ヒラギノ丸ゴ Pro W4","ヒラギノ丸ゴ Pro","Hiragino Maru Gothic Pro", 'M PLUS 1p', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
}
</style>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>