<template>
    <div class="flex flex-col md:gap-18 gap-8">
        <SubPageHead pagetitle="Gallery"
            pagedescription='Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ab minus rem architecto eius dolore, facere voluptatibus dignissimos quidem cupiditate quas'>
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">
            <!-- content -->
            <div
                class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl px-2 md:px-10 py-8 md:py-18 gap-10 bg-[#f6f8fa]">
                <div class="flex flex-row gap-6 whitespace-nowrap">
                    <div class="imageRows flex flex-col gap-6 w-[33%]" v-for="item in rows">
                        <img :src="i.url" class="rounded-lg object-cover"
                            v-for="i, index in hotelstore.gallery.slice((hotelstore.gallery.length / rows) * (item - 1), (hotelstore.gallery.length / rows * item) - 1)"
                            :class="{ ' odd:h-[200px]  even:h-[400px]': item % 2 === 1, ' odd:h-[400px] even:h-[200px]': item % 2 === 0 }">
                        {{ i }}</img>
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
// import Menubar2 from '@/components/dummy/Menubar2.vue';
import Searchaccomodation from '@/components/dummy/Searchaccomodation.vue';
import SubPageHead from '@/components/dummy/SubPageHead.vue';
import { hotelStore } from '@/stores/hotelStore';
import { onMounted, onUnmounted, ref } from 'vue';

const hotelstore = hotelStore()

const rows = ref(3);

const checkWindowSize = () => {
    console.log('this is triggered')
    const rowList = document.querySelectorAll('.imageRows')
    if (window.innerWidth > 640) {
        rows.value = 3;
        rowList.forEach(element => {
            element.classList.replace('w-[33%]', 'w-[50%]');
        });

    } else if (window.innerWidth < 640) {
        rows.value = 2;
        rowList.forEach(element => {
            element.classList.replace('w-[33%]', 'w-[50%]');
        });
    }
}

onMounted(() => {
    window.addEventListener('resize', checkWindowSize);
})
onUnmounted(() => {
    window.addEventListener('resize', checkWindowSize);
})

onMounted(() => {
    checkWindowSize();
})

</script>
