<template>
  <h1 v-if="authStatus === 'autenticando'">{{ authStatus}}</h1>
  <router-view v-else/>

</template>

<script>

import useAuth from './modules/auth/composables/useAuth.js'

export default {
  setup() {

    const { authStatus , checkAuthStatus} = useAuth()

    checkAuthStatus()

    return {
      authStatus,
      checkAuthStatus

    }
    
  },
}
</script>
