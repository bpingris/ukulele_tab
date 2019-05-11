<template>
  <div class="progress-bar" :style="styles"></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    time: {
      type: Number
    }
  },
  data() {
    return {
      progress: 0
    };
  },
  mounted() {
    const { time } = this;
    let rafID = null;
    let start = null;
    let p;
    let step = ts => {
      if (!start) start = ts;
      p = ts - start;
      this.progress = (Math.min(p, time) / time) * 100;
      if (p < time) rafID = requestAnimationFrame(step);
    };
    rafID = requestAnimationFrame(step);
  },
  computed: {
    styles() {
      return { width: `${this.progress}%` };
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  height: 10px;
  background: #0d47a1;
}
</style>
