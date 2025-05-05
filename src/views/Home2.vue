<template>
  <div class="">
    <Header2></Header2>
    <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-6">
      <Facility2 id="facility"></Facility2>
      <Rooms2></Rooms2>
      <QandA2 id="fandq"></QandA2>
      <Review2 id="review"></Review2>
      <footer2></footer2>
    </div>
  </div>
</template>
<script setup>
import Facility2 from '@/components/dummy/Facility2.vue';
import Footer2 from '@/components/dummy/Footer2.vue';
import Header2 from '@/components/dummy/Header2.vue';
import QandA2 from '@/components/dummy/QandA2.vue';
import Review2 from '@/components/dummy/Review2.vue';
import Rooms2 from '@/components/dummy/Rooms2.vue';
</script>
  