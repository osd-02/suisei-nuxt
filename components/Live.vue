<template>
  <div>
    <v-card
      v-for="live in data"
      v-bind:key="live.index"
      color="sub"
      class="card"
      outlined
    >
      <div class="data-wrapper">
        <v-sheet class="data-title-wrapper" color="success">
          <v-card-title class="live-title white--text" v-html="live.title" />
        </v-sheet>
        <v-card-text> 投稿日 : {{ live.postDate }} </v-card-text>
        <div
          class="img-wrapper"
          if="live.img"
          v-for="img in live.img"
          v-bind:key="img.index"
        >
          <img :src="img.image[0].url" />
        </div>
        <v-card-text>
          {{ live.place }}
        </v-card-text>
        <v-card-text> ACT : {{ live.act }} </v-card-text>
        <v-card-text>
          {{ live.liveDate }}<br />
          OPEN / START : {{ live.liveTimeOpen }} / {{ live.liveTimeStart }}
        </v-card-text>
        <v-card-text v-if="live.feeDoor">
          ADV / DOOR : ￥{{ live.feeAdv }} / ￥{{ live.feeDoor }}
        </v-card-text>
        <v-card-text v-else> ADV / DOOR : ￥{{ live.feeAdv }} / - </v-card-text>
        <v-card-text v-html="`${live.body}`" />
        <v-card-text v-if="live.reserve">
          <Form />
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0;
  border-radius: 16px;
  .data-wrapper {
    .data-title-wrapper {
      border-radius: 16px 16px 0 0;
    }
    .img-wrapper {
      padding: 0 16px 16px 16px;
      img {
        border-radius: 16px;
      }
    }
  }
}
</style>
