<script setup>
import { defineProps } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue';


const props = defineProps ({

})



</script>


<template>
     <div class="container pt-10 pb-5 px-5 ">
    <div class="flex items-center justify-center h-screen-m">
      <div class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justfy-between cursor-pointer"> 
        
        <p>Load More</p>
      </div>
    </div>
  </div>
</template>