<template>
    <div class="flex flex-col md:gap-18 gap-8">
        <SubPageHead pagetitle="Places to visit"
            pagedescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptas totam quis ad animi molestias deserunt dicta possimus minima?">
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">
            <!-- content -->
            <div
                class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl md:px-10 px-2 md:py-18 py-8 gap-20 bg-[#f6f8fa]">
                <div class="flex lg:flex-row flex-col gap-10"
                    :class="{ 'lg:flex-row-reverse flex-col': index % 2 == 1 }"
                    v-for="item, index in hotelstore.placesToVisit" :id="item.hash">
                    <img :src="item.image" alt="" class="md:h-[400px] h-[250px] rounded-lg object-cover">
                    <div class="flex flex-col gap-4 md:p-0 p-2">
                        <h2 class="font-black text-3xl">{{ item.name }}</h2>
                        <p class="text-lg font-normal">{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <Searchaccomodation></Searchaccomodation>
            <Footer2></Footer2>
        </div>
    </div>
</template>

<script setup>
import Footer2 from '@/components/dummy/Footer2.vue';
import Searchaccomodation from '@/components/dummy/Searchaccomodation.vue';
import SubPageHead from '@/components/dummy/SubPageHead.vue';
import { hotelStore } from '@/stores/hotelStore';
import { ref } from 'vue';

const hotelstore = hotelStore()
</script>