<template>
  <div id="app">
    <div class="chords-list">
      <chord
        class="chord"
        v-for="(item, index) in chords"
        :key="index"
        :name="item.name"
        :points="item.points"
        @click="addChord"
      />
    </div>
    <div class="chords-selected">
      <chord
        class="chord"
        v-for="(item, index) in selected"
        :key="index"
        :name="item.name"
        :points="item.points"
        @click="removeChord(index)"
      />
    </div>
  </div>
</template>

<script>
import Chord from "./components/Chord";

export default {
  name: "app",
  components: {
    Chord
  },
  data: () => ({
    chords: [
      {
        name: "C",
        points: [[4, 3]]
      },
      {
        name: "D",
        points: [[1, 2], [2, 2], [3, 2]]
      },
      {
        name: "F",
        points: [[1, 2], [3, 1]]
      },
      {
        name: "G",
        points: [[2, 2], [3, 3], [4, 2]]
      },
      {
        name: "A",
        points: [[1, 2], [2, 1]]
      },
      {
        name: "Dm",
        points: [[1, 2], [2, 2], [3, 1]]
      },
      {
        name: "Em",
        points: [[2, 4], [3, 3], [4, 2]]
      },
      {
        name: "Am",
        points: [[1, 2]]
      },
      {
        name: "CMaj7",
        points: [[4, 2]]
      },
      {
        name: "F9",
        points: [[1, 2], [3, 3]]
      }
    ],
    selected: []
  }),
  methods: {
    addChord(e) {
      this.selected.push(e);
    },
    removeChord(i) {
      this.selected.splice(i, 1);
    }
  }
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
.chord {
  filter: grayscale(1);
  transition: filter 0.2s cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 0.4s ease;
  cursor: pointer;
  transform: scale(0.8);
}
.chord:hover {
  filter: grayscale(0);
}
.chords-list {
  background: #e9e9e9;
  transition: padding 0.2s ease-in;
}
.chords-list:hover {
  /* padding-top: 20px;
  padding-bottom: 20px; */
}
.chords-list:hover .chord {
  /* transform: scale(1); */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
