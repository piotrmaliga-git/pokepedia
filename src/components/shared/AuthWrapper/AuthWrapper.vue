<template>
  <section>
    <div class="h-screen max-w-full bg-auth bg-cover bg-fixed bg-center bg-no-repeat">
      <div class="h-screen max-w-full bg-black/60">
        <div class="flex h-screen w-full flex-col items-center justify-center px-6 py-8 lg:py-0">
          <div class="flex items-center">
            <slot name="authLogoImage"></slot>
          </div>
          <div class="w-full rounded-lg bg-white shadow sm:max-w-lg md:mt-0 xl:p-0">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                <slot name="authFormTitle"></slot>
              </h1>
              <slot name="authFormBody"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
