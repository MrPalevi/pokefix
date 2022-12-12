<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container mx-5 ig:mx24">
    <header class="flex items-center justify-between mt-5 mb-12 lg:mb-24">
      <div>
        <Router-Link to="/">
          <img src="./assets/pokemon-logo.png" alt="logo-pokemon"
            class="w-32 lg:w-36 h-auto -mt-4 cursor-pointer"></Router-Link>
      </div>

      <Router-Link to="/CatchView">
        <div
          class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justfy-between cursor-pointer">
          <p class="font-semi">0 Catch</p>
          <img src="./assets/pokecatch.png" alt="logo-pokemon" class="w-5 h-auto ml-3 cursor-pointer ">
        </div>
      </Router-Link>
    </header>
  </div>
  <RouterView />
</template>