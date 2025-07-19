<template>
    <div class="">
        <SubPageHead pagetitle="Gallery"
            pagedescription='Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ab minus rem architecto eius dolore, facere voluptatibus dignissimos quidem cupiditate quas'>
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">
            <p class="">this is for gallery of property</p>
            <Searchaccomodation></Searchaccomodation>
            <Footer2></Footer2>
        </div>
    </div>
</template>
<script setup>
import Footer2 from '@/components/dummy/Footer2.vue';
// import Menubar2 from '@/components/dummy/Menubar2.vue';
import Searchaccomodation from '@/components/dummy/Searchaccomodation.vue';
import SubPageHead from '@/components/dummy/SubPageHead.vue';
</script>