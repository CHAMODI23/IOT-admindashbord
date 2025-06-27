<template>
  <div class="flex flex-col gap-10 px-4 md:px-8">
        <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Event Processing</h3>

        <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <!-- title -->
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Notifications</h3>
            </div>
            <!-- content -->
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130] w-[130] pl-6 py-2 text-gray-400 uppercase text-sm">Time</th>
                        <th class="min-w-[100px] w-[80px] pl-6 py-2 text-gray-400 uppercase text-sm">Tage</th>
                        <th class="min-w-[130px] w-[500px] pl-6 py-2 text-gray-400 uppercase text-sm">Description</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4">
                        <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" 
                            v-for="(item, index) in notification">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ new Date(item.time).toLocaleString().slice(0,-2) }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"><p :class="{'border-2 border-blue-500 text-blue-500' : item.tag == 'booking', 'border-2 border-green-600 text-green-500' : item.tag == 'vehicle', 'bg-red-500' : item.tag == 'sensor',}" class="w-fit py-1 px-2 rounded-full text-xs"><i class="fi fi-rr-exclamation mr-2" v-if="item.tag == 'sensor'"></i>{{ item.tag }}</p></td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6 max-w-[100px] cursor-pointer" @click="viewAllText(item.message, index)" :id="'explanation' + index">{{ item.message.slice(0, 110) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';

const notification = ref([
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'sensor',
        message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptas aliquid animi voluptates ducimus voluptatem quaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'booking',
        message : 'iquid animi voluptates ducimus voluptatem quaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'sensor',
        message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.  quaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'sensor',
        message : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptas aliquid animi voluptates ducimus voluptatem quaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'booking',
        message : 'Lorem ipsum, dolor uaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'vehicle',
        message : 'Lorem ipsum, dolor uaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
    {
        time : '2025-06-23T09:37:57.757Z',
        tag : 'vehicle',
        message : 'Lorem ipsum, dolor uaerat similique est, odit delectus nulla distinctio odio rem consectetur necessitatibus nostrum praesentium velit sapiente.'
    },
])

const viewAllText = (msg, index) => {
    const element = document.querySelector(`#explanation${index}`)
    const paragraph = element.textContent
    if(paragraph.length < 120){
        element.textContent = msg
    }else{
        element.textContent = msg.slice(0, 110)
    }
}

</script>