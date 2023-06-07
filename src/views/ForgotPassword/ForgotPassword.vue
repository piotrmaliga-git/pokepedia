<template>
  <AuthWrapper>
    <template #authLogoImage>
      <Image
        class="mr-3 h-24"
        alt="Pokepedia Logo"
        :src="logoImage" />
    </template>
    <template #authFormTitle>Change Password</template>
    <template #authFormBody>
      <ForgotPasswordForm />
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
import AuthWrapper from '@shared/AuthWrapper/AuthWrapper.vue';
import ForgotPasswordForm from '@views/ForgotPassword/ForgotPasswordForm.vue';

import Image from '@shared/Image/Image.vue';
import logoImage from '@assets/images/logo/Pokepedia.png';
</script>
