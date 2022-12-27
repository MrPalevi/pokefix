<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const route = useRoute()
const todoDetail = reactive({})


async function getDetailTodo(id) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = res.data;
      console.log(res.data)
    todoDetail.base_experience = data.base_experience;
    todoDetail.height = data.height;
    todoDetail.weight = data.weight;
    todoDetail.name = data.name;
    todoDetail.stats = data.stats;
    todoDetail.types = data.types;
    todoDetail.abilities = data.abilities;
    todoDetail.moves = data.moves;
    todoDetail.poke = data.sprites.other["official-artwork"].front_default;
    todoDetail.nomer = data.id
}


onMounted(() => {
    console.log('route', route.params)
    getDetailTodo(route.params.id)
})

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
                                    #000{{ todoDetail.nomer }}</p>
                                <div class="flex items-center justify-center">
                                    <img src="../assets/pokesmall.png" alt="pokesmall" class="mr-2">
                                    <p class="font-bold text-4xl tracking-widest text-black-0">
                                        {{ todoDetail.name }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <img :src="todoDetail.poke" alt="url" class="w-72">
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
                                    Catch {{ todoDetail.name }}
                                </p>
                            </div>
                        </label>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">

                            <div class="card rounded-3xl -pt-5 px-28 py-1 bg-white">
                                <figure class="">
                                    <img src="../assets/pokecatch.png" alt="logo-pokemon-throw" class="animate-spin" />
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
                <div class="card w-full bg-[#fff] right-16 m-5 lg:w-9/12 px-6 py-3">
                    <TabGroup>
                        <TabList>
                            <Tab class="m-2 rounded-md bg-white hover:bg-yellow-400 w-28">About</Tab>
                            <Tab class="m-2 rounded-md bg-white hover:bg-yellow-400 w-28">Stat</Tab>
                            <Tab class="m-2 rounded-md bg-white hover:bg-yellow-400 w-28">Move</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div class="grid grid-rows-1 grid-cols-3 pt-5 gap-3 mb-5 lg:mb-3">
                                    <p class="font-semi">
                                        Types
                                    </p>
                                    <div class="flex col-span-2 items-center">
                                        <div v-for="types in todoDetail.types" :key="types">
                                            <div
                                                class="Type_grass_hgbER px-3 text-base bg-[#54b94780] text-black-0 rounded-md mr-2">
                                                {{ types.type.name }}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                    <p class="font-semi">Height</p>
                                    <p class="col-span-2">{{ todoDetail.height + " (Cm) " }} </p>
                                </div>
                                <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                    <p class="font-semi">Weight</p>
                                    <p class="col-span-2">{{ todoDetail.weight + " (Kg) " }} </p>
                                </div>
                                <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-1">
                                    <p class="font-semi">Abilities</p>
                                    <div class="col-span-2">
                                        <div class="flex items-center mb-5 lg:mb-3"><img src="../assets/pikachu.png"
                                                alt="abilities" class="w-4 mr-2">
                                            <div v-for="abilities in todoDetail.abilities" :key="abilities">
                                                <div
                                                    class="bg-yellow-200 w-fit px-3 text-base text-black-0 rounded-md mr-2">
                                                    {{ abilities.ability.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3">
                                    <p class="font-semi">Experience</p>
                                    <p class="col-span-2"> {{ todoDetail.base_experience + " (Exp) " }} </p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="w-full lg:px-10 pt-5">
                                    <div v-for="stat in todoDetail.stats" :key="stat">
                                        <div class="mb-5 lg:mb-3">
                                            <div class="flex items-center justify-between mb-1">
                                                <div class="flex items-center">
                                                    <img src="../assets/hp.png" alt="hp-icon" class="mr-2 ">
                                                    <p class="font-semi ">{{ stat.stat.name }}</p>
                                                </div>
                                                <p class="font-semi ">{{ stat.base_stat }}</p>
                                            </div>
                                            <div class="relative w-full h-2 bg-red-100 rounded-lg ">
                                                <div class=" h-2 bg-yellow-400 rounded-lg" style="width: 48%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="overflow-y-scroll moves-scroll h-80 -mr-3 mt-5">
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
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
        </main>
    </div>
    <RouterView />
</template>
