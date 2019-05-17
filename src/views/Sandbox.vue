<template>
  <v-layout row wrap>
    <v-btn
      :color="!drawer ? 'blue darken-2' : 'red'"
      fab
      dark
      small
      absolute
      top
      right
      @click="drawer = !drawer"
    >
      <v-icon v-if="drawer">keyboard_arrow_right</v-icon>

      <v-icon v-else>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-navigation-drawer fixed clipped app right v-model="drawer" :width="320">
      <v-list dense>
        <span class="grayscalee">
          <chord-vue
            class="grayscale"
            v-for="(item, index) in chords"
            :key="index"
            :name="item.name"
            :points="item.points"
            @click="addChord"
            style="transform: scale(0.8);"
          />
        </span>
      </v-list>
    </v-navigation-drawer>
    <v-flex xs12>
      <v-card class="ma-3 mt-5">
        <items-saved-vue @click="askChangeTab"/>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-layout justify-center wrap row>
        <v-flex xs12>
          <div class="text-xs-center">
            <v-btn @click="player = true" round color="blue darken-4" dark>Jouer</v-btn>
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center">
            <v-text-field
              style="width: 150px; margin: 0 auto"
              type="number"
              label="Vitesse"
              v-model="speed"
            ></v-text-field>
          </div>
        </v-flex>
      </v-layout>
      <!-- <v-btn v-else @click="stopScroll">stop</v-btn> -->
      <v-card class="ma-3 mt-5 py-5 elevation-10">
        <v-btn color="primary" fab absolute top left @click="promptSave" v-if="selected.length > 0">
          <v-icon>save</v-icon>
        </v-btn>
        <v-btn
          color="warning"
          fab
          absolute
          top
          right
          @click="selected = []"
          v-if="selected.length > 0"
        >
          <v-icon>remove_circle</v-icon>
        </v-btn>
        <div class="selected">
          <chord-vue
            class="selected-chord"
            v-for="(item, index) in selected"
            :key="index"
            :name="item.name"
            :points="item.points"
            @click="removeChord(index)"
          />
        </div>
      </v-card>
    </v-flex>
    <prompt-vue title="Sauvegarder votre morceau" ref="prompt" @confirm="saveTabs"></prompt-vue>
    <confirm-vue title="Etes-vous sûr de vouloir changer ?" ref="confirm" @yes="changeTab"></confirm-vue>
    <player-vue v-if="player" :tab="selected" v-model="player" :speed="speed"></player-vue>
  </v-layout>
</template>

<script>
import firebase from "@/services/firebase";
import PromptVue from "@/components/Prompt";
import ConfirmVue from "@/components/Confirm";
import ChordVue from "@/components/Chord";
import ItemsSavedVue from "@/components/Sandbox/ItemsSaved";
import PlayerVue from "@/components/Sandbox/Player";
import { setTimeout, clearTimeout } from "timers";

export default {
  components: {
    ChordVue,
    PromptVue,
    ConfirmVue,
    ItemsSavedVue,
    PlayerVue
  },
  firestore() {
    return {
      chords: firebase.firestore().collection("chords")
    };
  },
  data() {
    return {
      selected: [],
      tmp: null,
      chords: null,
      drawer: true,
      scroll: null,
      player: false,
      speed: 60
    };
  },
  methods: {
    addChord(e) {
      this.selected.push(e);
    },
    removeChord(index) {
      this.selected.splice(index, 1);
    },
    promptSave() {
      this.$refs.prompt.toggleDialog();
    },
    saveTabs(e) {
      const obj = {
        name: e,
        chords: this.selected
      };
      let tabs = localStorage.getItem("ukulele-editor");
      tabs = tabs ? JSON.parse(tabs) : [];
      try {
        tabs.push(obj);
        localStorage.setItem(`ukulele-editor`, JSON.stringify(tabs));
        console.log("saved");
      } catch (err) {
        console.error("can't save");
      }
    },
    askChangeTab(e) {
      console.log(e);
      this.tmp = Object.create(e);
      this.$refs.confirm.toggle();
    },
    changeTab(e) {
      this.selected = this.tmp;
    },
    async autoScroll() {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const pageScroll = () => {
        window.scrollBy(0, 1);
        this.scroll = setTimeout(pageScroll, 175);
      };
      pageScroll();
    },
    stopScroll() {
      clearTimeout(this.scroll);
      this.scroll = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.grayscale {
  filter: grayscale(1);
  cursor: pointer;
  &:hover {
    filter: grayscale(0);
  }
}
.selected-chord {
  cursor: pointer;
}
</style>