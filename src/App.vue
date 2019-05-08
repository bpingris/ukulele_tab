<template>
  <v-app>
    <drawer-vue></drawer-vue>

    <v-content app>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import DrawerVue from "@/components/Drawer";

export default {
  components: {
    DrawerVue
  },
  name: "App"
};
</script>

