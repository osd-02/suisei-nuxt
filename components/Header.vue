<template>
  <div>
    <Drawer v-model="drawer" />
    <v-sheet color="main" id="home-logo-wrapper">
      <v-app-bar-nav-icon
        id="drawer-icon"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div id="logo-wrapper">
        <NuxtLink to="/">
          <img id="home-logo" src="../assets/img/home-logo.gif" />
        </NuxtLink>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped>
#home-logo-wrapper {
  height: 56px;
  width: 100%;
  padding-top: 10px;
  #drawer-icon {
    margin: 10px 0;
    position: fixed;
  }
  #logo-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 56px;
    #home-logo {
      height: 30px;
    }
  }
}
</style>
