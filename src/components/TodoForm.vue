<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { ref } from 'vue'

const INIT_FORM_TODO = {
  title: '',
  description: '',
  category: ''
}

const inputTodo = ref({ ...INIT_FORM_TODO })

const onSubmit = () => {
  todo.addTodo(inputTodo.value)
  inputTodo.value = INIT_FORM_TODO
}

const todo = useTodosStore()
</script>
<template>
  <form @submit.prevent="onSubmit">
    <label>
      Title
      <input type="text" name="title" id="title" v-model="inputTodo.title" />
    </label>
    <br />
    <label>
      Description
      <input type="text" name="description" id="description" v-model="inputTodo.description" />
    </label>
    <br />
    <label>
      Category
      <input type="text" name="category" id="category" v-model="inputTodo.category" />
    </label>
    <br />
    <button>Add</button>
  </form>
</template>

<style scoped>
form {
  margin: 1rem 0;
}
</style>
