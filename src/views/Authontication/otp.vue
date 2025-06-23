<template>
    <div class="flex flex-col justify-center items-center w-full h-screen border bg-[var(--common-background)]">
        <div class="flex flex-col gap-8 border rounded-sm w-auto h-auto p-4">
            <!-- hedear section -->
            <div class="text-center font-semibold text-xl w-[320px]">
                <h3 class="text-center font-semibold text-xl w-[320px]">Enter OTP</h3>
                <p class="text-sm font-light">Check your message on mobile phone</p>
            </div>
            <!-- body section -->
            <div class="flex flex-row gap-2 justify-center">
                <input type="text" class="border w-10 py-1 px-1">
                <input type="text" class="border w-10 py-1 px-1">
                <input type="text" class="border w-10 py-1 px-1">
                <input type="text" class="border w-10 py-1 px-1">
            </div>
            <!-- footer section -->
            <button class="bg-[#3b060a] hover:bg-[#62383b] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1" @click="router.push('/changepassword')">Confirm</button>
        </div>  
    </div>
</template>
<script setup>
import router from '@/router';
</script>