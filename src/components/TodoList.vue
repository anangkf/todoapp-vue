<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import TodoListItem from '@/components/TodoListItem.vue'

const todo = useTodosStore()

todo.getTodos()
</script>
<template>
  <div v-for="item in todo.todos" :key="item.id">
    <TodoListItem :todo="item" />
  </div>
</template>
