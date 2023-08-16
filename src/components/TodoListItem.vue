<script setup lang="ts">
import type { Todo } from '@/stores/todos'
import { useTodosStore } from '@/stores/todos'

defineProps<{
  todo: Todo
}>()

const todoStore = useTodosStore()
</script>
<template>
  <div class="wrapper" :class="{ completed: todo.completed }">
    <div>
      <p>{{ todo.title }}</p>
      <p class="desc">{{ todo.description }}</p>
    </div>
    <div class="btn-wrapper">
      <button
        class="btn"
        :class="{ success: !todo.completed, info: todo.completed }"
        @click="todoStore.editTodo(todo)"
      >
        {{ todo.completed ? 'Undone' : 'Done' }}
      </button>
      <!-- <button class="btn info" @click="todoStore.editTodo(todo)" v-else>Undone</button> -->
      <button class="btn" @click="todoStore.deleteTodo(todo.id)">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 3px 6px;
  margin: 3px 0;
  border-radius: 8px;
  min-width: 38rem;
  transition: ease 1s;
}

.completed p {
  text-decoration: line-through;
}

.wrapper:hover {
  transform: translateX(20px);
}

.desc {
  font-size: small;
}

.success {
  background-color: greenyellow;
}

.info {
  background-color: cornflowerblue;
}

.btn-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
