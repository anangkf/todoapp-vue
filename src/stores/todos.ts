import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import CONST from '@/utils/constant'
import { getCookie } from 'typescript-cookie'
import generateId from '@/utils/generateId'

export interface Todo {
  id: number
  title: string
  createdAt: string
  completed: boolean
  description: string
}

type TodoFromAPI = {
  data: {
    status: boolean
    data: Todo[]
  }
}

type TodoBody = {
  title: string
  description: string
  category: string
}

type GetTodosType = () => Promise<Todo[]>

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[] | undefined>([])

  const getTodos: GetTodosType = async () => {
    try {
      const res: TodoFromAPI = await axios.get(`${CONST.BASE_URL_API}/api/todo`, {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`
        }
      })
      todos.value = res.data.data
      return res.data.data
    } catch (error: any) {
      alert(error.response.data.error)
      throw error
    }
  }

  const addTodo = async (data: TodoBody) => {
    try {
      await axios.post(`${CONST.BASE_URL_API}/api/todo`, data, {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`
        }
      })
      todos.value?.push({
        id: generateId(todos.value),
        ...data,
        createdAt: new Date().toISOString(),
        completed: false
      })
    } catch (error: any) {
      alert(error.response.data.error)
      throw error
    }
  }

  const editTodo = async (data: Todo) => {
    try {
      const { id, ...editedTodo } = data
      const res = await axios.put(
        `${CONST.BASE_URL_API}/api/todo/${id}`,
        { ...editedTodo, completed: !editedTodo.completed },
        {
          headers: {
            Authorization: `Bearer ${getCookie('token')}`
          }
        }
      )
      const editedIndex = todos.value?.findIndex((todo) => todo.id === id) as number

      todos.value?.splice(editedIndex, 1, { ...todos.value[editedIndex], ...res.data.data })
    } catch (error: any) {
      alert(error.response.data.error)
      throw error
    }
  }

  return { todos, getTodos, addTodo, editTodo }
})
