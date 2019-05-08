<template>
  <div>
    <v-layout wrap justify-center>
      <v-flex xs12 sm6>
        <add-new-chord-vue :chordsRef="ref"/>
      </v-flex>
      <v-flex xs10 sm4 class="mt-2">
        <v-text-field label="Filtrer" solo v-model="filter"></v-text-field>
      </v-flex>
    </v-layout>

    <br>

    <v-layout row wrap>
      <v-flex xs6 sm3 v-for="(item, index) in filteredChord" :key="index">
        <v-card class="text-xs-center">
          <chord-vue :name="item.name" :points="item.points"/>
          <v-card-actions>
            <v-btn center flat color="primary">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import firebase from "@/services/firebase";

import ChordVue from "@/components/Chord";
import AddNewChordVue from "@/components/Admin/AddNewChord";

export default {
  data() {
    return {
      ref: firebase.firestore().collection("chords"),
      chords: null,
      filter: ""
    };
  },
  firestore() {
    return {
      chords: this.ref
    };
  },
  components: {
    ChordVue,
    AddNewChordVue
  },
  computed: {
    filteredChord() {
      return this.filter === ""
        ? this.chords
        : this.chords.filter(o =>
            o.name.toLowerCase().includes(this.filter.toLowerCase())
          );
    }
  }
};
</script>

<style>
</style>
