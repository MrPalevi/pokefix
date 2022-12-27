<script setup>
import { RouterView} from 'vue-router';

</script>


<template>
    <body>
        <div class="ant-scrolling-effect" style="width: calc(100% - 17px); overflow: hidden;">
            <div id="app">
                <div class="ant-modal-app">
                    <div class="ant-modal-mask">
                    </div>
                    <div tabindex="-1" class="ant-modal-wrap" role="dialog" style="">
                        <div role="document" class="ant-modal" style="width: 400px; transform-origin: 215px 28px;">
                            <div tabindex="0" aria-hidden="true"
                                style="width: 0px; height: 0px; overflow: hidden; outline: none;">
                            </div>
                            <div class="ant-modal-content">
                                <div class="ant-modal-body">
                                    <div>
                                        <div class="flex items-center justify-center"><img src="../assets/pokecatch.png"
                                                alt="logo-pokemon"
                                                class="h-auto mr-3 cursor-pointer rotater linearer infiniter hidden">
                                        </div>
                                        <p class="font-semi text-center font-bold  mt-10">Wow You Catch Bulbasaur...</p>
                                        <div class="mt-8">
                                            <p class="font-semi font-bold text-lg text-center pb-2 ">Give a Wild
                                                Bulbasaur Nickname</p>
                                            <div class="mt-3 w-full flex items-center justify-center ">
                                                <div class="w-9/12 "><input type="text" placeholder="sweet nickname..."
                                                        class="ant-input hover:border-yellow-400 rounded-2xl flex h-10 w-72 p-4 border-2 bg-white"
                                                        value="">
                                                </div>
                                            </div>
                                            <div class="flex items-center hover justify-center mt-5">
                                                <Router-Link to="/">
                                                <button class="mr-2 rounded-2xl border-yellow-400 border-2 h-10 w-20 css-9uc4ss mb-10 font-bold">Release</button>
                                            </Router-Link>
                                                <button class="css-154qye3 border-2 h-10 w-20  border-yellow-400 rounded-2xl mb-10 bg-yellow-400 hover:bg-white font-bold">Catch</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <RouterView />
</template>