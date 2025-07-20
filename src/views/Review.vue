<template>
    <div class="flex flex-col gap-16">
        <SubPageHead pagetitle="Guest Reviews"
            pagedescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit veniam a nesciunt aliquam, iste voluptate repellendus veritatis minima quos.">
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">
            <!-- page content -->
            <div
                class="grid grid-cols-3 gap-10 px-10 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
                <div class="flex flex-col gap-2 justify-center items-center border-2 border-gray-200 rounded-lg p-6 bg-white hover:scale-104 duration-200"
                    v-for="item in hotelstore.review">
                    <img :src="item.image" alt="" class="w-20 rounded-full border-4 border-gray-200">
                    <p class="text-xs"><span class="font-bold text-lg">{{ item.name }}</span> from <span
                            class="text-lg">{{
                                item.from }}</span>
                    </p>
                    <p class="font-light">{{ item.review }}</p>
                    <p class="italic"><a :href="item.platform.url" class="">{{ item.platform.name }}</a>
                    </p>
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