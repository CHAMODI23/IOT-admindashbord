<template>
    <div class="flex flex-col gap-10 px-4 md:px-8">
        <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Device Management</h3>

        <!-- Gate Sensors -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Gate Sensors</h3>
            </div>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[90px] w-[90px] pl-6 py-2 text-gray-400 uppercase text-sm">Gate</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Sensor ID</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Status</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Triggered</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4">
                    <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md"
                        v-for="item in gateSensors">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{
                            item.id.slice(0, 2) == 'XG' ? 'Exite' : 'Entry' }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.name }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"> {{ getAlertIcon(item.status) }} {{
                            item.status == true ? 'Ok' : 'Offline' }}</td>
                        <td class="sm:table-cell py-2 text-center">{{ item.triggered }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Slot Sensors -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <!-- title -->
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Parking Lot Sensors</h3>
            </div>
            <!-- content -->
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[130px] pl-6 py-2 text-gray-400 uppercase text-sm">Parking Slot</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Sensor ID</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Status</th>
                        <th class="min-w-[130px] w-[200px] pl-6 py-2 text-gray-400 uppercase text-sm">Bettery status
                        </th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4">
                    <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md"
                        v-for="item in slotSensors">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{
                            item.slotid }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.name }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"> {{ getAlertIcon(item.status) }} {{
                            item.status == true ? 'Ok' : 'Offline' }} </td>
                        <td class="sm:table-cell py-2 text-center">
                            <div class="flex flex-row items-center justify-start ml-10 gap-1">
                                {{ item.battery }}
                                <span class="text-xs flex items-center gap-1">
                                    %
                                    <span class="text-lg">{{ getBatteryStatusEmoji(item.bettery) }}</span>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { getAllSensors } from '@/service/database'
import { ref, onMounted, onUnmounted } from 'vue'

const gateSensors = ref([])
const slotSensors = ref([])

// status emojis
function getAlertIcon(status) {
    if (status === true) {
        return '✅'; // Online / Ok
    } else if (status === false) {
        return '🚫'; // Offline
    } else {
        return '⚙️'; // Unknown/Issue
    }
}

function getBatteryStatusEmoji(battery) {
    if (battery === 0) {
        return '🚨'; // Critical battery
    } else if (battery > 0 && battery < 20) {
        return '⚠️'; // Low battery warning
    } else {
        return ''; // Battery OK
    }
}


// Handle real-time updates
const handleUpdate = (payload) => {
    // sensors.value.push(payload)
    console.log(payload.new.slotid)
    if (payload.new.slotid == 'G1' || payload.new.slotid == 'G2') {
        for (let i = 0; i < gateSensors.value.length; i++) {
            if (gateSensors.value[i].id == payload.new.id) {
                gateSensors.value[i] = payload.new
            }
        }
    } else {
        for (let i = 0; i < slotSensors.value.length; i++) {
            console.log(slotSensors.value[i].id == payload.new.id)
            if (slotSensors.value[i].id == payload.new.id) {
                slotSensors.value[i] = payload.new
            }
        }
    }
}

// Setup and cleanup
onMounted(async () => {
    const { data, error, channel } = await getAllSensors(handleUpdate)
    for (let i = 0; i < data.length; i++) {
        if (data[i].slotid == 'G1' || data[i].slotid == 'G2') {
            gateSensors.value.push(data[i])
        } else {
            slotSensors.value.push(data[i])
        }
    }

    onUnmounted(() => {
        cleanup() // Unsubscribe when component unmounts
    })
})

</script>