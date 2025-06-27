<template>
  <div class="flex flex-col gap-10 px-4 md:px-8">
        <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Live Map</h3> 

        <div class="flex md:flex-row flex-col gap-10">
            <!-- section guide -->
            <div class="flex md:w-1/8 md:flex-col flex-row items-center justify-center gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-10 h-10 rounded-sm" :style="{ backgroundColor: occupideBg }"></div>
                    <p class="text-xs">Occupied</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-10 h-10 rounded-sm" :style="{ backgroundColor: availableBg }"></div>
                    <p class="text-xs">Available</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-10 h-10 rounded-sm" :style="{ backgroundColor: reservedBg }"></div>
                    <p class="text-xs">Reserved</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-10 h-10 rounded-sm" :style="{ backgroundColor: repairBg }"></div>
                    <p class="text-xs">Repair</p>
                </div>
            </div>

            <!-- parking lot -->
            <div class="grid w-7/8 gap-0 bg-gray-100 rounded-xl shadow-md p-1">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 p-6">
                    <!-- electronic vehicle section -->
                    <div class="flex flex-col bg-white items-center gap-4 shadow-lg rounded-sm p-6">
                        <p class="text-sm font-black uppercase text-gray-500">Section for Electric</p>
                        <div class="flex md:flex-row flex-col gap-6">
                            <div class="" v-for="item in electronicVehicle">
                                <div class="w-15 h-15 flex flex-col justify-center items-center rounded-sm"
                                     :style="{ backgroundColor: getBgColor(item)}">
                                    <p class="text-white font-bold text-2xl items-center text-center rounded-full">{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- disabled vehicle section -->
                    <div class="flex flex-col bg-white items-center gap-4 shadow-lg rounded-sm p-6">
                        <p class="text-sm font-black uppercase text-gray-500">Section for Disabled</p>
                        <div class="flex md:flex-row flex-col gap-6">
                            <div class="" v-for="item in disabledDriver">
                                <div class="w-15 h-15 flex flex-col justify-center items-center rounded-sm"
                                     :style="{ backgroundColor: getBgColor(item)}">
                                    <p class="text-white font-bold text-2xl items-center text-center rounded-full">{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid gap-2 rounded-xl px-6 pb-6">
                    <!-- private vehicle section -->
                    <div class="flex flex-col bg-white items-center gap-4 shadow-lg rounded-sm p-6">
                        <p class="text-sm font-black uppercase text-gray-500">Section for Private</p>
                        <div class="flex md:flex-row flex-col gap-6">
                            <div class="" v-for="item in booking">
                                <div class="w-15 h-15 flex flex-col justify-center items-center rounded-sm"
                                     :style="{ backgroundColor: getBgColor(item)}">
                                    <p class="text-white font-bold text-2xl items-center text-center rounded-full">{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- public vehicle section -->
                    <div class="flex flex-col bg-white items-center gap-4 shadow-lg rounded-sm p-6">
                        <p class="text-sm font-black uppercase text-gray-500">Section for Public</p>
                        <div class="flex md:flex-row flex-col gap-6">
                            <div class="" v-for="item in publics">
                                <div class="w-15 h-15 flex flex-col justify-center items-center rounded-sm"
                                     :style="{ backgroundColor: getBgColor(item)}">
                                    <p class="text-white font-bold text-2xl items-center text-center rounded-full">{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div></div>
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

const occupideBg = ref('#FF1515')
const availableBg = ref('#48CF58')
const reservedBg = ref('#D9D9D9')
const repairBg = ref('#000000')

function getBgColor(item) {
  if (item.magnometer === false || item.ultrasonic === false) return occupideBg.value
  if (item.occupide === false) return availableBg.value
  if (item.occupide === true) return repairBg.value
  return reservedBg.value // fallback
}

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