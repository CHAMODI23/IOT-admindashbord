<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">Device management</h1>
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Upcomming bookings</h3>
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
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in upcomming">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.leave }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.slot }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>
<script setup>
</script>