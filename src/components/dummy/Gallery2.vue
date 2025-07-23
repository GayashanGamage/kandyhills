<template>
  <div
    class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl md:px-10 px-4 py-18 gap-10 bg-[#f6f8fa]">
    <div class="flex flex-col gap-4">
      <h3 class="font-black text-3xl">A Glimpse of Our gallery</h3>
      <p class="font-light text-lg">
        Experience these exceptional services with us and make your stay truly
        unforgettable !
      </p>
    </div>
    <div class="grid grid-cols-4 md:gap-4 gap-2">
      <div class="relative" :class="{ 'col-span-2': index == 0 || index == 5 }"
        v-for="item, index in hotelstore.gallery.slice(14, 20)">
        <img class="rounded-lg max-h-[300px] w-full min-h-[200px] h-full object-cover" :key="item.name"
          :src="item.url" />
        <div
          class="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 rounded-lg"
          @mouseenter="iconShow(index)" @mouseleave="iconHide(index)" @click="router.push({ name: 'gallery' })">
          <!-- <SearchX class="text-white hidden" :id="`searchIcon${index}`"></SearchX> -->
          <button class="text-white hidden border md:py-1 md:px-6 py-1 px-4 rounded-sm sm:text-base text-sm"
            :id="`searchIcon${index}`">MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { hotelStore } from '@/stores/hotelStore';
import { icons, SearchX } from 'lucide-vue-next';
import { ref } from 'vue';
const hotelstore = hotelStore()

const iconShow = (index) => {
  const icon = document.querySelector(`#searchIcon${index}`);
  icon.classList.replace('hidden', 'block');
}

const iconHide = (index) => {
  const icon = document.querySelector(`#searchIcon${index}`);
  icon.classList.replace('block', 'hidden');
}
</script>