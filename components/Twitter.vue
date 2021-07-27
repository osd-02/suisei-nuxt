<template>
  <v-sheet class="main">
    <img id="logo" src="../assets/img/sns.png" />
    <Timeline
      :id="user_id"
      sourceType="profile"
      data-chrome="nofooter noborders transparent"
      :options="{ height: twitterHeight }"
    />
  </v-sheet>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
  components: {
    Timeline,
  },
  data: function () {
    return {
      user_id: 'suiseinekko',
      twitterHeight: '600',
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  margin: 16px 0;
  #logo {
    height: 24px;
    margin: 8px 0;
  }
}
</style>
