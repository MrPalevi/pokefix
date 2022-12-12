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
                    <div class="flex items-center justify-center mt-6 lg:mt-4">
                       

                        <label for="my-modal-6" class="card">
                            <div
                                class="card-catch rounded-full bg-white px-5 py-2 hover:bg-yellow-400 flex items-center justify-between">
                                <img src="../assets/pokecatch.png" alt="logo-pokemon"
                                    class="w-8 h-auto mr-2 cursor-pointer animate-bounce">
                                <p class="font-semi">
                                    Catch Bulbasaur
                                </p>
                            </div>
                        </label>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            
                                <div class="card rounded-3xl -pt-5 px-28 py-1 bg-white">
                                <figure class="">
                                    <img
                                    src="../assets/pokecatch.png" alt="logo-pokemon-throw" class="animate-spin" />
                                </figure>
                                <p class="card-body items-center text-center font-semibold">Throwing Pokeball...</p>
                                <div class="modal-action">
                                    <Router-Link to="/TangkapPoke" class="my-model-6 card -right-24 bottom-5 ">Throw
                                    </Router-Link>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card w-full bg-[#fff] lg:w-9/12 px-6 py-3">
                    <div class="mb-8">
                        <div class="home-switch px-1 py-2 flex justify-around items-center">
                            <Router-Link to="/DetailView">
                                <div
                                    class="home-switch-active rounded-3xl cursor-pointer hover:bg-yellow-400 py-1 px-5">
                                    About
                                </div>
                            </Router-Link>
                            <Router-Link to="/Stat">
                                <div class="home-switch rounded-3xl hover:bg-yellow-400 cursor-pointer py-1 px-5">
                                    Stats
                                </div>
                            </Router-Link>
                            <Router-Link to="/Moves">
                                <div class="home-switch rounded-3xl hover:bg-yellow-400 cursor-pointer py-1 px-5">
                                    Moves
                                </div>
                            </Router-Link>
                        </div>
                        <div class="w-full lg:px-7">
                            <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                <p class="font-semi">
                                    Types
                                </p>
                                <div class="flex col-span-2 items-center">
                                    <div
                                        class="Type_grass_hgbER px-3 text-base bg-[#54b94780] text-black-0 rounded-md mr-2">
                                        Grass
                                    </div>
                                    <div
                                        class="Type_poison_TGzfb px-3 text-base bg-[#b9202580] text-black-0 rounded-md mr-2">
                                        Poison
                                    </div>
                                    <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                    </div>

                                </div>

                            </div>
                            <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                <p class="font-semi">Height</p>
                                <p class="col-span-2">0.7 (m)</p>
                            </div>
                            <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                <p class="font-semi">Weight</p>
                                <p class="col-span-2">6.9 (kg)</p>
                            </div>
                            <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-1">
                                <p class="font-semi">Abilities</p>
                                <div class="col-span-2">
                                    <div class="flex items-center mb-5 lg:mb-3"><img src="../assets/pikachu.png"
                                            alt="abilities" class="w-4 mr-2">
                                        <div class="bg-yellow-200 w-fit px-3 text-base text-black-0 rounded-md mr-2">
                                            Overgrow</div>
                                    </div>
                                    <div class="flex items-center mb-5 lg:mb-3"><img src="../assets/pikachu.png"
                                            alt="abilities" class="w-4 mr-2">
                                        <div class="bg-yellow-200 w-fit px-3 text-base text-black-0 rounded-md mr-2">
                                            Chlorophyll</div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                <p class="font-semi">Experience</p>
                                <p class="col-span-2">64 (Exp)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <RouterView />
</template>
