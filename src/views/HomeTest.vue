<script setup>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const todoList = ref([]);

async function getTodoList() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');

  todoList.value = res.data;
}

onMounted(async () => {
  await getTodoList()
})

</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <Card v-for="(item) in todoList" :key="item" :title="item.title" :description="item.description" />
  </div>
</template>