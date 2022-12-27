<script setup>
import { defineProps } from 'vue';
import { RouterView } from 'vue-router';

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  numb: {
    type: Number,
    default: 0
  },
  idx: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <main>
    <Router-Link :to="`/TEST/${props.idx+1}`">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p class="font-semi hover:text-yellow-400 ">{{"000"+props.numb }}</p>
          <h2 class="card-title font-bold">{{ props.name }}</h2>
          <div class="flex justify-center card-actions">
            <div class="absolute z-10 -top-8 lg:-top-14 -right-1 lg:-right-5 ">
              <img :src="url" alt="url" class="w-40 xl:w-44 h-auto ">
            </div>
          </div>
        </div>
      </div>
    </Router-Link>
    <RouterView />
  </main>
</template>