<template>
  <main>
    <h1>График активных пользователей</h1>
    <section>
      <Line style="width: 50%; height: 400px" class="chart" :options :data="chartData" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getActiveUsers } from '@/api/getActiveUsers'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
} from 'chart.js'
import type { ChartData } from 'chart.js'

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
)

const chartData = ref<ChartData<'line'>>({
  labels: [],
  datasets: [],
})
onMounted(async () => {
  const response = await getActiveUsers()

  const countsByDate: Record<string, number> = {}

  response?.forEach((item) => {
    const date = item.time.split(' ')[0]
    countsByDate[date] = (countsByDate[date] || 0) + 1
  })

  const labelsData = Object.keys(countsByDate)
  const usersData = Object.values(countsByDate)

  chartData.value = {
    labels: labelsData,
    datasets: [
      {
        label: 'Активные пользователи',
        data: usersData,
        borderColor: 'red',
        tension: 0.1,
        fill: false,
      },
    ],
  }
})

const options = {
  responsive: true,
  maintainAspectRatio: true,
}
</script>

<style scoped>
main {
  padding-left: 15%;
  padding-top: 1%;
}

.chart {
  height: 200px;
  width: 200px;
}
</style>
