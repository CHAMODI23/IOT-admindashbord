<template>
    <div class="flex flex-col justify-center items-center w-full h-screen border bg-[var(--common-background)]">
        <div class="flex flex-col gap-6 border rounded-sm w-auto h-auto p-4">
            <!-- header section -->
            <div class="text-center font-semibold text-xl w-[320px]">
                <h3 class="text-center font-semibold text-xl w-[320px]">Add Password</h3>
                <p class="text-sm font-light">Do not enter common passwrods</p>
            </div>
            <!-- boddy section -->
            <div class="flex flex-col gap-2 justify-center">
                <input type="password" class="border rounded-sm py-1 px-4 focus:outline-none" placeholder="new password">
                <input type="password" class="border rounded-sm py-1 px-4 focus:outline-none" placeholder="re-enter password">
            </div>  
            <!-- footer section -->
            <button class="bg-[#3b060a] hover:bg-[#62383b] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1">Confirm</button>
        </div>
    </div>  
</template>
<script setup></script>