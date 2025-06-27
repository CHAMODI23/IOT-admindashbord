<template>
  <div class="flex flex-col gap-10 px-4 md:px-8">
        <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Operations</h3>

        <!-- Gate Control -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <!-- title -->
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Gate Control</h3>
            </div>
            <!-- content -->
            <div class="flex flex-col md:flex-row justify-content items-center gap-5">
                <div class="flex flex-col gap-4 w-6/7 h-full">
                    <div
                    v-for="(item, key) in gates"
                    class="flex flex-row items-center justify-between gap-2 bg-gray-100 p-6 rounded-lg shadow-sm"
                    >
                        <p class="text-2xl w-5/7 font-extrabold text-center pr-10 text-gray-900">{{ item.name }}</p>
                        <!-- Open Button -->
                        <button
                        class="w-4/7 rounded-sm py-3 bg-[linear-gradient(to_right,#28CF59,#0F6311)] text-white font-bold"
                        :disabled="item.open"
                        :class="item.open ? 'opacity-50 cursor-not-allowed' : ''"
                        @click="item.open = true"
                        >
                        Open
                        </button>

                        <!-- Close Button -->
                        <button
                        class="w-4/7 rounded-sm py-3 bg-[linear-gradient(to_right,#7D1F1F,#3B0F0F)] text-white font-bold"
                        :disabled="!item.open"
                        :class="!item.open ? 'opacity-50 cursor-not-allowed' : ''"
                        @click="item.open = false"
                        >
                        Close
                        </button>
                    </div>
                </div>
                <!-- Emergency Button -->
                <button
                class="flex flex-col justify-center items-center rounded-sm md:text-lg text-2xl md:w-2/7 w-full bg-[#C9181F] h-[220px] text-center font-bold text-white"
                @click="gates.forEach(g => g.open = true)"
                >
                Emergency <br> Open All
                <span class="mt-5 bg-white w-10 h-10 flex items-center justify-center rounded-full text-black text-xl">
                    🚨
                </span>
                </button>
            </div>
        </div> 

        <!-- Reservations -->
        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <!-- title -->
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Reservations</h3>
            </div>
            <!-- content -->
            <table class="w-full border-collapse">
                    <thead class="sm:table-header-group hidden bg-gray-100">
                        <tr class="text-left">
                            <th class="min-w-[130px] w-[300px] pl-6 py-2 text-gray-400 uppercase text-sm">Date</th>
                            <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Time</th>
                            <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">License Plate</th>
                            <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Slot</th>
                            <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">User</th>
                        </tr>
                    </thead>
                    <tbody class="sm:table-row-group flex flex-col gap-4">
                        <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" 
                            v-for="item in reservations">
                            <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.date }}</td>
                            <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.time }}</td>
                            <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.licensePlate }}</td>
                            <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.slot }}</td>
                            <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.user }}</td>
                        </tr>
                    </tbody>
            </table>
        </div> 
    </div> 
</template>
<script setup>
import { ref } from 'vue';

const gates = ref([
    {
        'name' : 'In Gate',
        'open' : false
    },
    {
        'name' : 'Out Gate',
        'open' : false
    },
])

const reservations = ref([
    {
        'date' : '20-06-2025',
        'time' : '10.00AM' ,
        'licensePlate' : 'DYZ-8965',
        'slot' : 'D1',
        'user' : 'John Park'
    },
    {
        'date' : '20-06-2025',
        'time' : '10.10AM',
        'licensePlate' : 'GJK- 4574',
        'slot' : 'D4',
        'user' : 'Ajith Silva'
    },
])

</script>