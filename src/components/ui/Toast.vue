<template>
    <div v-if="show" class="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-md" :class="typeClasses[type]">
        {{ message }}
    </div>
</template>
  
<script setup lang="ts">

const props = defineProps({
    message: String,
    type: String,
    show: Boolean
})

const typeClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
};

</script>