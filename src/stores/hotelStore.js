import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const hotelStore = defineStore("hotel  ", () => {
  
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
  
  return {roomList};
});
