<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2">
      <!-- title -->
      <div class="p-4 bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
        <h1 class="text-4xl uppercase font-black text-center text-black">Get better experience with us</h1>
        <p class="text-center text-black font-light ">Experience these exceptional services with us and make your stay
          truly
          unforgettable ! </p>
      </div>
    </div>
    <div
      class="flex flex-col justify-center w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl gap-10 text-white relative h-auto">
      <img :src="hotelstore.gallery[24].url" alt=""
        class="abosolute top-0 left-0 rounded-xl lg:h-[300px] sm:h-[540px] h-[950px] object-cover">
      <div class="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 p-6">
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 w-fit">

          <!-- facility list -->
          <div
            class="flex flex-col justify-center items-center gap-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-8 hover:scale-104 duration-100 shadow-lg"
            v-for="item in facilityList">
            <span class="material-icons text-yellow-400">{{ item.icon }}</span>
            <h4 class="font-bold text-lg md:text-start text-center text-white">{{ item.head }}</h4>
            <p class="md:w-full w-full max-w-[300px] min-w-[200px] lg:text-center text-center">{{
              item.description
            }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { hotelStore } from '@/stores/hotelStore';

const hotelstore = hotelStore()

const facilityList = [
  {
    icon: 'pool',
    head: 'indoor swimming pool',
    description: 'Take a refreshing dip in our heated indoor pool, perfect for year-round relaxation'
  },
  {
    icon: 'spa',
    head: 'Spa and wellness center',
    description: 'Unwind with soothing treatments and therapies at our serene wellness center'
  },
  {
    icon: 'restaurant',
    head: 'Restaurant',
    description: 'Savor delicious cuisine crafted with fresh ingredients at our onsite restaurant'
  },
  {
    icon: 'restaurant',
    head: 'Free parking',
    description: 'Enjoy hassle free parking with complementary parking for all our guests'
  },
]

</script>