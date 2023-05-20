<template>
  <section>
    <div class="h-screen max-w-full bg-auth bg-cover bg-fixed bg-center bg-no-repeat">
      <div class="h-screen max-w-full bg-black/60">
        <div class="flex h-screen w-full flex-col items-center justify-center px-6 py-8 lg:py-0">
          <a class="flex items-center">
            <Image
              class="mr-3 h-20"
              alt="Pokepedia Logo"
              src="src/assets/images/logo/Pokepedia.png" />
          </a>
          <div class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SignInForm from '@/components/Forms/SignInForm.vue';
import Image from '../components/shared/Image/Image.vue';
</script>
