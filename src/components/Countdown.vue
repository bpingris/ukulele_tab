<template>
  <div class="ct-container">
    <span class="ct-text">{{ct}}</span>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      ct: 3
    };
  },
  mounted() {
    let it = setInterval(() => {
      this.ct--;
      if (this.ct === 0) {
        clearInterval(it);
        this.$emit("over");
      }
    }, 1000);
  }
};
</script>

<style scoped lang="scss">
.ct-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  .ct-text {
    font-size: 25em;
    color: white;
  }
}
</style>
