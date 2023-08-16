<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import CONST from '@/utils/constant'
import router from '@/router'

const INIT_FORM_REGISTER = {
  name: '',
  username: '',
  email: '',
  password: ''
}

const registerInput = ref({ ...INIT_FORM_REGISTER })

const onSubmit = async () => {
  try {
    const res = await axios.post(`${CONST.BASE_URL_API}/auth/register`, registerInput.value)
    registerInput.value = INIT_FORM_REGISTER
    alert(`Registration for ${res.data.data.name} success!`)
    router.push('/auth/login')
  } catch (error: any) {
    alert(error.message)
  }
}
</script>

<template>
  <h2>Register</h2>
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
      Sudah punya akun?
      <RouterLink to="/auth/login">Login</RouterLink>
    </p>
    <button>Register</button>
  </form>
</template>
<style></style>
