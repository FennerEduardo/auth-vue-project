<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue';

const items = [
  { label: 'login', link: '/login' },
  { label: 'register', link: '/register' },
  { label: 'about', link: '/about' },
];
</script>

<template>
  <NavBar :items="items" />
  <RouterView />
</template>

<style scoped>
</style>
