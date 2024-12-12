<template>
  <div class="v-level-one-container">
    <Facility></Facility>
    <Footer></Footer>
    <Review></Review>
    <QandA></QandA>
    <Rooms></Rooms>
  </div>
</template>

<script setup>
import Facility from "@/components/Facility.vue";
import Footer from "@/components/Footer.vue";
import QandA from "@/components/QandA.vue";
import Review from "@/components/Review.vue";
import Rooms from "@/components/Rooms.vue";
</script>

<style>
.c-level-one-container {
  width: 99.5vw;
  height: auto;
}
</style>
