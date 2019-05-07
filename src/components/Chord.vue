<template>
  <svg height="170" width="150" @click="clicked">
    <text text-anchor="middle" x="75" y="24" font-family="Verdana" font-size="30">{{name}}</text>

    <line class="up" x1="30" x2="120" y1="30" y2="30"></line>
    <line class="line" x1="30" x2="120" y1="60" y2="60"></line>
    <line class="line" x1="30" x2="120" y1="90" y2="90"></line>
    <line class="line" x1="30" x2="120" y1="120" y2="120"></line>
    <line class="line" x1="30" x2="120" y1="150" y2="150"></line>
    <line class="line" x1="30" x2="120" y1="170" y2="170"></line>

    <line class="string" x1="30" x2="30" y1="30" y2="170"></line>
    <line class="string" x1="60" x2="60" y1="30" y2="170"></line>
    <line class="string" x1="90" x2="90" y1="30" y2="170"></line>
    <line class="string" x1="120" x2="120" y1="30" y2="170"></line>

    <circle
      v-for="(item, index) in points"
      :key="index"
      :cx="placeX(item[0])"
      :cy="placeY(item[1])"
      fill="black"
      r="10"
    ></circle>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "C"
    },
    points: {
      type: Array,
      default: () => [[4, 3]]
    }
  },
  methods: {
    placeX: x => parseInt(x) * 30,
    placeY: y => parseInt(y) * 30 + 15,
    clicked() {
      const { name, points } = this;
      this.$emit("click", { name, points });
    }
  }
};
</script>

<style scoped>
.line {
  stroke: rgba(0, 0, 0, 0.431);
  stroke-width: 1;
}
.string {
  stroke: black;
  stroke-width: 2;
}
.up {
  stroke: brown;
  stroke-width: 5;
}
</style>
