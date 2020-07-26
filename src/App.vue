<template>
  <v-app>
    <toolbar></toolbar>
    <v-content>
      <v-container>

        <v-row justify="center">
          <v-col cols="8">
            <flash></flash>
          </v-col>
        </v-row>

        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./views/components/Toolbar";

export default {
  name: 'App',
  components: {
    Toolbar
  },
  data: () => ({
    //
  }),

};
</script>
