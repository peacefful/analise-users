<template>
  <main>
    <h1>График активных пользователей</h1>
    <section>
      <Doughnut class="chart" :options="options" :data="chartData" :key="1" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getActiveUsers } from '@/api/getActiveUsers'
import { Doughnut } from 'vue-chartjs'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'

const activeUsers = ref([])

onMounted(async () => {
  await getActiveUsers().then((response) => {
    console.log('response', response)
  })
})

ChartJS.register(Tooltip, Legend, ArcElement)

const chartData = ref({
  labels: ['3', '435'],
  datasets: [
    {
      backgroundColor: ['#242424', '#bc0ce8'],
      data: [5, 6],
    },
  ],
})

const options = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<style scoped>
main {
  padding-left: 15%;
  padding-top: 1%;
}
</style>
