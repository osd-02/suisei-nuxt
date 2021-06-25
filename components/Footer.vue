<template>
  <div id="footer-wrapper">
    <v-footer
      class="text-center"
      elevation="5"
      color="sub"
      absolute
      id="footer"
    >
      <v-card color="sub" width="100%" class="text-center" flat>
        <v-card-text id="footer-text"> ©︎suisei all rights reserved </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
#footer-wrapper {
  bottom: 0;
  #footer {
    text-align: center;
    font-size: 5px;
    #footer-text {
        padding: 2px;
    }
  }
}
</style>
