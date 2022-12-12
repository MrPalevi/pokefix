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
                        <div class="home-switch rounded-full shadow-lg mb-8 px-1 py-2 flex justify-around items-center">
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
                        <div class="overflow-y-scroll moves-scroll h-80 -mr-3">
                            <div class="grid grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-5 mb-3 pr-3">
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">razor-wind</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">swords-dance</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">cut</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">bind</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">vine-whip</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">headbutt</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">tackle</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">body-slam</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">take-down</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">double-edge</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">growl</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">strength</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">mega-drain</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">leech-seed</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">growth</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">razor-leaf</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">solar-beam</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">poison-powder</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">sleep-powder</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">petal-dance</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">string-shot</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">toxic</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">rage</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">mimic</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">double-team</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">defense-curl</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">light-screen</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">reflect</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">bide</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">sludge</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">skull-bash</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">amnesia</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">flash</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">rest</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">substitute</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">snore</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">curse</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">protect</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">sludge-bomb</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">mud-slap</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">outrage</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">giga-drain</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">endure</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">charm</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">false-swipe</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">swagger</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">fury-cutter</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">attract</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">sleep-talk</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">return</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">frustration</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">safeguard</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">sweet-scent</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">synthesis</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">hidden-power</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">sunny-day</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">rock-smash</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">facade</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">nature-power</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">helping-hand</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">ingrain</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">knock-off</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">secret-power</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">weather-ball</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">grass-whistle</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">bullet-seed</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">magical-leaf</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">natural-gift</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">worry-seed</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">seed-bomb</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">energy-ball</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">leaf-strom</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">power-whip</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">captivate</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">grass-knot</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">venoshock</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">round</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">echoed-voice</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">grass-pledge</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">work-up</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">grassy-terrain</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">confide</p>
                                </div>
                                <div class="border border-dashed py-2 hover:border-yellow-400">
                                    <p class="text-center text-sm">grassy-glide</p>
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