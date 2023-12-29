<template>
  <form class="space-y-4 md:space-y-6">
    <div class="flex flex-col items-center justify-between sm:flex-row">
      <div class="w-full">
        <label
          for="firstName"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >First name</label
        >
        <input
          v-model="signUpForm.firstName"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="John"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" />
      </div>
      <div class="mt-4 w-full sm:ml-4 sm:mt-0">
        <label
          for="lastName"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >Last name</label
        >
        <input
          v-model="signUpForm.lastName"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Doe"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" />
      </div>
    </div>
    <div>
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        v-model="signUpForm.email"
        type="email"
        name="email"
        id="email"
        placeholder="mail@example.com"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm" />
    </div>
    <div>
      <label
        for="password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        v-model="signUpForm.password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm" />
    </div>
    <div>
      <label
        for="confirmPassword"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Confirm password</label
      >
      <input
        v-model="signUpForm.confirmPassword"
        type="confirmPassword"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="••••••••"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm" />
    </div>
    <div class="flex items-start">
      <div class="flex h-5 items-center">
        <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          class="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-red-600 dark:border-gray-600 dark:bg-gray-700" />
      </div>
      <div class="ml-3 text-sm">
        <label
          for="terms"
          class="font-light text-gray-500 dark:text-gray-300"
          >I accept the
          <a
            class="font-medium text-red-600 hover:underline"
            data-modal-target="term-and-conditions-modal"
            data-modal-toggle="term-and-conditions-modal"
            >Terms and Conditions</a
          ></label
        >
        <Modal
          id="term-and-conditions-modal"
          dataModalHide="term-and-conditions-modal"
          tabindex="-1"
          headingTitle="Terms &amp; Conditions"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum illo porro non quos. Quidem, excepturi molestias? Voluptate recusandae incidunt velit. Necessitatibus sit, quos nesciunt nemo delectus consequatur. Neque, perferendis." />
      </div>
    </div>
    <button
      @click="validateSignUpForm"
      class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700">
      Create an account
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Already have an account?
      <router-link
        to="/signin"
        class="font-medium text-red-600 hover:underline"
        >Login here</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import Modal from '@shared/Modal/Modal.vue';

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

const signUpForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirmPassword: { required, sameAs: sameAs(signUpForm.password) },
};

const router = useRouter();
const auth = getAuth();
const v$ = useVuelidate(rules, signUpForm);

const validateSignUpForm = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await v$.value.$validate();

  // if (result) {
  //   alert('success, form submitted!');
  // } else {
  //   alert('error, form not submitted!');
  // }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUp = (): void => {
  createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.password)
    .then(result => {
      console.log(result);
      console.log('Successfully registered!');
      router.push('/');
    })
    .catch(error => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
