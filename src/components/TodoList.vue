<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'

const todo = useTodosStore()

todo.getTodos()
todo.todos?.map((todo) => console.log(todo))
</script>
<template>
  <div v-for="item in todo.todos" :key="item.id">
    <p>{{ item.title }}</p>
  </div>
</template>
