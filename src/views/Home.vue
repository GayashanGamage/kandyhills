<!-- this is depricated page -->

<template>
    <div class="relative">
        <Header2 id="pageTop"></Header2>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-6">
            <Facility2></Facility2>
            <Rooms2></Rooms2>
            <Review2></Review2>
            <QandA2></QandA2>
            <Footer2></Footer2>
            <!-- scroll bar -->
            <div class="flex flex-col justify-center items-center w-6 h-6 border fixed right-0 bottom-0 m-20 bg-black rounded-full"
                @click="scrolToTop">
                <i class="fi fi-sr-angle-circle-up text-4xl text-yellow-400"></i>
            </div>
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

const scrolToTop = () => {
    window.scrollTo(0, 0)
}

</script>