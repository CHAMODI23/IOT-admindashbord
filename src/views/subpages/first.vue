<template>
  <div class="flex justify-center items-center h-8/9 w-full bg-[var(--common-background)] px-4">
    <!-- form part -->
    <div class="flex flex-col p-10 gap-10 shadow-lg rounded-sm flex-1 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl justify-center">
      
      <!-- header section -->
      <div class="flex flex-col items-center font-semibold gap-2 text-xl text-center">
        <img src="@/assets/easyParkLogo.svg" alt="Logo" class="max-w-full max-h-full" />
        <h3 class="font-black text-3xl text-[var(--common-theme)]">Welcome to the Dashboard!!</h3>
        <p class="text-base text-black font-semibold mt-10">Please login to the system.</p>
      </div>
      
      <!-- footer section -->
      <button
        class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white w-full border-0 rounded-sm py-2 transition-colors"
        @click="router.push('/login')"
      >
        Login
      </button>

    </div>
  </div>
</template>

<script setup>
    import router from '@/router';
</script>