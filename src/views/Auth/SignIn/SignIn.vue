<template>
  <AuthWrapper>
    <template #authLogoImage>
      <Image
        class="mr-3 h-24"
        alt="Pokepedia Logo"
        :src="logoImage" />
    </template>
    <template #authFormTitle>Sign in to your account</template>
    <template #authFormBody>
      <SignInForm />
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignInForm from '@views/Auth/SignIn/SignInForm.vue';
import AuthWrapper from '@shared/AuthWrapper/AuthWrapper.vue';
import Image from '@shared/Image/Image.vue';

import logoImage from '@assets/images/logo/Pokepedia.png';
</script>
