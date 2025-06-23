<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">Device management</h1>
        <!-- gate sensors -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Gate sensors</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Gate</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Sensor ID</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Status</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Bettery status</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in gateSensors">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.sensorName.slice(0,3) == 'opn' ? 'Entry' : 'Exite' }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.sensorName }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.status == true ? 'Ok' : 'Offline' }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.bettery }}<span class="text-xs"> %</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- slot sensors -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Slot sensors</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Parking slot</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Sensor ID</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Status</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Bettery status</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in slotSensors">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.sensorName.slice(0,2) }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.sensorName }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.status == true ? 'Ok' : 'Offline' }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.bettery }}<span class="text-xs"> %</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>
<script setup>
import { onMounted, ref } from 'vue';

const gateSensors = ref([])
const slotSensors = ref([])

const sensorData = ref([
    {
        'sensorName' : 'E1U',
        'status' : true,
        'bettery' : 27
    },
    {
        'sensorName' : 'E1M',
        'status' : true,
        'bettery' : 17
    },
    {
        'sensorName' : 'E2U',
        'status' : true,
        'bettery' : 69
    },
    {
        'sensorName' : 'E2M',
        'status' : false,
        'bettery' : 27
    },
    {
        'sensorName' : 'D1U',
        'status' : true,
        'bettery' : 45
    },
    {
        'sensorName' : 'D1M',
        'status' : false,
        'bettery' : 44
    },
    {
        'sensorName' : 'D2U',
        'status' : true,
        'bettery' : 27
    },
    {
        'sensorName' : 'D2M',
        'status' : true,
        'bettery' : 57
    },
    {
        'sensorName' : 'P1U',
        'status' : false,
        'bettery' : 27
    },
    {
        'sensorName' : 'P1M',
        'status' : true,
        'bettery' : 27
    },
    {
        'sensorName' : 'P2U',
        'status' : false,
        'bettery' : 27
    },
    {
        'sensorName' : 'P2M',
        'status' : true,
        'bettery' : 67
    },
    {
        'sensorName' : 'A1U',
        'status' : true,
        'bettery' : 8
    },
    {
        'sensorName' : 'A1M',
        'status' : true,
        'bettery' : 20
    },
    {
        'sensorName' : 'A2U',
        'status' : true,
        'bettery' : 47
    },
    {
        'sensorName' : 'A2M',
        'status' : true,
        'bettery' : 57
    },
    {
        'sensorName' : 'A3U',
        'status' : true,
        'bettery' : 27
    },
    {
        'sensorName' : 'A3M',
        'status' : true,
        'bettery' : 27
    },
    // this is for open gate
    {
        'sensorName' : 'opnIL',
        'status' : true,
        'bettery' : 40
    },
    {
        'sensorName' : 'opnLDR',
        'status' : false,
        'bettery' : 87
    },
    // this is for close gate
    {
        'sensorName' : 'clsLDR',
        'status' : true,
        'bettery' : 47
    },
    {
        'sensorName' : 'clsIL',
        'status' : true,
        'bettery' : 17
    },
])

// devide sensor data base on usege (gate / slots)
onMounted(() => {
    for (let i = 0; i < sensorData.value.length; i++) {
        console.log(sensorData.value[i].sensorName.slice(0,3))
        if (sensorData.value[i].sensorName.slice(0, 3) == 'opn' || sensorData.value[i].sensorName.slice(0, 3) == 'cls') {
            gateSensors.value.push(sensorData.value[i])
        }else{
            slotSensors.value.push(sensorData.value[i])
        }
    }
})
</script>