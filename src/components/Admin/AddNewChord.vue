<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Ajouter</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Nouvel accord</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Nom de l'accord *" required v-model="chordName"/>
              </v-flex>

              <v-flex xs12 v-for="(item, index) in chordFingers.length" :key="index">
                <v-layout wrap>
                  <v-flex xs12 sm5>
                    <v-text-field
                      v-model="chordFingers[index].string"
                      label="Corde *"
                      type="number"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm5>
                    <v-text-field
                      v-model="chordFingers[index].case"
                      label="Case *"
                      type="number"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm2 class="text-xs-right" v-if="index > 0">
                    <v-btn fab color="error" small @click="removeFinger(index)">
                      <v-icon dark>remove</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 class="text-xs-center">
                <v-btn fab color="primary" small @click="addFinger">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*Champs obligatoire</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Fermer</v-btn>
          <v-btn :loading="loading" color="blue darken-1" flat @click="saveChord">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    chordsRef: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      loading: false,
      chordName: "",
      chordFingers: [
        {
          string: 0,
          case: 0
        }
      ]
    };
  },
  methods: {
    addFinger() {
      this.chordFingers.push({ string: 0, case: 0 });
    },
    removeFinger(index) {
      this.chordFingers.splice(index, 1);
    },
    closeDialog() {
      this.dialog = false;
      this.chordName = "";
      this.chordFingers = [{ string: 0, case: 0 }];
    },
    async saveChord() {
      this.loading = true;
      const points = this.chordFingers.map(o => ({
        case: parseInt(o.case),
        string: parseInt(o.string)
      }));
      try {
        const res = this.chordsRef.add({
          name: this.chordName,
          points
        });
        this.$emit("added", true);
      } catch (err) {
        this.$emit("added", false);
      }
      this.loading = false;
    }
  }
};
</script>

<style>
</style>
