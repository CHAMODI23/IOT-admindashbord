<template>
  <!-- title -->
  <div class="flex flex-col gap-10 px-4 md:px-8">
    <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Analytics</h3>

    <div class="flex flex-col gap-6">
        <!-- bar chart - occupancy -->
            <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-800">Occupancy Analytics</h3>
                <div class="flex gap-4">
                <button @click="viewMode = 'daily'" :class="{'font-bold text-green-600': viewMode === 'daily'}">Daily</button>
                <button @click="viewMode = 'monthly'" :class="{'font-bold text-green-600': viewMode === 'monthly'}">Monthly</button>
                </div>
            </div>

            <Bar :data="chartData" :options="chartOptions" />
            </div>

            <!-- pie chart - device health -->
            <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white">
            <div class="max-w-sm mx-auto p-6 bg-white rounded-xl">
                <h2 class="text-xl font-bold mb-4 text-center text-[var(--common-theme)]">Device Health Overview</h2>
                <Pie :data="healthData" :options="chartOptionsDeviceHealth" />
            </div>
        </div>
    </div>
    

    <div></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  ArcElement,
  Legend,
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'

// Register all chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title, ArcElement, Legend)

const viewMode = ref('daily')

// Generate labels and highlight index
const getDailyLabels = () => {
  const labels = []
  const today = new Date()
  let highlightIndex = 0
  for (let i = -1; i <= 3; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const label = i === 0 ? 'Today' : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    if (i === 0) highlightIndex = labels.length
    labels.push(label)
  }
  return { labels, highlightIndex }
}

const getMonthlyLabels = () => {
  const labels = []
  const today = new Date()
  let highlightIndex = 0
  for (let i = 4; i >= 0; i--) {
    const date = new Date(today)
    date.setMonth(today.getMonth() - i)
    const label = date.toLocaleDateString('en-US', { month: 'short' })
    if (i === 0) highlightIndex = labels.length
    labels.push(label)
  }
  return { labels, highlightIndex }
}

const getRandomData = () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 101))

const chartData = computed(() => {
  const { labels, highlightIndex } = viewMode.value === 'daily' ? getDailyLabels() : getMonthlyLabels()
  const data = getRandomData()
  const backgroundColors = labels.map((_, index) =>
    index === highlightIndex ? '#3CAD4A' : '#1E467C'
  )

  return {
    labels,
    datasets: [
      {
        label: 'Occupancy Rate (%)',
        data,
        backgroundColor: backgroundColors,
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: value => `${value}%`,
      },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: ctx => `${ctx.parsed.y}% occupancy`,
      },
    },
  },
}

// device health
const healthData = {
  labels: ['Healthy', 'Errors', 'Repair'],
  datasets: [
    {
      label: 'Device Health',
      data: [60, 25, 15], //  percentages or counts
      backgroundColor: ['#3CAD4A', '#FF5252', '#FFA500'], // green, red, orange
      borderColor: '#fff',
      borderWidth: 2,
    },
  ],
}

const chartOptionsDeviceHealth = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { font: { size: 14 }, padding: 20 },
    },
    tooltip: {
      callbacks: {
        label: context => `${context.label}: ${context.parsed}%`,
      },
    },
  },
}
</script>
