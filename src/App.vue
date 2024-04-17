<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'information' }">Information</router-link>
  </div>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router"
</script>
