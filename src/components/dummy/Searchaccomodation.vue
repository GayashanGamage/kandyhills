<template>
    <div
        class="flex flex-col gap-6 px-10 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
        <div class="flex flex-col gap-5">

            <!-- review section title -->
            <h3 class="font-black text-3xl text-center uppercase">Book now</h3>
            <p class="text-center xl:text-sm md:text-xl text-lg font-thin uppercase">enjoy your vacation <br> with
                peacefull
                nature near to hill country town</p>
            <!-- <div class=""> -->
            <div class="grid grid-cols-5 gap-2 h-auto w-full rounded-sm bg-white p-4 shadow-lg">
                <!-- select data 'from' section -->
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-black">From</p>
                    <input type="date"
                        class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400">
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-black">To</p>
                    <input type="date"
                        class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400">
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-black">Adults</p>
                    <input type="text"
                        class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400"
                        minlength="1" maxlength="2" placeholder="02">
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-xs text-black">Childs</p>
                    <input type="text"
                        class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400"
                        placeholder="00" minlength="1" maxlength="2">
                </div>
                <button
                    class="border col-span-1 bg-black py-2 rounded-sm border-none active:bg-[#333333] hover:bg-[#1a1a1a] text-white"
                    @click="searchError = true">Search</button>
                <!-- error message -->
                <div class="flex flex-row justify-center items-center gap-6 p-2 bg-red-400 rounded-sm col-span-2 text-white"
                    v-if="searchError">
                    <p class="">Enter valied input</p>
                    <i class="fi fi-tr-circle-xmark" @click="searchError = false"></i>
                </div>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const searchError = ref(false);

</script>