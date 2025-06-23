<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">Dashbord</h1>
        <!-- section guide -->
        <div class="flex fle-row border border-gray-300 p-6 rounded-sm w-full justify-center gap-10">
            <div class="flex flex-col justify-center items-center gap-2">
                <div class="w-10 h-10 bg-black rounded-sm"></div>
                <p class="text-xs">Occupide</p>
            </div>
            <div class="flex flex-col justify-center items-center gap-2">
                <div class="w-10 h-10 bg-green-400 rounded-sm"></div>
                <p class="text-xs">Available</p>
            </div>
            <div class="flex flex-col justify-center items-center gap-2">
                <div class="w-10 h-10 bg-blue-400 rounded-sm"></div>
                <p class="text-xs">Reserved</p>
            </div>
            <div class="flex flex-col justify-center items-center gap-2">
                <div class="w-10 h-10 bg-red-400 rounded-sm"></div>
                <p class="text-xs">Sensors out</p>
            </div>
        </div>
        <!-- parking lot -->
        <div class="flex flex-col w-full h-auto justify-center items-center">
            <div class="grid grid-cols-2 gap-2 items-center justify-center w-fit h-auto">
                <!-- electronic vehicle section -->
                <div class="flex flex-col gap-4 border border-gray-400 rounded-sm p-5">
                    <p class="text-sm font-black uppercase text-gray-500">Electric vehicles</p>
                    <div class="flex flex-row gap-6">
                        <div class="" v-for="item in electronicVehicle">
                            <div :class="{'bg-red-400' : (item.magnometer == false || item.ultrasonic == false), 'bg-green-400' : item.occupide == false && item.availability == true, 'bg-black' : item.occupide == true && item.availability == false, 'bg-blue-400' : item.book == true && item.occupide == false && item.availability == false}" class="w-15 h-15 flex flex-col justify-center items-center rounded-sm">
                                <p class="bg-white w-8 h-6 text-center rounded-full">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- disabled drivers' vehicles -->
                <div class="flex flex-col gap-4 border border-gray-400 rounded-sm p-5">
                    <p class="text-sm font-black uppercase text-gray-500">Disabled Driver</p>
                    <div class="flex flex-row gap-6">
                        <div class="" v-for="item in disabledDriver">
                            <div :class="{'bg-red-400' : (item.magnometer == false || item.ultrasonic == false), 'bg-green-400' : item.occupide == false && item.availability == true, 'bg-black' : item.occupide == true && item.availability == false, 'bg-blue-400' : item.book == true && item.occupide == false && item.availability == false}" class="w-15 h-15 flex flex-col justify-center items-center rounded-sm">
                                <p class="bg-white w-8 h-6 text-center rounded-full">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- bookable parking slots -->
                <div class="flex flex-col gap-4 border border-gray-400 rounded-sm p-5 col-span-2">
                    <p class="text-sm font-black uppercase text-gray-500">Booking slots</p>
                    <div class="flex flex-row justify-between">
                        <div class="" v-for="item in booking">
                            <div :class="{'bg-red-400' : (item.magnometer == false || item.ultrasonic == false), 'bg-green-400' : item.occupide == false && item.availability == true, 'bg-black' : item.occupide == true && item.availability == false, 'bg-blue-400' : item.book == true && item.occupide == false && item.availability == false}" class="w-15 h-15 flex flex-col justify-center items-center rounded-sm">
                                <p class="bg-white w-8 h-6 text-center rounded-full">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- public parking slots -->
                <div class="flex flex-col gap-4 border border-gray-400 rounded-sm p-5 col-span-2">
                    <p class="text-sm font-black uppercase text-gray-500">Public slots</p>
                    <div class="flex flex-row justify-between">
                        <div class="" v-for="item in publics">
                            <div :class="{'bg-red-400' : item.magnometer == false || item.ultrasonic == false, 'bg-green-400' : item.occupide == false, 'bg-black' : item.occupide == true}" class="w-15 h-15 flex flex-col justify-center items-center rounded-sm">
                                <p class="bg-white w-8 h-6 text-center rounded-full">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup>
import { onMounted, ref } from 'vue';

const parkingSlot = ref([
    {
        'name' : 'E1',
        'type' : 'electronic',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'E2',
        'type' : 'electronic',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'E3',
        'type' : 'electronic',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'E4',
        'type' : 'electronic',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'D1',
        'type' : 'disable',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'D2',
        'type' : 'disable',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'D3',
        'type' : 'disable',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'D4',
        'type' : 'disable',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'P1',
        'type' : 'privet',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'P2',
        'type' : 'privet',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'P3',
        'type' : 'privet',
        'availability' : false,
        'ultrasonic' : false,
        'magnometer' : true,
        'bookable' : true,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'P4',
        'type' : 'privet',
        'availability' : false,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : true,
        'occupide' : false
    },
    {
        'name' : 'P5',
        'type' : 'privet',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'P6',
        'type' : 'privet',
        'availability' : false,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : true,
        'occupide' : false
    },
    {
        'name' : 'P7',
        'type' : 'privet',
        'availability' : false,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : false,
        'occupide' : true
    },
    {
        'name' : 'P8',
        'type' : 'privet',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : true,
        'book' : true,
        'occupide' : false
    },
    {
        'name' : 'A1',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A2',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A3',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A4',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A5',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A6',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A7',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : false
    },
    {
        'name' : 'A8',
        'type' : 'public',
        'availability' : true,
        'ultrasonic' : true,
        'magnometer' : true,
        'bookable' : false,
        'book' : false,
        'occupide' : true
    },
])

const electronicVehicle = ref([])
const disabledDriver = ref([])
const booking = ref([])
const publics = ref([])

onMounted(() => {
    for (let i = 0; i < parkingSlot.value.length; i++) {
        if (parkingSlot.value[i].type == 'electronic') {
            electronicVehicle.value.push(parkingSlot.value[i])            
        }else if(parkingSlot.value[i].type == 'disable'){
            disabledDriver.value.push(parkingSlot.value[i])
        }else if(parkingSlot.value[i].type == 'privet'){
            booking.value.push(parkingSlot.value[i])
        }else if(parkingSlot.value[i].type == 'public'){
            publics.value.push(parkingSlot.value[i])
        }
        
    }
})

</script>