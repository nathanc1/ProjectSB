<template>
  <v-app>
    <v-container>
      <v-btn>Click me</v-btn>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue"

const headers = ref([{ text: "Name", value: "name" }])

const items = ref([{ name: "Test Item" }])
</script>
