<template>
  <v-layout row wrap>
    <v-flex xs12>
      <chords-preview-vue :chordsRef="ref"/>
    </v-flex>
    <v-flex xs12 class="mt-5">
      <tabs-preview-vue :chordsRef="ref"/>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "@/services/firebase";

import ChordsPreviewVue from "@/components/Admin/ChordsPreview";
import TabsPreviewVue from "@/components/Admin/TabsPreview";
export default {
  components: {
    ChordsPreviewVue,
    TabsPreviewVue
  },
  data() {
    return {
      ref: firebase.firestore().collection("chords")
    };
  }
};
</script>

<style>
</style>
