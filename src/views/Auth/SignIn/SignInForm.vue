<template>
  <form class="space-y-4 md:space-y-6">
    <div>
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        v-model="signInForm.email"
        type="email"
        name="email"
        id="email"
        placeholder="mail@example.com"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm" />
      <p
        v-for="error in v$.$errors"
        :key="error.$uid"
        class="mt-2 text-sm text-red-600 dark:text-red-500">
        {{ error.$property === 'email' ? error.$message : '' }}
      </p>
    </div>
    <div>
      <label
        for="password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        v-model="signInForm.password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm" />
      <p
        v-for="error in v$.$errors"
        :key="error.$uid"
        class="mt-2 text-sm text-red-600 dark:text-red-500">
        {{ error.$property === 'password' ? error.$message : '' }}
      </p>
    </div>
    <div class="inline-flex w-full items-center justify-center">
      <hr class="my-4 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
      <span
        class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-400"
        >or</span
      >
    </div>
    <div class="flex items-center justify-between">
      <button
        @click="signInUserUsingGoogle"
        type="button"
        class="mb-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
        <Icon
          class="-ml-1 mr-2"
          icon="logos:google-icon"
          width="20"
          height="20" />
        Sign in with Google
      </button>
      <button
        @click="signInUserUsingFacebook"
        type="button"
        class="mb-2 ml-4 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
        <Icon
          class="-ml-1 mr-2"
          icon="logos:facebook"
          width="20"
          height="20" />
        Sign in with Facebook
      </button>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-start">
        <div class="flex h-5 items-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-600 dark:border-gray-600 dark:bg-gray-700" />
        </div>
        <div class="ml-3 text-sm">
          <label
            for="remember"
            class="text-gray-500 dark:text-gray-300"
            >Remember me</label
          >
        </div>
      </div>
      <router-link
        to="/forgotpassword"
        class="text-sm font-medium text-red-600 hover:underline">
        Forgot password?
      </router-link>
    </div>
    <button
      @click="validateSignInForm"
      class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700">
      Sign in
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Don't have an account yet?
      <router-link
        to="/signup"
        class="font-medium text-red-600 hover:underline"
        >Sign up</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';

const signInForm = reactive({
  email: '',
  password: '',
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const router = useRouter();
const auth = getAuth();
const v$ = useVuelidate(rules, signInForm);

const validateSignInForm = async (): Promise<void> => {
  const result = await v$.value.$validate();

  // if (result) {
  //   alert('success, form submitted!');
  // } else {
  //   alert('error, form not submitted!');
  // }
};

const signInUser = (): void => {
  signInWithEmailAndPassword(auth, signInForm.email, signInForm.password)
    .then(result => {
      console.log('Successfully registered!');
      console.log(auth.currentUser);

      router.push('/');
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInUserUsingGoogle = (): void => {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log('Successfully registered using Google!');
      console.log(auth.currentUser);

      router.push('/');
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInUserUsingFacebook = (): void => {
  const facebookProvider = new FacebookAuthProvider();
  signInWithPopup(auth, facebookProvider)
    .then(result => {
      console.log('Successfully registered using Facebook!');
      console.log(auth.currentUser);

      router.push('/');
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
