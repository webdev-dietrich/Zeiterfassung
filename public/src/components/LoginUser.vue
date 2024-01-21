<template>
    <div class="login_element">
      <form @submit.prevent="handleLogin">
        <label for="username">Username</label>
        <input v-model="credentials.username" type="text" name="username" id="username">
  
        <label for="password">Password</label>
        <input v-model="credentials.password" type="password" name="password" id="password">
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/stores/users';

const userStore = useUserStore();

const credentials = reactive({
    username: '',
    password: '',
})

const handleLogin = () => { 
    userStore.loginUser(credentials.username, credentials.password)
}
</script>