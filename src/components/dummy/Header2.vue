<template>
  <div class="flex flex-col justify-center items-center w-full h-auto relative">
    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/header_image.jpg" alt="hotel image" class="w-full object-cover md:h-full h-screen max-h-[1000px] min-h-[500px]  z-1">
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/50  to-transparent z-2"></div>
    <!-- text content -->
    <div class="flex flex-col justify-center items-center gap-3 w-[50%] h-auto absolute z-3 text-white">
      <h1 class="text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black">Hotel Name</h1>
      <p class="text-center xl:text-2xl md:text-xl text-lg font-thin">Lorem ipsum dolor sit.</p>
      <button class="border px-4 py-1 rounded-lg text-black bg-white/60 hover:bg-white cursor-pointer">Book Now</button>
    </div>
    <!-- default menu bar -->
    <div class="flex flex-row w-full h-auto absolute top-0 left-0 right-0 z-4 text-white p-10 lg:text-lg md:text-base font-medium cursor-default">
      <ul class="md:flex md:flex-row lg:gap-20 md:gap-10 ml-auto hidden">
        <li class="hover:underline"><a href="#facility">Facility</a></li>        
        <li class="hover:underline">Gallery</li>        
        <li class="hover:underline">Accomodation</li>        
        <li class="hover:underline"><a href="#fandq">F&Q</a></li>        
        <li class="hover:underline"><a href="#review">Review</a></li>        
      </ul>
      <i class="fi fi-br-menu-burger md:hidden block text-3xl ml-auto px-2 py-2" @click="mobileMenu = true"></i>
    </div>
    <!-- mobile menubar -->
    <div class="flex flex-col fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-5 md:hidden" v-if="mobileMenu">
      <div class="flex flex-col justify-center items-center w-[80%] h-screen bg-white ml-auto" ref="menuOutside">
        <ul class="flex flex-col gap-6 cursor-default text-2xl">
          <li class="">
            <i class="fi fi-sr-circle-xmark text-2xl" @click="mobileMenu = false"></i>
          </li>        
          <li class="hover:underline"><a href="#facility" @click="mobileMenu = false">Facility</a></li>        
          <li class="hover:underline">Gallery</li>        
          <li class="hover:underline">Accomodation</li>        
          <li class="hover:underline"><a href="#fandq" @click="mobileMenu = false">F&Q</a></li>        
          <li class="hover:underline"><a href="#review" @click="mobileMenu = false">Review</a></li>   
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside, useWindowSize } from '@vueuse/core';
import { ref, watch } from 'vue';

const menuOutside = ref(null)
const mobileMenu = ref(false)
const {width, height} = useWindowSize()

function closeSidedMenu(){
  mobileMenu.value = false
}

onClickOutside(menuOutside, closeSidedMenu)

// close mobile menu permanatly if window size go beyond 'md' screan size.
watch(width,(newVal, oldVal) => {
    if(mobileMenu.value == true && newVal >= 768){
      closeSidedMenu()
    }
})

</script>