<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">Gate contrall</h1>
        <div class="flex flex-row justify-between p-4 gap-6">
            <div class="" v-for="(item, key) in gates">
                <div class="flex flex-col justify-center items-center gap-4 border border-gray-300 p-4 rounded-sm">
                    <h3 class="font-black uppercase text-lg">{{ item.name }}</h3>
                    <p class="text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum atque dolor illum incidunt earum facere deserunt, rerum doloremque fuga!</p>
                    <button class="border w-full rounded-sm py-1" :class="{'bg-black text-white border-black' : item.open == true, 'bg-white text-black' : item.open == false}" @click="gateAction(key)">{{ item.open == true ? 'Open' : 'Close' }}</button>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-4 border border-gray-300 p-4 rounded-sm">
                <h3 class="font-black uppercase text-lg">both gates</h3>
                <p class="text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum atque dolor illum incidunt earum facere deserunt, rerum doloremque fuga!</p>
                <div class="flex flex-row gap-4 w-full">
                    <button class="border w-full rounded-sm py-1" :class="{'bg-gray-400 text-white border-gray-400' : gates[0].open == true && gates[1].open == true, 'bg-black text-white border-black' : gates[0].open == false && gates[1].open == false }" :disabled="gates[0].open == true && gates[1].open == true" @click="bothGatesOpen">Open</button>
                    <button class="border w-full rounded-sm py-1" :class="{'bg-gray-400 text-white border-gray-400' : gates[0].open == false && gates[1].open == false,  'bg-black text-white border-black' : gates[0].open == true && gates[1].open == true }" :disabled="gates[0].open == false && gates[1].open == false" @click="bothGatesClose">Close</button>
                </div>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { ref } from 'vue';

const gates = ref([
    {
        'name' : 'In gate',
        'open' : false
    },
    {
        'name' : 'Out gate',
        'open' : true
    },
])

const gateAction = (val) => {
    gates.value[val].open = !gates.value[val].open
}

const bothGatesOpen = () => {
    gates.value[0].open = true
    gates.value[1].open = true
}

const bothGatesClose = () => {
    gates.value[0].open = false
    gates.value[1].open = false
}

</script>