<template>
  <v-sheet color="main">
    <h3>新着情報</h3>
    <v-btn
      class="btn"
      v-for="(title, index) in data[0]"
      color="sub"
      :key="title.index"
      :href="`/${data[1][index]}`"
    >
      {{ data[1][index] }} : {{ title }}
    </v-btn>
  </v-sheet>
</template>

<script lang="js">
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.btn {
  margin: 10px;
  padding: 10px;
  display: block;
  width: 100%;
  overflow: scroll;
  justify-content: left;
}
</style>