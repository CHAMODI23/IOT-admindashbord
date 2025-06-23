<template>
    <div class="flex flex-col justify-center items-center w-full h-screen border bg-[var(--common-background)]">
        <div class="flex flex-col border w-auto h-auto p-3 gap-4 rounded-sm">
            <!-- header part -->
            <div class="text-center font-semibold text-xl w-[320px]">
                <h3 class="">Loging</h3>
            </div>
            <!-- body part -->
            <div class="flex flex-col gap-2">
                <input type="text" placeholder="Mobile number" class="border px-4 py-1 rounded-sm focus:outline-none">
                <input type="text" placeholder="First Name" class="border px-4 py-1 rounded-sm focus:outline-none">
            </div>
            <!-- footer part -->
            <div class="">
                <button class="bg-[#3b060a] hover:bg-[#62383b] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1">Confirm</button>
                <p class="text-xs hover:underline active:underline hover:cursor-pointer mt-2 text-right" @click="router.push('/otp')">Don't you have account ?</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';


</script>