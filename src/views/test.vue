<template>
    <div class="">
        <pre>{{ sensors }}</pre>
        <p>this is the test page</p>
    </div>
</template>

<script setup>

// import { setupRealtimeUpdates } from '@/service/database'
import { getAllSensors } from '@/service/database'
import { ref, onMounted, onUnmounted } from 'vue'

const sensors = ref([])

// Handle real-time updates
const handleUpdate = (payload) => {
    // sensors.value.push(payload)
    for (let i = 0; i < sensors.length; i++) {
        console.log('this is triggerd')
        console.log(`${sensors.value[i].id} and ${payload.new.id}`)
        if (sensors.value[i].id == payload.new.id) {
            sensors.value[i] = payload.new
            console.log(`this is new data ${sensors.value[i]}`)
        }


    }
    console.log('Real-time update:', payload.new.id)
    // Add your update logic here
}

// Setup and cleanup
onMounted(async () => {
    const { data, error, channel } = await getAllSensors(handleUpdate)
    sensors.value = data
    // const { Sensors, error, channel } = setupRealtimeUpdates(handleUpdate)
    // console.log(Sensors)
    // sensors.value = Sensors

    onUnmounted(() => {
        cleanup() // Unsubscribe when component unmounts
    })
})

</script>