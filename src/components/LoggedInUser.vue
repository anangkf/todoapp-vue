<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

const auth = useAuthStore()
</script>

<template>
  <h3>logged in</h3>
  <button class="btn" @click="auth.removeToken">Logout</button>

  <TodoForm />

  <TodoList />
</template>

<style>
.btn {
  background-color: firebrick;
  padding: 4px 8px;
  border-radius: 8px;
}
</style>
