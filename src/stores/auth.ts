import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(getCookie('token'))

  const getToken = computed(() => {
    return getCookie('token')
  })
  const setToken = (value: string) => {
    setCookie('token', value)
    token.value = value
  }
  const removeToken = () => {
    removeCookie('token')
    router.push('/auth/login')
  }

  return { token, getToken, setToken, removeToken }
})
