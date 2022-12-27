<script setup>
import Card from '@/components/icons/Card.vue';
import { RouterView } from 'vue-router';
import axios from 'axios'
import { ref, onMounted } from 'vue';



const todoList = ref([]);
const offset = ref(0);
const limit = ref(0)
const isDisabled = ref(false)


async function getTodoList() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/', {
    params: {
      offset: offset.value,
      limit: limit.value
    }
  });
  todoList.value = [...todoList.value, ...res.data.results]
  if (res.data.nextPage) {
    isDisabled.value = false
  } else {
    isDisabled.value = true
  }


  const promises = []
  res.data.results.forEach((pokemon) => {

    const res = axios.get(pokemon.url)
    promises.push(res)

  });

  Promise.all(promises).then((values) => {
    values.forEach((pokemon) => {
      const img = pokemon.data.sprites.other["official-artwork"].front_default
      const id = pokemon.data.id
      const no = pokemon.data.id
      todoList.value[id - 1].no = no
      todoList.value[id - 1].img = img;


    })
  
  })
}

function nextPage() {
  offset.value = offset.value + 20
  limit.value = limit.value
  getTodoList()
}

onMounted(async () => {
  await getTodoList()
})


</script>

<template>
  <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-14 mb-8 ">
    <Card v-for="(item, idx) in todoList" :key="idx" :idx="idx" :name="item.name" :url="item.img" :numb="item.no" />
  </div>
  <div>
  </div>
  <div class="container pt-10 pb-5 px-5 ">
    <div class="flex items-center justify-center h-screen-m">
      <div
        class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justfy-between cursor-pointer"
        @click="nextPage()" :disabled="isDisabled">
        Load More
      </div>
    </div>
  </div>
  <RouterView />
</template>
