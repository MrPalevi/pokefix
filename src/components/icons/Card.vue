<script setup>
import { defineProps } from 'vue';
import { RouterView } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <main>
    <Router-Link to="/TEST">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ props.title }}</h2>
          <p>{{ props.description }}</p>
          <div class="flex justify-center card-actions">

            <div class="absolute z-10 -top-8 lg:-top-14 -right-1 lg:-right-5 "><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="venusaur" class="w-40 xl:w-44 h-auto ">
            </div>
          </div>
        </div>
      </div>
    </Router-Link>
    <RouterView />
  </main>
</template>