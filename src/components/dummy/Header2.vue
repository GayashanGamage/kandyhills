<template>
  <div class="flex flex-col justify-center w-full h-auto relative mb-6">
    <Menubar2></Menubar2>
    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyhill.jpg" alt="hotel image"
      class="w-full object-cover h-screen max-h-[1000px] min-h-[500px]  z-1">

    <!-- this is for menu bar -->
    <div
      class="absolute top-0 md:h-[150px] h-[100px] left-0 right-0 bg-gradient-to-b md:from-black from-black/60  to-transparent z-2">
    </div>

    <!-- text content with booking feature - main container -->
    <div class="flex flex-col justify-end items-center md:items-start gap-7 w-full h-full absolute z-3 text-white 
        p-5">
      <!-- text content with booking feature - sub container -->
      <div
        class="flex flex-col gap-4 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-40 w-full px-4 py-2 md:w-[500px]">
        <h1 class="text-center md:text-5xl text-6xl font-black uppercase">
          <span class="text-lg">The</span> <br>Kandy Hills
        </h1>
        <p class="text-center xl:text-sm md:text-sm text-sm font-thin uppercase">enjoy your vacation <br> with
          peacefull
          nature near to hill country town</p>
        <button
          class="px-4 py-2 rounded-sm text-black bg-white hover:bg-white/90 active:bg-white/80 cursor-pointer w-full uppercase md:block hidden"
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
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
// import Menubar2 from './Menubar2.vue';
import router from '@/router';
import Menubar2 from '@/components/dummy/Menubar2.vue';


const bookingSection = ref(false)
const searchError = ref(false)

</script>