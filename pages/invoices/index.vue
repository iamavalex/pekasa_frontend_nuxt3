<template>
    <div class="relative overflow-x-auto mt-16 p-4">
        <h1 class="text-3xl font-bold text-black mb-2">Your invoices</h1>
        <div class="flex justify-between items-center mb-4">
            <div>
                <FilterButtons />
            </div>
            <div class="flex space-x-4">
                <input type="text" placeholder="Search" class="input input-bordered w-full max-w-xs" />
                <GetNewInvoiceButton @click="showModal = true" />
            </div>
        </div>
        <InvoicesTable />
        <GenerateLinkModal v-if="showModal" @close="showModal = false" />
    </div>
</template>
  
<script setup lang="ts">
definePageMeta({
    layout: "default",
});
import { ref } from 'vue';
import InvoicesTable from '@/components/InvoicesTable.vue';
import GetNewInvoiceButton from '@/components/GetNewInvoiceButton.vue';
import GenerateLinkModal from '@/components/GenerateLinkModal.vue';

const showModal = ref(false);
</script>
  
<style scoped></style>
  