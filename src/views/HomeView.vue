<script setup>
import Card from '@/components/icons/Card.vue';
import { RouterView } from 'vue-router';
import '@vue/compiler-sfc'


const todoList = [
  {
    title: '0001',
    description: 'Bulbasaur'
  },
  {
    title: '0002',
    description: 'Ivysaur'
  },
  {
    title: '0003',
    description: 'Venusaur'
  },
  {
    title: '0004',
    description: 'Charmander'
  },
  {
    title: '0005',
    description: 'Charmeleon'
  },
  {
    title: '0006',
    description: 'Charizard'
  }
];

</script>

<template>
  <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-14 mb-8">
    <Card :title="item.title" :description="item.description" v-for="(item) in todoList" :key="item" />
  </div>
  <div class="container pt-10 pb-5 px-5 ">
    <div class="flex items-center justify-center h-screen-m">
      <div class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justfy-between cursor-pointer">
            <p class="text">Load More</p>
      </div>
        </div>
    </div>
    <RouterView />
</template>
