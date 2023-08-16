<script setup lang="ts">
import LoggedInUser from '@/components/LoggedInUser.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <main>
    <section v-if="!auth.token">
      <h3>Uppsss, it seems you have'nt logged in yet!</h3>
      <RouterLink to="/auth/login">
        <button>Login</button>
      </RouterLink>
    </section>
    <section v-else>
      <LoggedInUser />
    </section>
  </main>
</template>
