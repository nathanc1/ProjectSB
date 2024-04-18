<template>
  <v-app>
    <div>
      <!-- Correct the router-link to use v-bind for the object syntax -->
      <div v-if="$route.name !== 'home'">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </div>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
/* Your styles here */
</style>
