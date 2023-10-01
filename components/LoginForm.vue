<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title mb-5 text-2xl">Welcome 🥳</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <input type="email" placeholder="Email" class="input w-full max-w-xs input-bordered input-primary"
                    v-model="email" required />
                <input type="password" placeholder="Password" class="input w-full max-w-xs input-bordered input-primary"
                    v-model="password" required />
                <button class="btn btn-primary text-white">Sign In</button>
            </form>
            <NuxtLink href="/" class="text-primary">Forgot password?</NuxtLink>
            <NuxtLink href="/signup" class="text-primary">Dont have an account? Register.</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginUser } from '@/middleware/auth'  // Adjust the path based on your folder structure

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
    try {
        const data = await loginUser(email.value, password.value);
        // Handle successful login, e.g., store token, redirect, etc.
        console.log('Token:', data.token);
    } catch (error: any) {
        errorMessage.value = error.detail || 'Failed to login';
    }
}

</script>
