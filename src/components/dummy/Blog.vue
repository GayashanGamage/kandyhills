<template>
    <div class="flex flex-col gap-18">
        <SubPageHead pagetitle="Place to visit"
            pagedescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptas totam quis ad animi molestias deserunt dicta possimus minima?">
        </SubPageHead>
        <!-- content -->
        <div
            class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl px-10 py-18 gap-20 bg-[#f6f8fa]">
            <div class="flex flex-row gap-10" :class="{ 'flex-row-reverse': index % 2 == 1 }"
                v-for="item, index in hotelstore.placesToVisit">
                <img :src="item.image" alt="" class="h-[400px] rounded-lg">
                <div class="flex flex-col gap-4">
                    <h2 class="font-black text-3xl">{{ item.name }}</h2>
                    <p class="text-lg font-thin">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <Searchaccomodation></Searchaccomodation>
        <Footer2></Footer2>
    </div>
</template>

<script setup>
import { hotelStore } from '@/stores/hotelStore';
import { ref } from 'vue';
import SubPageHead from './SubPageHead.vue';
import Footer2 from './Footer2.vue';
import Searchaccomodation from './Searchaccomodation.vue';

const hotelstore = hotelStore()

</script>