<template>
  <v-card>
    <v-card-title primary-title>
      <div style="width: 100%">
        <h3 class="headline">Chords</h3>
        <div v-if="chords">
          <chord-vue
            v-for="(item, index) in maxChords"
            size="small"
            :key="index"
            :name="item.name"
            :points="item.points"
          />
        </div>
        <v-layout v-else row wrap align-center>
          <v-flex class="text-xs-center">
            <v-progress-circular indeterminate color="primary"/>
          </v-flex>
        </v-layout>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="primary" :to="{name: 'admin.chords'}">Voir plus</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ChordVue from "@/components/Chord";

export default {
  components: {
    ChordVue
  },
  props: {
    chordsRef: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chords: null
    };
  },
  firestore() {
    return {
      chords: this.chordsRef.orderBy("name")
    };
  },
  computed: {
    maxChords() {
      return this.chords.slice(0, 4);
    }
  }
};
</script>

<style>
</style>
