<template>
  <AuthWrapper>
    Sign in to your account
    <SignInForm />
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignInForm from '@views/SignIn/SignInForm.vue'
import AuthWrapper from '@shared/AuthWrapper/AuthWrapper.vue'
</script>
