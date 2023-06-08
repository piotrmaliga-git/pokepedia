<template>
  <AuthWrapper>
    <template #authLogoImage>
      <Image
        class="mr-3 h-24"
        alt="Pokepedia Logo"
        :src="logoImage" />
    </template>
    <template #authFormTitle>Create and account</template>
    <template #authFormBody>
      <SignUpForm />
    </template>
  </AuthWrapper>
</template>

<script setup lang="ts">
import SignUpForm from '@views/SignUp/SignUpForm.vue';
import AuthWrapper from '@shared/AuthWrapper/AuthWrapper.vue';
import Image from '@shared/Image/Image.vue';

import logoImage from '@assets/images/logo/Pokepedia.png';
</script>
