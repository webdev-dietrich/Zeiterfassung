<template>
  <h1>Hallo {{ userStore.user.username }}</h1>
</template>

<script setup>
import { useUserStore } from '@/stores/users'

const userStore = useUserStore()
</script>
