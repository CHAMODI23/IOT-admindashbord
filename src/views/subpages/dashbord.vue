<template>
  <div class="flex flex-col gap-10 px-4 md:px-8">
        <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Dashboard</h3>

        <!-- Overview -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Overall Summary</h3>
            </div>
            <!-- Percentages -->
            <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 items-center">
                <div class="flex flex-col gap-3 justify-center items-center">
                    <p class="text-gray-600 font-bold">Occupancy</p>
                    <div class="w-full flex flex-row items-center">
                        <div class="w-full border-2 border-blue-300 bg-gray-300 rounded-md h-8 overflow-hidden">
                            <div
                            class="h-full transition-all duration-500 rounded-md flex items-center justify-center text-white font-semibold select-none"
                            :style="{ width: progress + '%', background: 'var(--gradient-to-theme)' }"
                            >
                                <span v-if="progress > 20">{{ progress }}%</span>
                            </div>
                        </div>
                        <div v-if="progress <= 20" class="text-black bg-blue ml-2">{{ progress }}%</div>
                    </div>
                </div>
                <div class="flex flex-col gap-3 justify-center items-center">
                    <p class="text-gray-600 font-bold">Revenue</p>
                    <div class="w-full transition-all border-2 border-blue-300 bg-gray-300 rounded-md h-8 overflow-hidden">
                        <div
                        class="h-full duration-500 rounded-md flex items-center justify-center text-blue-600 font-semibold select-none"
                        :style="{ width: 100 + '%'}"
                        >
                            <span>{{ formattedRevenue  }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-3 justify-center items-center">
                    <p class="text-gray-600 font-bold">Alerts</p>
                    <div class="w-full transition-all border-2 border-blue-300 rounded-md h-8 overflow-hidden"
                                :style="{ background: 'linear-gradient(to right, #FF1515, #cc0000, #990D0D)' }">
                        <div
                        class="h-full duration-500 rounded-md flex items-center justify-center text-white font-semibold select-none"
                        :style="{ width: 100 + '%'}"
                        >
                            <span>{{ alertsCount }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Summary Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div
                v-for="(key, value) in summery"
                :key="value"
                class="flex flex-col items-center justify-center gap-2 bg-gray-100 p-6 rounded-lg shadow-sm"
                >
                    <p class="font-medium text-sm text-gray-700 capitalize">{{ value }}</p>
                    <p class="text-3xl md:text-4xl font-extrabold text-gray-900">{{ key }}</p>
                </div>
            </div>
        </div>

        <!-- Parking slot Summery -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Slot Summary</h3>
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-row gap-8 items-center shadow-md p-5 rounded-md" v-for="item in slotsummery">
                    <p class="text-gray-500 font-bold w-[300px]">{{ item.name }}</p>
                    <div class="flex flex-col border w-20 h-10 shadow-sm p-2 justify-center items-center border-gray-300 rounded-sm">
                        <p class="">{{ item.currentValue }}/{{ item.max }}</p>
                    </div>
                    <div class="w-full flex flex-row items-center"> 
                        <div class="w-full border-2 border-blue-300 bg-gray-300 rounded-md h-8 overflow-hidden">
                            <div
                            class="h-full transition-all duration-500 rounded-md flex items-center justify-center text-white font-semibold select-none"
                            :style="{ width: getProgressForSingleSlot(item) + '%', background: 'var(--gradient-to-theme)' }"
                            >
                                <span v-if="getProgressForSingleSlot(item) > 20">{{ getProgressForSingleSlot(item) }}%</span>
                            </div>
                        </div>
                        <div v-if="getProgressForSingleSlot(item) <= 20" class="text-black bg-blue ml-2">{{ getProgressForSingleSlot(item) }}%</div>
                    </div>
                </div>
            </div>
        </div>            

        <!-- Critical alerts -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Critical Alerts</h3>
            </div>
            <div class="flex flex-col gap-1">
                <div class="flex flex-row gap-4 items-center shadow-md p-2 rounded-md"
                     v-for="alert in alerts"
                     :key="alert.sensor">
                    <div class="text-xl">{{ getAlertIcon(alert.severity) }}</div>
                    <p class="bg-gray-100 p-1 rounded-md">{{ alert.sensor }}</p>
                    <p class="text-gray-500 font-bold w-2/5">{{ alert.message }}</p>
                    <p class="text-gray-500">{{ alert.timestamp }}</p>
                </div>
            </div>
        </div>
        
        <div></div>
    </div> 
</template>

<script setup>
import { ref, computed  } from 'vue';

const occupancyPercentage = ref({
    'totalSlots': 25,
    'occupiedSlots' : 12,
})
const progress = computed(() => {
  return Math.round((occupancyPercentage.value.occupiedSlots / occupancyPercentage.value.totalSlots) * 100)
})
const revenue = ref(25000.00)
const formattedRevenue = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'LKR',
  }).format(revenue.value)
})
const alertsCount = ref(10)

const summery = ref({
    'available slots' : 20,
    'occupide slots' : 12,
    'reserved slots' : 2,
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
function getProgressForSingleSlot(item) {
  if (!item || !item.max) return 0;
  return Math.round((item.currentValue / item.max) * 100);
}

const alerts = ref([
  {
    message: 'Sensor Low Battery',
    sensor: 'A2_U',
    severity: 'Important',
    timestamp: '2025-06-27T09:00:00Z',
  },
  {
    message: 'Sensor Offline',
    sensor: 'E4_U',
    severity: 'Critical',
    timestamp: '2025-06-27T09:00:00Z',
  }
])
function getAlertIcon(severity) {
  switch (severity) {
    case 'Important':
      return '⚠️'; //Needs attention
    case 'Critical':
      return '🚨'; //Urgent or system failure
    case 'Blocked':
      return '🛑'; //Action stopped or denied
    default:
      return '💡'; //Caution, non-critical alert
  }
}
</script>