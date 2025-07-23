<template>
    <div class="flex flex-col md:gap-16 gap-8">
        <SubPageHead pagetitle="Guest Reviews"
            pagedescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit veniam a nesciunt aliquam, iste voluptate repellendus veritatis minima quos.">
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">
            <!-- page content -->
            <div
                class="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-2 md:px-10 px-2 md:py-18 py-8 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
                <div class="flex flex-col gap-2 justify-start items-center border-2 border-gray-200 rounded-lg md:p-6 p-2 bg-white hover:scale-104 duration-200"
                    v-for="item in hotelstore.review">
                    <img :src="item.image" alt="" class="w-20 rounded-full border-4 border-gray-200">
                    <p class="text-xs text-center"><span class="font-bold text-lg">{{ item.name }}</span><br
                            class="sm:hidden block"> from <span class="text-lg">{{
                                item.from }}</span>
                    </p>
                    <p class="font-light sm:text-base text-sm">{{ item.review }}</p>
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