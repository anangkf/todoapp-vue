<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import CONST from '@/utils/constant'

const INIT_FORM_REGISTER = {
  name: '',
  username: '',
  email: '',
  password: '',
  role: 'user'
}

const registerInput = ref({ ...INIT_FORM_REGISTER })

const onSubmit = async () => {
  try {
    const res = await axios.post(`${CONST.BASE_URL_API}/auth/register`, registerInput.value)
    console.log(res)
    registerInput.value = INIT_FORM_REGISTER
  } catch (error: any) {
    alert(error.message)
  }
}
</script>

<template>
  <h2>Login</h2>
  <form class="login-form" @submit.prevent="onSubmit">
    <label for="name">
      Nama
      <input type="text" name="name" id="name" v-model="registerInput.name" required />
    </label>
    <br />
    <label for="username">
      Username
      <input type="text" name="username" id="username" v-model="registerInput.username" required />
    </label>
    <br />
    <label for="email">
      Email
      <input type="email" name="email" id="email" v-model="registerInput.email" required />
    </label>
    <br />
    <label for="password">
      Password
      <input
        type="password"
        name="password"
        id="password"
        v-model="registerInput.password"
        required
      />
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
