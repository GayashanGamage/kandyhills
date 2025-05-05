<template>
  <div class="flex flex-col gap-6 md:p-10 p-4 w-full max-w-[1450px] min-w-[200px] mx-auto">
    <h3 class="text-3xl font-black">Room Collection</h3>
    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsum nesciunt! Ut perferendis iste eveniet ipsa, doloribus similique quia odio.</p>
    <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      <div class="flex flex-col gap-4 border-1 border-gray-400/50 p-3 rounded-lg hover:shadow-lg" v-for="item in roomList.slice(0, defaultLimit)">
        <img :src="item.image" :alt="item.name" class="h-full xl:max-h-[200px] lg:max-h-[300px] max-h-[250px] min-h-[100px] object-cover w-full rounded-lg">
        <div class="flex flex-row justify-between">
          <p class="font-semibold text-lg">{{ item.name }}</p>
          <!-- <p class="">Rs. {{ item.price }}.00</p> -->
          <button class="border-2 border-gray-200 px-4 py-1 rounded-sm hover:bg-[#e7c873] hover:border-[#e7c873] cursor-pointer">Check Availability</button>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div class="flex flex-row gap-4 items-center hover:bg-[#f6f8fa] bg-[#dddfe1]/50 rounded-md p-1 cursor-default" v-for="i in item.featurs">
            <i class="material-icons text">{{ i.icon }}</i>
            <p class="sm:text-base text-sm">{{ i.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="border px-16 py-2 w-fit mx-auto" @click="defaultLimit = 5, roomMoreButton = false" v-if="roomMoreButton">Show all</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const defaultLimit = ref(3)
const roomMoreButton = ref(true)


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