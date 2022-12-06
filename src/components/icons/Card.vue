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
    default: 'ini default'
  }
})
</script>

<template>
  <main>
    <Router-Link to="/DetailView">
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <div class="flex justify-center card-actions">
    </div>
  </div>
</div>
</Router-Link>
<RouterView />
</main>
</template>