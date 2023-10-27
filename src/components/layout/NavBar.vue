<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div>
          <router-link to="/" class="text-white text-xl font-bold">Home</router-link>
        </div>
        <div class="hidden md:flex">
          <ul class="flex space-x-4">
            <li v-for="(item, index) in items" :key="index">
              <router-link :to="item.link" class="text-white">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
        <div class="flex md:hidden">
          <!-- Mobile menu button here -->
          click
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Navbar',
    props: {
      items: {
        type: Array as () => { link: string; label: string }[],
        required: true,
      },
    },
  });
  </script>
  