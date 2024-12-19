<script setup>
  import { RouterView } from "vue-router";
  console.log(createWebHistory(import.meta.env.BASE_URL));
</script>

<template>
  <RouterView />
</template>
