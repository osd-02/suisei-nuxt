<template>
  <div class="container">
    <div id="logo-wrapper">
      <img id="home-logo" src="../assets/img/mv.png" />
    </div>
    <v-card
      v-for="mv in mvs"
      v-bind:key="mv.order"
      color="sub"
      class="m-5 border-none rounded-xl overflow-hidden"
      :to="`/mv/${mv.id}`"
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-text class="white--text pb-0"> 投稿日 : {{ mv.date }} </v-card-text>
          <v-card-title class="pt-2 white--text" v-html="mv.title" />
        </v-sheet>
        <div class="mv-wrapper">
          <v-sheet color="main" class="mv" v-html="mv.videoLink" />
        </div>
      </div>
    </v-card>
    <div id="footer-space" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 90%;
  max-width: 600px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
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
  .mv {
    margin: 24px 0;
  }
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
  #footer-space {
    height: 40px;
  }
}
</style>

<script lang="js">
export default {
  head() {
    return {
      title: "mv"
    };
  },
  data() {
    return {
      mvs: null,
    };
  },
  created() {
    this.mvs = this.$store.getters.mv;
  }
}
</script>
