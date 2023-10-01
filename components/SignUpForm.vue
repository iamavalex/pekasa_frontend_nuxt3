<template>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-2xl">Hello stranger 👋🏼</h2>
        <p>Are you ready to join?</p>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="input w-full max-w-xs input-bordered input-primary"
            v-model="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="input w-full max-w-xs input-bordered input-primary"
            v-model="password"
            required
          />
          <input
            type="password"
            placeholder="Repeat password"
            class="input w-full max-w-xs input-bordered input-primary"
            v-model="password2"
            required
          />
          <button class="btn btn-primary text-white">Sign Up</button>
        </form>
        <div>
          <p>By signing up, you agree to our</p>
          <span><NuxtLink to="/" class="text-primary"> Terms of Service</NuxtLink></span> and
          <span><NuxtLink to="/" class="text-primary"> Privacy Policy</NuxtLink></span>
        </div>
        <NuxtLink to="/login" class="text-primary">Already have an account? Login.</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
 import { ref } from 'vue'
import { loginUser, registerUser } from '@/middleware/auth'  // Adjust the path based on your folder structure

const email = ref('')
const password = ref('')
const password2 = ref('')
const errorMessage = ref('')
const handleSubmit = async () => {
    try {
        const data = await registerUser(email.value, password.value, password2.value);
        // Handle successful login, e.g., store token, redirect, etc.
        console.log('Token:', data.token);
    } catch (error: any) {
        errorMessage.value = error.detail || 'Failed to login';
    }
}
  </script>
  