<template>
<div class="container">
  <v-sheet color="main">
      <v-sheet class="mv">
        <v-sheet color="main">
          <h6>{{ mv.title }}</h6>
        </v-sheet>
        <div class="mv-wrapper">
          <v-sheet color="main" class="mv" v-html="mv.videoLink" />
        </div>
      </v-sheet>
    </v-sheet>
    <div id="footer-space" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "mv | " + this.mv.title
    };
  },
  data() {
    return {
      mvid: this.$route.params.mvid,
      mvs: null,
      mv: null
    };
  },
  created() {
    this.mvs = this.$store.getters.mv;
    for (let i in this.mvs) {
      if (this.mvs[i]["id"] === this.mvid) {
        this.mv = this.mvs[i];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 56px);
  width: 90%;
  max-width: 600px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  #footer-space {
    height: 40px;
  }
}
.wrapper {
  max-width: 600px;
  margin: auto;
}
.wrapper ::v-deep div {
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 30px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 20px;
  }
  hr {
    margin-bottom: 16px;
    size: 3px;
  }
  p {
    font-size: 0.8rem;
  }
  iframe {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 5px;
  }
  a {
    text-decoration: underline;
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
</style>