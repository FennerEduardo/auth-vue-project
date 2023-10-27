<template>
  <div class="flex justify-center items-center h-full">
    <form class="w-full max-w-md" @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
        <input v-model="form.username" type="text" id="username" name="username"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
        <span class="text-red-500" v-if="!form.username">Username is required</span>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input v-model="form.email" type="email" id="email" name="email"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
        <span class="text-red-500" v-if="!form.email">Email is required</span>
        <span class="text-red-500" v-else-if="!isValidEmail(form.email)">Invalid email format</span>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input v-model="form.password" type="password" id="password" name="password"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
        <span class="text-red-500" v-if="!form.password">Password is required</span>
      </div>
      <div class="mb-6">
        <label for="password_confirmation" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
        <input v-model="form.password_confirmation" type="password" id="password_confirmation"
          name="password_confirmation"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
        <span class="text-red-500" v-if="form.password_confirmation !== form.password">Passwords do not match</span>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </div>
    </form>
    <Toast :message="toastInfo.message" :type="toastInfo.type" :show="toastInfo.show" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserData } from '@/models/auth'
import apiService from '../services/auth/auth'
import Toast from '@/components/ui/Toast.vue';

const form = ref({
  username: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const toastInfo = ref({
  message: '',
  type: '',
  show: false
})

const showToast = (msg: string, type: string = 'info') => {
  toastInfo.value.message = msg;
  toastInfo.value.type = type;
  toastInfo.value.show = true;
  setTimeout(() => {
    toastInfo.value.message = '';
    toastInfo.value.type = type;
    toastInfo.value.show = false;
  }, 1000)
};


const submitForm = () => {
  if (form.value.password !== form.value.password_confirmation) {
    alert('Passwords do not match')
    return
  }
  const data: UserData = form.value
  apiService
    .register(data)
    .then((response) => {
      (response?.data)
        ? showToast(response.data.message, 'success')
        : showToast(response.response.data.message, 'error');
    })
    .catch((error: any) => {
      console.log(error, error.response)
    })
}

const isValidEmail = (email: string) => {
  const emailPattern = /\S+@\S+\.\S+/
  return emailPattern.test(email)
}

</script>


