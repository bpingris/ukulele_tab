<template>
  <v-dialog v-model="value" fullscreen hide-overlay transition="dialog-bottom-transition">
    <countdown-vue v-if="ct" @over="hideAndLaunch"></countdown-vue>
    <v-card>
      <v-toolbar dark>
        <v-btn icon dark @click="close">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Player</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click="close">Fermer</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout justify-center class="mt-5 mb-5">
        <v-btn round color="grey darken-4" dark @click="reset">Rejouer</v-btn>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm8>
          <div class="text-xs-center">
            <chord-vue :points="tab[current].points" :name="tab[current].name" size="xl"></chord-vue>
          </div>
        </v-flex>
        <v-flex xs12 sm4 v-if="current + 1 < tab.length">
          <div class="display-1 text-xs-center bold">NEXT</div>
          <div style="width: 60%; margin: 0 auto; background: #E0E0E0">
            <progress-bar-vue v-if="!ct" :key="current" type="linear" :time="duration"></progress-bar-vue>
          </div>
          <div class="text-xs-center" style="opacity: 0.6">
            <chord-vue size="small" :points="tab[current+1].points" :name="tab[current+1].name"></chord-vue>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import ChordVue from "@/components/Chord";
import ProgressBarVue from "@/components/ProgressBar";
import CountdownVue from "@/components/Countdown";

export default {
  components: {
    ChordVue,
    ProgressBarVue,
    CountdownVue
  },
  props: {
    value: {
      type: Boolean
    },
    tab: {
      type: Array
    },
    speed: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      current: 0,
      timer: null,
      progress: 0,
      duration: (this.speed * 1000) / 60,
      ct: true
    };
  },
  methods: {
    close() {
      this.$emit("input", false);
      clearInterval(this.timer);
      this.current = 0;
    },
    launch() {
      this.timer = setInterval(() => {
        this.current += 1;
        if (this.current === this.tab.length - 1) {
          clearInterval(this.timer);
        }
      }, this.duration);
    },
    reset() {
      this.ct = true;
      this.current = 0;
      if (this.timer) {
        clearInterval(this.timer);
      }
      //   this.launch();
    },
    hideAndLaunch() {
      this.ct = false;
      this.launch();
    }
  }
};
</script>

<style>
</style>
