<template>
  <div>
    <Drawer v-model="drawer"/>
    <div id="home-logo-wrapper">
      <v-app-bar-nav-icon
        id="drawer-icon"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <img id="home-logo" src="../assets/img/home-logo.gif" />
    </div>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Live</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Discography</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>News</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
  position: fixed;
  display: flex;
  height: 56px;
  width: 100%;
  #drawer-icon {
    margin: 10px 0;
  }
  #home-logo {
    padding: 13px 0;
    margin: 0 auto;
  }
}
</style>
