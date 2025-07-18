<template>
  <div class="relative">
    <Header2></Header2>
    <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">
      <Facility2 id="facility"></Facility2>
      <Gallery2 id="gallery"></Gallery2>
      <Rooms2 id="accomadation"></Rooms2>
      <QandA2 id="fandq"></QandA2>
      <Review2 id="review"></Review2>
      <Placetovisite></Placetovisite>
      <Searchaccomodation></Searchaccomodation>
      <footer2></footer2>
    </div>
    <!-- this is button to scroll to top -->
    <div class="flex flex-col justify-center items-center w-7 h-7 bg-black rounded-full fixed right-0 bottom-0 m-20">
      <p class="" @click="scrollToTop">
        <i class="fi fi-sr-angle-circle-up text-4xl text-yellow-400"></i>
      </p>
    </div>
  </div>
</template>
<script setup>
import Facility2 from '@/components/dummy/Facility2.vue';
import Footer2 from '@/components/dummy/Footer2.vue';
import Gallery2 from '@/components/dummy/Gallery2.vue';
import Header2 from '@/components/dummy/Header2.vue';
import Placetovisite from '@/components/dummy/Placetovisite.vue';
import QandA2 from '@/components/dummy/QandA2.vue';
import Review2 from '@/components/dummy/Review2.vue';
import Rooms2 from '@/components/dummy/Rooms2.vue';
import Searchaccomodation from '@/components/dummy/Searchaccomodation.vue';
</script>
