<template>
  <v-app>
    <v-navigation-drawer app permanent color="#fff">
      <!-- Drawer content -->
      <v-list>
        <v-list-item :to="{ name: 'home' }" router exact>
          <v-list-item-content>
            <!--TO FIX-->
            <v-icon>fas fa-house</v-icon>

            <v-list-item-title class="text-center">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main-content">
      <!-- Main content -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
.main-content {
  background-color: #f4f7fe;
}
/* Additional styles */
</style>
