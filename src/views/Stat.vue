<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container mx-5 lg:mx-24 border-box">
        <main class="mb-8 -mt-8 ig:-mt-20">
            <div class="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                    <div class="flex items-center justify-center">
                        <div class="relative w-full">
                            <div class="absolute right-10 lg:right-52 inset-y-24 z-index">
                                <img src="../assets/poke-shadow.png" alt="pokeball">
                            </div>
                            <div class="absolute bottom-0 left-24">
                                <img src="../assets/dots.svg" alt="dots" class="w-24">
                            </div>
                            <div class>
                                <p class="font-semi text-center">
                                    #0001</p>
                                <div class="flex items-center justify-center">
                                    <img src="../assets/pokesmall.png" alt="pokesmall" class="mr-2">
                                    <p class="font-bold text-4xl tracking-widest text-black-0">
                                        Bulbasaur
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                                    alt="pokemon" class="w-72">
                            </div>
                        </div>
                    </div>

                    <!-- *<Router-Link to="/PageCatch"> -->

                    <div class="flex items-center justify-center mt-6 lg:mt-4">
                        <div
                            class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justify-between">
                            <img src="../assets/pokecatch.png" alt="logo-pokemon"
                                class="w-8 h-auto mr-2 cursor-pointer animate-bounce">
                            <p class="font-semi">
                                Catch Bulbasaur
                            </p>
                        </div>
                    </div>
                    <!-- </Router-Link> -->
                </div>
                <div class="card w-full bg-[#fff] lg:w-9/12 px-6 py-3">
                    <div class="mb-8">
                        <div class="home-switch px-1 py-2 flex justify-around items-center">
                            <Router-Link to="/DetailView">
                            <div class="home-switch rounded-3xl cursor-pointer hover:bg-yellow-400 py-1 px-5">
                                About
                            </div>
                        </Router-Link>
                            <Router-Link to="/Stat">
                                <div
                                    class="home-switch-active hover:bg-yellow-400 rounded-3xl cursor-pointer py-1 px-5">
                                    Stats
                                </div>
                            </Router-Link>
                            <Router-Link to="/Moves">
                            <div class="home-switch rounded-3xl hover:bg-yellow-400 cursor-pointer py-1 px-5">
                                Moves
                            </div>
                        </Router-Link>
                        </div>
                        <div class="w-full lg:px-10">
                            <div class="mb-5 lg:mb-3">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center"><img src="../assets/hp.png" alt="hp-icon"
                                            class="mr-2 ">
                                        <p class="font-semi ">Hp</p>
                                    </div>
                                    <p class="font-semi ">45</p>
                                </div>
                                <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                    <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 22.5%;"></div>
                                </div>
                            </div>
                            <div class="mb-5 lg:mb-3">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center"><img src="../assets/attack.png" alt="hp-icon"
                                            class="mr-2 ">
                                        <p class="font-semi ">Attack</p>
                                    </div>
                                    <p class="font-semi ">49</p>
                                </div>
                                <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                    <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 24.5%;"></div>
                                </div>
                            </div>
                            <div class="mb-5 lg:mb-3">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center"><img src="../assets/defense.png" alt="hp-icon"
                                            class="mr-2 ">
                                        <p class="font-semi ">Defense</p>
                                    </div>
                                    <p class="font-semi ">49</p>
                                </div>
                                <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                    <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 24.5%;"></div>
                                </div>
                            </div>
                            <div class="mb-5 lg:mb-3">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center"><img src="../assets/special-attack.png" alt="hp-icon"
                                            class="mr-2 ">
                                        <p class="font-semi ">Special-attack</p>
                                    </div>
                                    <p class="font-semi ">65</p>
                                </div>
                                <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                    <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 32.5%;"></div>
                                </div>
                            </div>
                            <div class="mb-5 lg:mb-3">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center"><img src="../assets/defense.png" alt="hp-icon"
                                            class="mr-2 ">
                                        <p class="font-semi ">Special-defense</p>
                                    </div>
                                    <p class="font-semi ">65</p>
                                </div>
                                <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                    <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 32.5%;"></div>
                                </div>
                            </div>
                            <div class="mb-5 lg:mb-3">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center"><img src="../assets/speed.png" alt="hp-icon"
                                            class="mr-2 ">
                                        <p class="font-semi ">Speed</p>
                                    </div>
                                    <p class="font-semi ">45</p>
                                </div>
                                <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                    <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 22.5%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <RouterView />
</template>