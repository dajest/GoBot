<template>
  <v-navigation-drawer permanent class="drawer">
    <div class="title-block">
      GO BOT
    </div>

    <div class="navigation-block">
      <router-link to="/" class="nav-link">
        <div class="dashboard navigation-block-link">
          <div class="link-picture-block">
            <img src="../assets/dashboard.svg" alt="Dashboard">
          </div>
          <h3 class="link-descriptor">Dashboard</h3>
        </div>
      </router-link>  

      <router-link to="/runbot" class="nav-link">
        <div class="runbot navigation-block-link">
          <div class="link-picture-block">
            <img src="../assets/play_arrow.svg" alt="Dashboard">
          </div>
          <h3 class="link-descriptor">Run Bot</h3>
        </div>
      </router-link>

      <router-link to="/configure" class="nav-link">
        <div class="confugure navigation-block-link">
          <div class="link-picture-block">
            <img src="../assets/settings.svg" alt="Dashboard">
          </div>
          <h3 class="link-descriptor">Confugure bot</h3>
        </div>
      </router-link>
      
      <router-link to="/statistics" class="nav-link">
        <div class="statistics navigation-block-link">
          <div class="link-picture-block">
            <img src="../assets/timeline.svg" alt="Dashboard">
          </div>
          <h3 class="link-descriptor">Statistics</h3>
        </div>           
      </router-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavigationDrawer',

    data: () => ({

    }),
  }
</script>
