<template>
  <div
    class="flex flex-col gap-4 w-full max-w-[1450px] min-w-[100px] h-auto mx-auto p-10 rounded-2xl bg-[#1a1a1a] text-white">
    <div class="flex md:flex-row flex-col md:gap-0 gap-6 justify-between">
      <div class="flex flex-row justify-center items-center">
        <p class="font-bold text-2xl text-center">Kandy Hills
          <br class="md:hidden block">
          <span class="font-light text-sm md:text-left text-center">enjoy your vacation
            with peacefull nature near to hill country town</span>
        </p>
      </div>
      <div class="flex flex-row gap-10 justify-center items-center">
        <p class="font-light text-sm md:block hidden">follow us</p>
        <a href="https://web.facebook.com" target="_blank" class="">
          <i class="fi fi-brands-facebook text-2xl"></i>
        </a>
        <a href="https://web.facebook.com" target="_blank" class="">
          <i class="fi fi-brands-instagram text-2xl"></i>
        </a>
        <a href="https://www.youtube.com/" target="_blank" class="">
          <i class="fi fi-brands-youtube text-2xl"></i>
        </a>

      </div>
    </div>
    <hr class="md:w-full w-[50%] mx-auto text-white/30">

    <!-- second column of the footer -->
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <!-- contact detaisl -->
      <div class="flex flex-col md:flex-row gap-4 w-full">
        <div class="w-full">
          <h4 class="font-black text-lg">Contacts</h4>
          <div class="flex flex-col gap-2 pt-4">
            <div class="flex flex-row gap-5">
              <Mail size="18"></Mail>
              <p class="font-light text-sm capitalize">infor@kandyhills.com</p>
            </div>
            <div class="flex flex-row gap-5">
              <Phone size="18"></Phone>
              <p class="font-light text-sm capitalize">071 123 3 789</p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <h4 class="font-black text-lg">Address</h4>
          <p class="font-light text-sm capitalize flex flex-col gap-2 pt-4 leading-6">No : 84,<br>Rajapihilla Mawatha,
            <br>Kandy
            20000
          </p>
        </div>
      </div>

      <!-- accomodation page links -->
      <div class="sm:hidden lg:block">
        <h4 class="font-black text-lg">Quick links</h4>
        <div class="grid md:grid-cols-2 grid-cols-1 w-[400px] gap-2 pt-4">
          <div v-for="(item, index) in pageLisks">
            <p v-if="index % 2 === 0" :key="index" class="font-light text-sm capitalize cursor-pointer hover:underline"
              @click="router.push({ name: item.link })">{{ item.name }}</p>
            <p v-if="index % 2 === 1" :key="index" class="font-light text-sm capitalize cursor-pointer hover:underline"
              @click="router.push({ name: item.link })">
              {{ item.name }}</p>
          </div>
        </div>
      </div>

      <!-- accomodation page links -->
      <div class="">
        <h4 class="font-black text-lg">Accomodations</h4>
        <div class="grid md:grid-cols-2 grid-cols-1 w-[400px] flex-col gap-2 pt-4 ">
          <div v-for="(item, index) in hotelstore.roomList">
            <p v-if="index % 2 === 0" :key="index" class="font-light text-sm capitalize">{{ item.name }}</p>
            <p v-if="index % 2 === 1" :key="index" class="font-light text-sm capitalize">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
    <hr class="md:w-full w-[50%] mx-auto text-white/30">
    <p class="w-fit mx-auto text-sm text-center text-white/30">Design, Develop & Maintain by <span
        class="uppercase font-black">GAMAGE.DEV</span></p>
  </div>
</template>

<!-- TODO add a tag and build a correct link -->
<script setup>
import router from '@/router';
import { hotelStore } from '@/stores/hotelStore';
import { Mail, Phone } from 'lucide-vue-next';
import { ref } from 'vue';

const hotelstore = hotelStore()
const pageLisks = ref([
  {
    name: 'accomodation',
    link: 'accomodation'
  },
  {
    name: 'gallery',
    link: 'gallery'
  },
  {
    name: 'faq',
    link: 'faq'
  },
  {
    name: 'reviews',
    link: 'review'
  },
  {
    name: 'blog',
    link: 'blog'
  },
])

</script>
