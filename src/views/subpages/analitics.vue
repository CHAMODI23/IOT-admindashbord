<template>
  <!-- title -->
  <div class="flex flex-col gap-10 px-4 md:px-8">
    <h3 class="font-black text-2xl md:text-3xl text-[var(--common-theme)]">Analytics</h3>

    <div class="flex flex-col justify-between items-center md:flex-row gap-6 w-full shadow-md p-6 rounded-md">
      <p class="font-bold text-lg">Analytics Report &nbsp; &nbsp; &nbsp; :</p>
      <button class="bg-gray-700 rounded-md text-white text-bold text-lg p-2 w-1/3 hover:bg-[#000000]">Export PDF</button>
    </div>

    <div class="flex flex-col md:flex-row gap-6 w-full">
            <!-- bar chart - occupancy -->
            <div class="flex flex-col gap-6 rounded-xl shadow-md p-10 bg-white md:flex-[2]">
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
            <div class="flex flex-col gap-6 rounded-xl shadow-md p-10 bg-white md:flex-[1]">
              <h2 class="text-lg md:text-xl font-bold text-gray-800">Device Health Overview</h2>
              <div class="max-w-sm mx-auto p-6 bg-white rounded-xl">
                  <Pie :data="healthData" :options="chartOptionsDeviceHealth" />
              </div>
            </div>
    </div>

    <div class="flex md:flex-row flex-col gap-6 w-full">
      <!-- Revenue Analytics -->
      <div class="flex flex-col gap-6 rounded-xl shadow-md p-6 md:p-10 bg-white w-full">
        <div class="flex flex-row justify-between items-center">
          <h3 class="text-lg md:text-xl font-bold text-gray-800">Revenue Analytics</h3>
          <div class="flex gap-4">
            <button @click="viewMode = 'daily'" :class="{'font-bold text-green-600': viewMode === 'daily'}">Daily</button>
            <button @click="viewMode = 'monthly'" :class="{'font-bold text-green-600': viewMode === 'monthly'}">Monthly</button>
          </div>
        </div>

      <!-- Revenue Summary -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <p class="text-xs text-gray-400 uppercase">This {{ viewMode === 'daily' ? 'Week' : 'Month' }}</p>
          <p class="text-xl font-bold text-green-600">Rs. 120,000</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <p class="text-xs text-gray-400 uppercase">Last {{ viewMode === 'daily' ? 'Week' : 'Month' }}</p>
          <p class="text-xl font-bold text-gray-700">Rs. 105,000</p>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <p class="text-xs text-gray-400 uppercase">Change</p>
          <p class="text-xl font-bold text-blue-500">+14.3%</p>
        </div>
      </div>

      <!-- Line Chart -->
      <div class="bg-white p-6 rounded-xl shadow-md">
        <h3 class="text-lg font-bold text-gray-600 mb-4">Revenue Trend</h3>
        <Line :data="revenueChartData" :options="revenueChartOptions" />
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
  Title, PointElement,
  ArcElement, Filler,
  Legend, LineElement, 
} from 'chart.js'
import { Line , Bar, Pie } from 'vue-chartjs'

// Register all chart components
ChartJS.register(CategoryScale, LineElement, PointElement, Filler, LinearScale, BarElement, Tooltip, Title, ArcElement, Legend)

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

// revenue
// Generate dynamic labels and data
const getDailyLabelsRevenue = () => {
  const labels = []
  const today = new Date()
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }))
  }
  return labels
} 

const getMonthlyLabelsRevenue = () => {
  const labels = []
  const today = new Date()
  for (let i = 5; i >= 0; i--) {
    const date = new Date(today)
    date.setMonth(today.getMonth() - i)
    labels.push(date.toLocaleDateString('en-US', { month: 'short' }))
  }
  return labels
}

const getRandomRevenueData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100000) + 20000)
}

// Computed data for line chart
const revenueChartData = computed(() => {
  const labels = viewMode.value === 'daily' ? getDailyLabelsRevenue() : getMonthlyLabelsRevenue()
  const data = getRandomRevenueData(labels.length)

  return {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data,
        fill: true,
        backgroundColor: 'rgba(34,197,94,0.2)',
        borderColor: 'rgb(34,197,94)',
        tension: 0.4,
        pointRadius: 4
      }
    ]
  }
})

// Chart options
const revenueChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: ctx => `Rs. ${ctx.parsed.y.toLocaleString()}`
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: value => `Rs. ${value.toLocaleString()}`
      }
    }
  }
}

</script>
