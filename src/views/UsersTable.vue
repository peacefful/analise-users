<template>
  <main>
    <h1>Таблица пользователей</h1>
    <section>
      <table class="custom-table">
        <colgroup>
          <col />
          <col />
          <col />
          <col style="width: 20%" />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>ID</th>
            <th>Логин</th>
            <th>Имя</th>
            <th>Вопрос</th>
            <th>Регион</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableUsers" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.login }}</td>
            <td>{{ item.name }}</td>
            <td style="word-wrap: break-word; white-space: normal">{{ item.quetion }}</td>
            <td>{{ item.region }}</td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUniqueUsers } from '@/api/getUniqueUsers'
import { type TUniqueUser } from '@/types/user'

const tableUsers = ref<TUniqueUser[]>([])

onMounted(async () => {
  await getUniqueUsers().then((response) => {
    tableUsers.value = response as TUniqueUser[]
  })
})
</script>

<style>
main {
  padding-left: 15%;
  padding-top: 1%;
}
.custom-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
}

.custom-table td,
.custom-table th {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  word-wrap: break-word;
  white-space: normal;
}

.custom-table th {
  background-color: #f9f9f9;
  font-weight: 600;
}

.custom-table tr:hover {
  background-color: #f5f5f5;
}
</style>
