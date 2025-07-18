<template>
  <div class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl px-10 py-18 gap-10 bg-[#f6f8fa]">

    <!-- component introduction -->
    <div class="flex flex-col gap-2">
      <div class="flex felx-row justify-between items-center">
        <h3 class="text-3xl font-black">Room Collection</h3>
        <!-- accomodation page link -->
        <button
          class="px-10 py-2 w-fit flex flex-row gap-6 justify-center items-center rounded-sm bg-black hover:bg-black/80 active:bg-black/70 text-white"
          @click="router.push({ name: 'accomodation' })">
          <p class="">Show all</p>
          <ArrowRight size="18"></ArrowRight>
        </button>
      </div>
      <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsum nesciunt! Ut perferendis iste
        eveniet ipsa, doloribus similique quia odio.</p>
    </div>

    <!-- all room information container -->
    <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

      <!-- single room information card -->
      <div class="flex flex-col gap-4 border-1 border-gray-400/50 p-2 rounded-sm shadow-sm"
        v-for="item in roomList.slice(0, defaultLimit)">
        <img :src="item.image" :alt="item.name"
          class="h-full xl:max-h-[380px] lg:max-h-[300px] max-h-[350px] min-h-[100px] object-cover w-full rounded-sm">
        <p class="font-semibold text-lg">{{ item.name }}</p>
        <hr class="text-gray-400/50">
        <div class="flex flex-row flex-wrap gap-2">
          <div
            class="flex flex-row gap-4 items-center rounded-sm px-3 py-1 cursor-default bg-gray-200 hover:bg-gray-100"
            v-for="i in item.featurs">
            <p class="sm:text-sm text-xs">{{ i.name }}</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <p class="text-xl font-semibold">Rs. {{ item.price }}.00 <span class="font-light text-xs uppercase">Per
              Night</span></p>
          <router-link to="room">
            <button
              class="bg-black hover:bg-black/90 active:bg-black/80 text-white py-1 rounded-sm cursor-pointer w-full">View</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from '@/router';
import { ArrowRight } from 'lucide-vue-next';
import { ref } from 'vue';

const defaultLimit = ref(3) //TODO: this amount should change according to the width of the screen

const roomList = ref([
  {
    id: 0,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_1/room1.jpg",
    name: "Single Room",
    price: 25000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 1,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_2/room2.jpg",
    name: "Dubble Room",
    price: 35000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 2,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_3/room3.jpg",
    name: "Dualux Room",
    price: 45000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 3,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_4/room4.jpg",
    name: "Hanymon Room",
    price: 75000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 4,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_5/room5.jpg",
    name: "luxeryX Room",
    price: 95000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
]);
</script>