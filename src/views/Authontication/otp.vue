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
            <!-- header section -->
            <div class="flex flex-col text-center gap-5">
                <div class="flex flex-col justify-center items-center w-full">
                    <img src="@/assets/easyParkLogo.svg" alt="Logo" class="w-30" />
                </div>
                <h3 class="font-black text-3xl text-[var(--common-theme)]">OTP  Verification</h3>
                
                <div class="flex flex-col text-center gap-0">
                    <p class="text-base text-black">Please enter the OTP sent to your phone number ending in XXXXXXX123.</p>
                </div>
            </div>

            <!-- body section -->
            <div class="flex flex-row gap-5 justify-center">
                <input type="text" class="text-center border w-15 h-15 py-1 px-1 rounded-sm border-[var(--common-theme)]" @input="onNumberInput">
                <input type="text" class="text-center border w-15 h-15 py-1 px-1 rounded-sm border-[var(--common-theme)]" @input="onNumberInput">
                <input type="text" class="text-center border w-15 h-15 py-1 px-1 rounded-sm border-[var(--common-theme)]" @input="onNumberInput">
                <input type="text" class="text-center border w-15 h-15 py-1 px-1 rounded-sm border-[var(--common-theme)]" @input="onNumberInput">
            </div>

            <!-- OTP not received section -->
            <div class="flex flex-col gap-2">
                <div class="flex flex-row gap-2 justify-center">
                    <p>OTP not received?</p> 
                    <p class="text-[var(--common-theme)] hover:cursor-pointer hover:text-[var(--common-theme-two)]">Resend</p>
                </div>
            </div>
            <!-- footer section -->
            <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1" @click="router.push('/dashbord')">Confirm</button>
        </div>  
    </div>
</template>
<script setup>
import router from '@/router';

// for OTP numbers
const onNumberInput = (event) => {
  let val = event.target.value.replace(/[^0-9]/g, ''); // keep only digits
  if (val.length > 1) {
    val = val.charAt(0); // keep only the first digit
  }
  event.target.value = val;
};

</script>