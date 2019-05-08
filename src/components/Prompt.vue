<template>
  <v-dialog persistent v-model="open" max-width="290" dark>
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>

      <v-container>
        <v-layout>
          <v-text-field :label="placeholder" v-model="text"></v-text-field>
        </v-layout>
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="red darken-1" flat @click="cancel">{{cancelText}}</v-btn>

        <v-btn color="green darken-1" flat @click="confirm">{{confirmText}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    cancelText: {
      type: String,
      default: "Cancel"
    },
    confirmText: {
      type: String,
      default: "Confirm"
    }
  },
  data() {
    return {
      open: false,
      text: ""
    };
  },
  methods: {
    toggleDialog() {
      this.open = !this.open;
    },
    cancel() {
      this.$emit("cancel");
      this.open = false;
    },
    confirm() {
      this.$emit("confirm", this.text);
      this.open = false;
    }
  }
};
</script>

<style>
</style>
