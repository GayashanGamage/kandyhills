<template>
  <div class="flex flex-col justify-center w-full h-auto relative mb-6">
    <Menubar2></Menubar2>
    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyhill.jpg" alt="hotel image"
      class="w-full object-cover h-screen max-h-[1000px] min-h-[500px]  z-1">
    <div
      class="absolute top-0 md:h-[150px] h-[100px] left-0 right-0 bg-gradient-to-b md:from-black from-black/60  to-transparent z-2">
    </div>
    <!-- text content with booking feature -->
    <!-- <div class="flex flex-col  border gap-3 w-[30%] h-auto absolute z-3 text-white mr-10"> -->
    <div
      class="flex flex-col justify-center items-center gap-7 w-[30%] h-auto absolute z-3 text-white ml-10 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 py-10 px-5">
      <h1 class="text-center xl:text-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black uppercase">The <br>
        Kandy
        Hills</h1>
      <p class="text-center xl:text-sm md:text-xl text-lg font-thin uppercase">enjoy your vacation <br> with
        peacefull
        nature near to hill country town</p>
      <button
        class="px-4 py-2 rounded-sm text-black bg-white hover:bg-white/90 active:bg-white/80 cursor-pointer w-full uppercase"
        v-if="!bookingSection" @click="bookingSection = true">Book
        Now</button>
      <!-- booking section -->
      <div class="grid grid-cols-2 gap-2 h-auto w-full rounded-sm bg-white p-4" v-if="bookingSection">
        <!-- select data 'from' section -->
        <div class="flex flex-col gap-1">
          <p class="text-xs text-black">From</p>
          <input type="date" class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400">
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-black">To</p>
          <input type="date" class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400">
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-black">Adults</p>
          <input type="text" class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400"
            minlength="1" maxlength="2" placeholder="02">
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-xs text-black">Childs</p>
          <input type="text" class="border border-gray-400 w-full rounded-sm py-2 px-4 outline-none text-gray-400"
            placeholder="00" minlength="1" maxlength="2">
        </div>
        <button class="border col-span-2 bg-black py-2 rounded-sm border-none active:bg-[#333333] hover:bg-[#1a1a1a]"
          @click="searchError = true">Search</button>
        <!-- error message -->
        <div class="flex flex-row justify-center items-center gap-6 p-2 bg-red-400 rounded-sm col-span-2 text-white"
          v-if="searchError">
          <p class="">Enter valied input</p>
          <i class="fi fi-tr-circle-xmark" @click="searchError = false"></i>
        </div>
      </div>
    </div>
    <!-- default menu bar -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Menubar2 from './Menubar2.vue';


const bookingSection = ref(false)
const searchError = ref(false)

</script>