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
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs6 sm3 v-for="(item, index) in filteredChord" :key="index">
          <v-card class="text-xs-center">
            <chord-vue color="white" :name="item.name" :points="item.points"/>
            <v-card-actions>
              <div style="margin: 0 auto">
                <v-btn fab dark small color="cyan" @click="zz">
                  <v-icon dark>edit</v-icon>
                </v-btn>
                <v-btn @click="deleteChord(item.name)" fab dark small color="red darken-4">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
  methods: {
    async zz() {
      console.log("aze");
      try {
        const zz = await firebase
          .firestore()
          .collection("test")
          .add({ name: "aze", chords: [[{ a: 1 }], [{ a: 1 }]] });
        console.log(zz);
      } catch (er) {
        console.log(er);
      }
    },
    async deleteChord(name) {
      const res = await this.$confirm(
        `<h3>Voulez-vous supprimer l'accord ${name} ?</h3>`
      );
      if (res) {
        const chord = await this.ref
          .where("name", "==", name)
          .limit(1)
          .get();
        chord.forEach(doc => doc.ref.delete());
      }
    }
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
