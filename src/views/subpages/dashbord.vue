<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">Dashbord</h1>
        <!-- overall summery -->
        <div class="flex flex-col gap-4 border border-gray-200 rounded-sm p-6">
            <h3 class="text-xl font-black uppercase text-gray-400">Overrall summery</h3>
            <div class="flex flex-row justify-between">
                <div class="flex flex-col gap-2 bg-gray-100 p-8 text-center rounded-sm min-w-[170px] max-w-[200px] w-full" v-for="(key, value ) in summery">
                    <p class="font-semibold capitalize">{{ value }}</p>
                    <p class="text-4xl font-black">{{ key }}</p>
                </div>
            </div>
        </div>

        <!-- Parking slot summery -->
        <div class="flex flex-col gap-4 border border-gray-200 rounded-sm p-6">
            <h3 class="text-xl font-black uppercase text-gray-400">Slot summery</h3>
            <div class="flex flex-col gap-6">
                <div class="flex flex-row gap-8 items-center" v-for="item in slotsummery">
                    <p class="w-[300px]">{{ item.name }}</p>
                    <div class="flex flex-col border w-20 h-10 justify-center items-center border-gray-300 rounded-sm">
                        <p class="">{{ item.currentValue }}/{{ item.max }}</p>
                    </div>
                    <progress :value="item.currentValue" :max="item.max" class="rounded-full h-2 w-full"></progress>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup>
import { ref } from 'vue';

const summery = ref({
    'available slots' : 20,
    'occupide slots' : 12,
    'reserved slots' : 2,
    'total income' : 3800,
    'other' : 30,
})

const slotsummery = ref([
    {
        'name' : 'Electric parking',
        'max' : 10,
        'currentValue' : 5
    },
    {
        'name' : 'Disability parking',
        'max' : 3,
        'currentValue' : 1
    },
    {
        'name' : 'Reserved parking',
        'max' : 6,
        'currentValue' : 5
    },
    {
        'name' : 'General parking',
        'max' : 15,
        'currentValue' : 1
    },
])
</script>