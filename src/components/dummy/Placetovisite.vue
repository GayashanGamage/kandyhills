<template>
    <div
        class="flex flex-col gap-10 md:px-10 px-2 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
        <div class="flex flex-col gap-5">

            <!-- review section title -->
            <div
                class="flex md:flex-row flex-col md:justify-between md:items-center justify-start items-start w-full md:gap-0 gap-6">
                <div class="flex flex-col gap-4">
                    <h3 class="font-black text-3xl">Enjoy surrounding areas</h3>
                    <p class="text-lg font-light">From scenic landscape to local attractions, enjoy everything the
                        surrounding area has to offer</p>
                </div>
                <button
                    class="flex flex-row justify-center items-center gap-4 bg-black rounded-sm text-white text-sm py-1 px-6"
                    @click="router.push({ name: 'review' })">
                    <span class="">Read all</span>
                    <MoveRight></MoveRight>
                </button>
            </div>
        </div>
        <div class="w-full h-auto flex flex-col">
            <div class="flex md:flex-row flex-col gap-2 rounded-sm w-full">
                <div class="placess md:h-[400px] h-[200px] rounded-sm duration-200 relative"
                    :class="{ 'md:w-[300%] h-[400px]': index == hoverItem, 'md:w-full w-full': index != hoverItem }"
                    v-for="item, index in hotelsoter.placesToVisit" :id="`item${index}`"
                    @mouseenter="hoverItem = index">
                    <img :src="item.image" alt="" class="w-full h-full object-cover rounded-sm absolute">
                    <div
                        class="flex flex-row  justify-between items-end absolute bottom-0 left-0 right-0 text-white bg-black/40 md:min-h-[140px] min-h-[60px] p-4 rounded-sm">
                        <div class="w-[80%]">
                            <p class="font-black text-2xl">{{ item.name }}</p>
                            <p :class="{ 'hidden': index != hoverItem, 'block': index == hoverItem }">{{
                                item.description.slice(0, 80) }}</p>
                        </div>
                        <button
                            class="border rounded-sm bg-white/30 hover:bg-white/50 active:bg-white/60 h-fit w-fit py-1 px-6 text-sm"
                            :class="{ 'hidden': index != hoverItem, 'block': index == hoverItem }"
                            @click="router.push({ name: 'blog', hash: `#${item.hash}` })">More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { hotelStore } from '@/stores/hotelStore';
import { MoveRight } from 'lucide-vue-next';
import { ref } from 'vue';

const hotelsoter = hotelStore()

const hoverItem = ref(0)
</script>