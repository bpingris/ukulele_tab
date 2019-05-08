<template>
  <v-layout v-if="items" wrap>
    <v-flex xs4 sm3 md2 v-for="(item, index) in items" :key="index">
      <v-card class="elevation-5" @click="cardClicked(item)" style="cursor: pointer">
        <v-img src="https://picsum.photos/200" aspect-ratio="2.75"></v-img>
        <v-card-title class>
          <div class="text-xs-center display-1">{{item.name}}</div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: null
    };
  },
  mounted() {
    const tmp = localStorage.getItem("ukulele-editor");
    if (tmp) {
      this.items = JSON.parse(tmp);
      console.log(this.items);
    }
  },
  methods: {
    cardClicked(item) {
      this.$emit("click", item.chords);
    }
  }
};
</script>

<style>
</style>
