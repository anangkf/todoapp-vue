<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router/index'
import { useAuthStore } from '@/stores/auth'
import CONST from '@/utils/constant'

const INIT_FORM_LOGIN = {
  username: '',
  password: ''
}

const auth = useAuthStore()

const loginInput = ref({ ...INIT_FORM_LOGIN })

const onSubmit = async () => {
  try {
    const res = await axios.post(`${CONST.BASE_URL_API}/auth/login`, loginInput.value)
    loginInput.value = INIT_FORM_LOGIN
    auth.setToken(res.data.data.token)
    router.push('/')
  } catch (error: any) {
    alert(error.message)
  }
}
</script>

<template>
  <h2>Login</h2>
  <form class="login-form" @submit.prevent="onSubmit">
    <label for="username">
      Username
      <input type="text" name="username" id="username" v-model="loginInput.username" required />
    </label>
    <br />
    <label for="password">
      Password
      <input type="password" name="password" id="password" v-model="loginInput.password" required />
    </label>
    <br />
    <p>
      Belum punya akun?
      <RouterLink to="/auth/register">Daftar</RouterLink>
    </p>
    <button>Login</button>
  </form>
</template>
<style></style>
