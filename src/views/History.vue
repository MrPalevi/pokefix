<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <div class="flex items-center justify-center">
            <Router-Link to="/CatchView">
            <div class="home-switch-active hover:bg-yellow-400 hover:rounded-full cursor-pointer py-1 px-5 ">
                Keep
            </div>
        </Router-Link>
        <Router-Link to="/History">
            <div class="cursor-pointer py-1 px-5 hover:bg-yellow-400 hover:rounded-full ">
                History
            </div>
        </Router-Link>
            <div class="flex items-center justify-center lg:justify-end"></div>
        </div>

        <div class="flex items-center justify-center h-screen-m ">
            <div class="mt-44 lg:mt-14">
                <div class="flex items-center justify-center">
                    <img src="../assets/poke-shadow.png" alt="pokeball">
                </div>
                <p class="font-bold text-center my-5">
                    you don't have a history pokemon yet</p>
                <div class="flex items-center justify-center">
                    <Router-Link to="/">
                        <div
                            class="card-catch w-fit px-5 py-2 cursor-pointer rounded-full bg-white hover:bg-yellow-400 hover:rounded-full flex items-center justfy-between">
                            <p class="font-semi ">
                                Go!! Catch a Pokemon</p>
                            <img src="../assets/pokecatch.png" alt="logo-pokemon"
                                class="w-5 h-auto ml-3 cursor-pointer ">
                        </div>
                    </Router-Link>
                </div>
            </div>
        </div>
    </main>
    <RouterView />
</template>

