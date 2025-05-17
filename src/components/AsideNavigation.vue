<template>
  <aside>
    <nav>
      <li>
        <router-link to="/">Таблица пользователей</router-link>
        <router-link to="/active-users">График активности</router-link>
      </li>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped>
aside {
  width: 220px;
  -webkit-box-shadow: 12px 2px 26px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 12px 2px 26px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 12px 2px 26px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;
  border-radius: 30px;
  height: 100vh;
  position: fixed;
}

li {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
}
</style>
