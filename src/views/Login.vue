<template>
  <section>
    <div class="h-screen max-w-full bg-login-image bg-cover bg-fixed bg-center bg-no-repeat">
      <div class="h-screen max-w-full bg-black/60">
        <div class="flex h-screen w-full flex-col items-center justify-center px-6 py-8 lg:py-0">
          <a class="flex items-center">
            <img
              src="../assets/images/logo/Pokepedia.png"
              class="mr-3 h-20"
              alt="Pokepedia Logo" />
          </a>
          <div class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SignInForm from '@/components/Forms/SignInForm.vue';
</script>
