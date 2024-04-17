<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router"
</script>
