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
  },
  {
    title: '0007',
    description: 'Ivysaur'
  },
  {
    title: '0008',
    description: 'Venusaur'
  },
  {
    title: '0009',
    description: 'Charmander'
  },
  {
    title: '0010',
    description: 'Charmeleon'
  },
  {
    title: '0011',
    description: 'Charizard'
  },
  {
    title: '0012',
    description: 'Ivysaur'
  },
  {
    title: '0013',
    description: 'Venusaur'
  },
  {
    title: '0014',
    description: 'Charmander'
  },
  {
    title: '0015',
    description: 'Charmeleon'
  },
  {
    title: '0016',
    description: 'Charizard'
  },
  {
    title: '0017',
    description: 'Ivysaur'
  },
  {
    title: '0018',
    description: 'Venusaur'
  },
  {
    title: '0019',
    description: 'Charmander'
  },
  {
    title: '0020',
    description: 'Charmeleon'
  },
  {
    title: '0021',
    description: 'Charizard'
  }
];

</script>

<template>
  <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-14 mb-8">
    <Card v-for="(item) in todoList" :key="item" :title="item.title" :description="item.description" />
  </div>
  <div class="container pt-10 pb-5 px-5 ">
    <div class="flex items-center justify-center h-screen-m">
      <Router-Link to="/LoadingTrow">
      <div
        class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justfy-between cursor-pointer">
        <p class="text">Load More</p>
      </div>
    </Router-Link>
    </div>
  </div>
  <RouterView />
</template>
