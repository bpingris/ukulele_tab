<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-title class="title">Ukulele Editor</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-toolbar flat class="transparent">
        <v-list class="mt-5">
          <v-list-tile v-for="(item, index) in links" :key="index" :to="{name: item.path}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <v-toolbar app dark clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-toolbar-title class="headline text-uppercase">
        <span>Ukulele</span>
        &nbsp;
        <span class="font-weight-light">Editor</span>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          path: "admin",
          icon: "dashboard",
          title: "Admin"
        },
        {
          path: "sandbox",
          icon: "apps",
          title: "Sandbox"
        }
      ]
    };
  }
};
</script>

<style>
</style>
