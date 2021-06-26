<template>
  <div>
    <v-card
      v-for="live in data"
      v-bind:key="live.index"
      color="sub"
      class="card"
    >
      <div class="data-wrapper text-body1">
        <v-card-title class="live-title" v-html="live.title" />
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
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['data'],

  computed: {
    date: function () {
      return moment(this.data.liveDate).format('YYYY-MM-DDThh:mm')
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0;
  .data-wrapper {
    .img-wrapper {
      padding: 16px;
      img {
        border-radius: 16px;
      }
    }
  }
}
</style>
