<template>
  <v-dialog persistent v-model="open" max-width="290" dark>
    <v-card>
      <v-card-title class="headline text-xs-center">{{title}}</v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="red darken-1" flat @click="no">{{noText}}</v-btn>

        <v-btn color="green darken-1" flat @click="yes">{{yesText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    yesText: {
      type: String,
      default: "Yes"
    },
    noText: {
      type: String,
      default: "No"
    },
    title: {
      type: String,
      default: "Title"
    }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    no() {
      this.$emit("no");
      this.open = false;
    },
    yes() {
      this.$emit("yes");
      this.open = false;
    }
  }
};
</script>

<style>
</style>
