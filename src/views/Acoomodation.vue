<template>
    <div class="flex flex-col md:gap-18 gap-10">
        <SubPageHead pagetitle="Accomodation"
            pagedescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit veniam a nesciunt aliquam, iste voluptate repellendus veritatis minima quos.">
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">

            <!-- content container -->
            <div
                class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl md:px-10 px-2 md:py-18 py-6 gap-10 bg-[#f6f8fa]">
                <!-- all room information container -->
                <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

                    <!-- single room information card -->
                    <div class="flex flex-col gap-4 border-1 border-gray-400/50 p-2 rounded-sm shadow-sm"
                        v-for="item in hotelstore.roomList">
                        <img :src="item.image" :alt="item.name"
                            class="h-full xl:max-h-[380px] lg:max-h-[300px] max-h-[350px] min-h-[100px] object-cover w-full rounded-sm">
                        <p class="font-semibold text-lg">{{ item.name }}</p>
                        <hr class="text-gray-400/50">
                        <div class="flex flex-row flex-wrap gap-2">
                            <div class="flex flex-row gap-4 items-center rounded-sm px-3 py-1 cursor-default bg-gray-200 hover:bg-gray-100"
                                v-for="i in item.featurs">
                                <i :class="i.icon"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <p class="text-xl font-semibold">Rs. {{ item.price }}.00 <span
                                    class="font-light text-xs uppercase">Per
                                    Night</span></p>
                            <router-link to="room">
                                <button
                                    class="bg-black hover:bg-black/90 active:bg-black/80 text-white py-1 rounded-sm cursor-pointer w-full">View</button>
                            </router-link>
                        </div>
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
const hotelstore = hotelStore()
</script>
