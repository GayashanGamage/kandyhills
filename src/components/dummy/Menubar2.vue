<template>
  <div
    class="flex flex-row w-full h-auto absolute top-0 left-0 right-0 z-10 text-white p-10 lg:text-lg md:text-base font-medium cursor-default">
    <ul class="md:flex md:flex-row md:items-center lg:gap-20 md:gap-10 ml-auto hidden">
      <li class="hover:underline"><router-link to="/">Home</router-link></li>
      <!-- <li class="hover:underline"><a href="#facility" v-smooth-scroll>Facility</a></li> -->
      <li class="hover:underline"><a href="#gallery" class="" v-smooth-scroll>Gallery</a></li>
      <li class="hover:underline"><a href="#accomadation" class="" v-smooth-scroll>Accomodation</a></li>
      <li class="hover:underline"><a href="#fandq" v-smooth-scroll>F&Q</a></li>
      <li class="hover:underline"><a href="#review" v-smooth-scroll>Review</a></li>
      <button class="flex flex-row justify-center center items-center border py-2 px-6 rounded-sm bg-white"><i
          class="fi fi-sr-circle-phone pr-4 text-black"></i><span class="text-black">071 899 12
          34</span></button>
    </ul>
    <i class="fi fi-br-menu-burger md:hidden block text-3xl ml-auto px-2 py-2" @click="mobileMenu = true"></i>
  </div>
  <div class="flex flex-col fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-10 md:hidden" v-if="mobileMenu">
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
</template>

<script setup>
import { onClickOutside, useWindowSize } from '@vueuse/core';
import { ref, watch } from 'vue';

const menuOutside = ref(null)
const mobileMenu = ref(false)
const { width, height } = useWindowSize()

function closeSidedMenu() {
  mobileMenu.value = false
}

onClickOutside(menuOutside, closeSidedMenu)

// close mobile menu permanatly if window size go beyond 'md' screan size.
watch(width, (newVal, oldVal) => {
  if (mobileMenu.value == true && newVal >= 768) {
    closeSidedMenu()
  }
})
</script>