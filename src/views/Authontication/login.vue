<template>
    <div class="flex flex-row  gap-4 justify-center items-center w-full h-screen p-5 bg-[var(--common-background)]">
        <!-- logo part -->
        <div class="flex flex-col p-3 rounded-sm flex-1 max-w-md h-150 bg-[var(--common-theme)]">
            <div class="flex flex-col justify-center items-center h-full">
                <p class="text-white mb-20 tracking-wide text-4xl text-center uppercase" style="font-family: 'Anton', sans-serif;">Admin <br> Dashboard</p>
                <img src="@/assets/easyParkLogo.svg" alt="Logo" class="max-w-full max-h-full" />
                <h1 class="text-[var(--common-theme-two)] tracking-wide text-4xl" style="font-family: 'Anton', sans-serif;">EASY PARK</h1>
                <p class="text-white tracking-wide text-1xl" style="font-family: 'Anton', sans-serif;">FIND. PARK. GO</p>
            </div>
        </div>

        <!-- form part -->
        <div class="flex flex-col p-3 pl-10 pr-10 gap-10 shadow-sm rounded-sm flex-1 max-w-md h-150 justify-center">
            <!-- header part -->
            <div class="flex flex-col text-left font-semibold gap-2 text-xl w-[320px]">
                <h3 class="font-black text-3xl text-[var(--common-theme)]">LOGIN</h3>
                <p class="text-base text-black">Log in with your account</p>
            </div>
            <!-- body part -->
            <div class="flex flex-col gap-5">
                <input type="text" placeholder="Username" class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)]">
                <input type="password" placeholder="Password" class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)]">
            </div>
            <!-- forget/reset password part -->
            <div class="flex flex-col gap-2">
                <div class="flex flex-row gap-2">
                    <p>Forgot Password?</p> 
                    <p class="text-[var(--common-theme)] hover:cursor-pointer hover:text-[var(--common-theme-two)]" @click="router.push('/changePassword')">Reset Password</p>
                </div>
            </div>
            <!-- footer part -->
            <div class="">
                <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1"  @click="router.push('/otp')">Log In</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';


</script>