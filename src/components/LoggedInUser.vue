<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <h3>logged in</h3>
  <button @click="auth.removeToken">Logout</button>
</template>
