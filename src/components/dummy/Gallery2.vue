<template>
  <div class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl px-10 py-18 gap-10 bg-[#f6f8fa]">
    <div class="flex flex-col gap-4">
      <h3 class="font-black text-3xl">How we looks like</h3>
      <p class="font-light text-lg">
        Experience these exceptional services with us and make your stay truly
        unforgettable !
      </p>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="relative" :class="{ 'col-span-2': index == 0 || index == 5 }" v-for="item, index in gallery">
        <img class="rounded-lg max-h-[300px] w-full min-h-[200px] h-full object-cover" :key="item.name"
          :src="item.url" />
        <div
          class="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 rounded-lg"
          @mouseenter="iconShow(index)" @mouseleave="iconHide(index)" @click="router.push({ name: 'gallery' })">
          <!-- <SearchX class="text-white hidden" :id="`searchIcon${index}`"></SearchX> -->
          <button class="text-white hidden border py-1 px-6 rounded-sm" :id="`searchIcon${index}`">MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { icons, SearchX } from 'lucide-vue-next';
import { ref } from 'vue';

const iconShow = (index) => {
  const icon = document.querySelector(`#searchIcon${index}`);
  icon.classList.replace('hidden', 'block');
}

const iconHide = (index) => {
  const icon = document.querySelector(`#searchIcon${index}`);
  icon.classList.replace('block', 'hidden');
}

const gallery = ref([
  {
    name: 'gallery1',
    url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery8.jpg',
    category: 'rooms'
  },
  {
    name: 'gallery1',
    url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery2.jpg',
    category: 'rooms'
  },
  {
    name: 'gallery1',
    url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery6.jpg',
    category: 'rooms'
  },
  {
    name: 'gallery1',
    url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery3.jpg',
    category: 'rooms'
  },
  {
    name: 'gallery1',
    url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery1.jpg',
    category: 'rooms'
  },
  {
    name: 'gallery1',
    url: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery5.jpg',
    category: 'rooms'
  },
])

</script>