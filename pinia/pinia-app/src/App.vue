<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from './store/user';

const userStore = useUserStore();
const { name, age } = storeToRefs(userStore);

const addAge = () => {
  userStore.age += 1;
};
const userReset = () => {
  userStore.$reset();
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>getName：{{ userStore.getName }}</p>
  <button @click="addAge">过生日了</button>
  <button @click="userReset">重置</button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
