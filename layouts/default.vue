<template>
  <div>
    <v-app>
      <v-main>
        <Header />
        <v-sheet color="main">
          <Nuxt />
        </v-sheet>
        <Footer />
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
}
</style>