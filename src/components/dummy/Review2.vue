<template>
  <div
    class="flex flex-col gap-6 md:px-10 p-2 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
    <div class="flex flex-col gap-5">

      <!-- review section title -->
      <div class="flex lg:flex-row flex-col lg:justify-between lg:items-center w-full gap-6">
        <h3 class="font-black text-3xl">Guest satisfaction</h3>
        <button
          class="flex flex-row justify-center items-center gap-4 bg-black rounded-sm text-white text-sm py-1 px-6 w-fit"
          @click="router.push({ name: 'review' })">
          <span class="">All reviews</span>
          <MoveRight></MoveRight>
        </button>
      </div>

      <!-- review section body -->
      <div class="grid lg:grid-cols-2 grid-cols-1 md:gap-5 gap-12">

        <!-- booking site refference -->
        <div class="flex flex-col gap-4">
          <p class="text-lg font-light">
            Discover what makes [ resort name ] a favorite escape ! from stunning
            views to exceptional service, here is a glimpse of what our guests
            love about the stay
          </p>
          <div class="grid grid-cols-3 gap-2">

            <!-- ratings for each platforms -->
            <div class="flex flex-col gap-2 justify-end items-center" v-for="item in platformsRatings">
              <img :src="item.platform" alt="" class="sm:w-30 w-20 h-auto object-cover rounded-md">
              <div
                class="flex flex-col gap-2 jusitfy-center items-center bg-black/80 py-2 px-4 rounded-md max-w-[200px] min-w-[80px] w-full text-white">
                <div class="sm:flex sm:flex-row gap-1 hidden">
                  <Star :class="{ 'text-yellow-300': index < item.rating }" v-for="i, index in item.score" size="12">
                  </Star>
                </div>
                <p><span class="font-black text-2xl">{{ item.rating }}</span>/<span class="font-thin text-sm">{{
                  item.score
                    }}</span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- client review section -->
        <div class="lg:border-l lg:border-l-black ">
          <div class="flex flex-col gap-2 items-center p-4">
            <!-- view port -->
            <div class="flex flex-row  w-full h-auto rounded-sm overflow-hidden">
              <!-- single element -->
              <div
                class="flex flex-row transition-transform duration-500 border border-gray-200 bg-white shadow-sm rounded-sm"
                :style="{ transform: `translateX(-${currentElement * 100}%)` }">
                <div class="min-w-[100%] h-auto rounded-sm transition-transform duration-300 py-4"
                  v-for="item in hotelstore.review.slice(currentElement, currentElement + 4)" :key="item">
                  <div class="flex flex-col justify-center items-center gap-2">
                    <img :src="item.image" alt="" class="w-16 h-16 rounded-full object-cover">
                    <p class="flex flex-row items-center gap-2"><span class="text-2xl font-black">{{
                      item.name
                        }}</span><span class="text-sm font-light">from</span><span class="text-3xl">{{ item.from
                        }}</span></p>
                    <p class="text-center">{{ item.review }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- conrall button -->
            <div class="flex flex-row gap-2 mt-4">
              <button class="border py-1 px-2 rounded-sm" @click="currentElement += 1">
                <ChevronLeft size="20"></ChevronLeft>
              </button>
              <button class="border py-1 px-2  rounded-sm" @click="currentElement -= 1">
                <ChevronRight size="20"></ChevronRight>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { hotelStore } from "@/stores/hotelStore";
import { ChevronLeft, ChevronRight, ChevronsLeft, MoveRight, Star } from "lucide-vue-next";
ChevronLeft
import { ref, watch } from 'vue';
const hotelstore = hotelStore()

const currentElement = ref(0)
const countries = ref(['India', 'USA', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia']);

const platformsRatings = ref([
  {
    platform: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/common/booking.png',
    score: 10,
    rating: 8,
    URL: "https://www.booking.com/hotel/lk/kandy-hills.html",
  },
  {
    platform: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/common/agoda.png",
    score: 10,
    rating: 7,
    URL: "https://www.agoda.com/kandy-hills-resort/hotel/kandy-lk.html?ds=UkYtt9JOOA9wpOhJ",
  },
  {
    platform: "public/airbnb.png",
    score: 5,
    rating: 4,
    URL: "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/common/airbnb.png",
  },
]);

const select_review = ref(0);
const review = ref([
  {
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
    from: "🇩🇪",
    name: "Christian Joe",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
    platform: {
      name: "Booking.com",
      url: "https://www.booking.com/hotel/lk/kandy-hills.html",
    }
  },
  {
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_2.webp",
    from: "🇸🇪",
    name: "Joe rogan",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
  },
  {
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
    from: "🇳🇴",
    name: "oewifj woiefj",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
  },
]);

watch(currentElement, (newVal, oldVal) => {
  if (newVal === review.value.length) {
    currentElement.value = 0
  } else if (newVal < 0) {
    currentElement.value = review.value.length - 1
  }
})
</script>
