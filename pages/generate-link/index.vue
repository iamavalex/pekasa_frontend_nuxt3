<template>
    <div class="px-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900 text-center mb-6" id="modal-headline">
            Setup the Link
        </h3>

        <!-- Option buttons aligned horizontally -->
        <div class="mb-6">
            <h4 class="font-semibold text-gray-700 mb-2">1. Select the options to include in the Invoice for thorough
                validation.
            </h4>
            <div class="mt-2 space-x-4">
                <button :class="option1Selected ? 'bg-selected text-selected-text' : 'bg-white text-gray-500'"
                    @click="option1Selected = !option1Selected" class="px-4 py-2 border rounded">
                    SWIFT
                </button>
                <button :class="option2Selected ? 'bg-selected text-selected-text' : 'bg-white text-gray-500'"
                    @click="option2Selected = !option2Selected" class="px-4 py-2 border rounded">
                    EUR
                </button>
                <button :class="option3Selected ? 'bg-selected text-selected-text' : 'bg-white text-gray-500'"
                    @click="option3Selected = !option3Selected" class="px-4 py-2 border rounded">
                    Address
                </button>
                <button :class="option4Selected ? 'bg-selected text-selected-text' : 'bg-white text-gray-500'"
                    @click="option4Selected = !option4Selected" class="px-4 py-2 border rounded">
                    Name
                </button>
            </div>
        </div>

        <!-- Select bank account -->
        <div class="mb-6">
            <h4>2. Select you Bank Account to pay this Invoice. *</h4>
            <div class="mt-2 flex space-x-4 overflow-x-auto">
                <div v-for="account in accounts" :key="account.id" @click="toggleSelection(account.id)"
                    class="card w-60 h-40 bg-base-100 border border-gray-300 relative cursor-pointer">
                    <!-- Checkbox -->
                    <input type="checkbox" :checked="account.selected" @change="toggleSelection(account.id)"
                        class="checkbox checkbox-primary absolute top-2 right-2" />

                    <!-- Icon and Content -->
                    <div class="card-body flex">
                        <!-- Icon Placeholder -->
                        <i class="fas fa-bank text-xl mr-4 self-center"></i>
                        <div>
                            <h2 class="card-title">UBS</h2>
                            <p>IBM LLC</p>
                            <p>DE***7896</p>
                            <hr>
                            <div class="card-actions justify-end">
                                <p>EUR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Input fields for Suppliers name and Description -->
        <div class="mb-6 flex space-x-4">
            <div class="w-1/2">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">5. Invoice description</label>
                <input type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe what the invoice is for">
            </div>

            <div class="w-1/2">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">6. Suppliers name</label>
                <input type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First and Last Name">
            </div>
        </div>

        <!-- Centered Generate Link button -->
        <div class="flex justify-center mt-6 mb-4">
            <button class="px-4 py-2 bg-blue-600 text-white rounded shadow">Generate link</button>
        </div>

    </div>
</template>
    
<script setup lang="ts">
import { ref } from 'vue';

const option1Selected = ref(false);
const option2Selected = ref(false);
const option3Selected = ref(false);
const option4Selected = ref(false);


// Sample bank accounts
const accounts = ref([
    { id: 1, selected: false },
    { id: 2, selected: false }
]);

function toggleSelection(id: number) {
    const account = accounts.value.find(acc => acc.id === id);
    if (account) {
        account.selected = !account.selected;
    }
}
</script>
    
<style scoped>
.bg-selected {
    background-color: #D7DCFF;
}

.text-selected-text {
    color: #3751FF;
}
</style>
    