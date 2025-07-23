<template>
  <div
    class="flex flex-col gap-10 md:px-10 px-0 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
    <div class="flex flex-col gap-2">
      <!-- title -->
      <div class="flex flex-col gap-4">
        <h1 class="font-black text-3xl text-center">Get better experience with us</h1>
        <p class="font-light text-lg text-center ">Experience these exceptional services with us and make your stay
          truly
          unforgettable ! </p>
      </div>
    </div>
    <div
      class="flex flex-col justify-center w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl gap-10 text-white relative h-auto">
      <img :src="hotelstore.gallery[6].url" alt=""
        class="abosolute top-0 left-0 rounded-xl lg:h-[380px] md:h-[525px] sm:h-[400px] h-[600px] object-cover">
      <div class="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 md:p-6 p-2">
        <div class="grid lg:grid-cols-4 grid-cols-2 md:gap-6 gap-1 w-fit">

          <!-- facility list -->
          <div
            class="flex flex-col justify-center items-center gap-4 bg-black/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 md:p-8 p-4 md:hover:scale-104 hover:scale-102 duration-100 shadow-lg"
            v-for="item in facilityList">
            <span class="material-icons text-yellow-400 scale-150">{{ item.icon }}</span>
            <h4 class="font-bold sm:text-xl text-xl text-center text-white">{{ item.head }}</h4>
            <p class="md:w-full text-center text-base font-thin">{{
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