<template>
  <AuthWrapper>
    <template #authLogoImage>
      <router-link to="/">
        <Image
          class="mr-3 h-24"
          alt="Pokepedia Logo"
          :src="logoImage" />
      </router-link>
    </template>
    <template #authFormTitle>Change Password</template>
    <template #authFormBody>
      <ForgotPasswordForm />
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
import ForgotPasswordForm from '@views/Auth/ForgotPassword/ForgotPasswordForm.vue';
import AuthWrapper from '@shared/AuthWrapper/AuthWrapper.vue';
import Image from '@shared/Image/Image.vue';

import logoImage from '@assets/images/logo/Pokepedia.png';
</script>
