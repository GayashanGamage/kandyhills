<template>
  <div
    class="flex flex-col gap-10 md:px-10 px-2 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">

    <!-- component introduction -->
    <div class="flex flex-col md:flex-row md:justify-between gap-6">
      <div class="flex flex-col md:w-[70%] w-full gap-2">
        <h3 class="text-3xl font-black">Room Collection</h3>
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsum nesciunt! Ut
          perferendis
          iste
          eveniet ipsa, doloribus similique quia odio.</p>
      </div>
      <!-- accomodation page link -->
      <button
        class="flex flex-row justify-center items-center gap-4 bg-black rounded-sm text-white text-sm py-1 px-6 w-fit h-fit"
        @click="router.push({ name: 'accomodation' })">
        <p class="">Show all</p>
        <ArrowRight size="18"></ArrowRight>
      </button>
    </div>

    <!-- all room information container -->
    <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

      <!-- single room information card -->
      <div class="flex flex-col gap-4 border-1 border-gray-400/50 p-4 rounded-sm shadow-sm"
        v-for="item, index in roomList.slice(0, defaultLimit)" @mouseenter="roomCardIn(index)"
        @mouseleave="roomCardOut(index)">
        <img :src="item.image" :alt="item.name"
          class="h-full xl:max-h-[380px] lg:max-h-[300px] max-h-[350px] min-h-[100px] object-cover w-full rounded-sm duration-200"
          :id="`room${index}`">
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
          <p class="text-xl font-semibold">Rs. {{ item.price }}.00 <span
              class="font-light text-xs uppercase hidden sm:block">Per
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

// this is for animate room card ( zoom in )
const roomCardIn = (index) => {
  const img = document.querySelector(`#room${index}`).classList
  img.add('scale-105')
}

// this is for animate room card ( zoom out )
const roomCardOut = (index) => {
  const img = document.querySelector(`#room${index}`).classList
  img.remove('scale-105')
}

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