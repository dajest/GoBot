<template>
  <v-app >
    <v-main class="main-side">
      <navigation-drawer></navigation-drawer>
      <div class="main-side-content-wrapper">
        <header-block></header-block>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>

import NavigationDrawer from './components/NavigationDrawer.vue';
import HeaderBlock from './components/HeaderBlock.vue'
export default {
  name: 'App',
  components: {
    NavigationDrawer,
    HeaderBlock
  },

  data: () => ({
    //
  }),
  
};
</script>

