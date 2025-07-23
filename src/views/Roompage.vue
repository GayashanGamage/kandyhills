<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 w-full h-screen">
            <!-- image section -->
            <div class="relative flex flex-col justify-center items-center w-full sm:h-[75%] h-[82%]">
                <img :src="selectedImage" class="absolute w-full h-full object-cover">
                <div
                    class="flex flex-row justify-between items-center text-white z-10 w-full max-w-[1450px] min-w-[200px] p-4">
                    <i class="fi fi-sr-angle-circle-left text-3xl sm:block hidden cursor-pointer"></i>
                    <div class="flex flex-col">
                        <h1 class="text-6xl font-black text-center">{{ hotelstore.roomList[Number(roomid)].name }}</h1>
                        <!-- <p class="text-xl font-light text-center">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tenetur, illo.</p> -->
                    </div>
                    <i class="fi fi-sr-angle-circle-right text-3xl sm:block hidden cursor-pointer"></i>
                </div>
                <Menubar2></Menubar2>
            </div>
            <div class="p-4">
                <div
                    class="grid xl:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-4 sm:border border-0 w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl md:px-10 sm:p-4 p-0 [&>*]:rounded-md">
                    <img :src="hotelstore.roomList[Number(roomid)].image"
                        :alt="hotelstore.roomList[Number(roomid)].name"
                        class="w-full h-full object-cover hover:opacity-75" @click="loadOriginalImage">
                    <img :src="i.url" :alt="i.name" v-for="i, index in hotelstore.gallery.slice(6, 13)"
                        class="w-full h-full object-cover hover:opacity-75" @click="loadSelecteImage(index)">
                </div>
            </div>
        </div>
        <!-- room content -->
        <div class="px-4">
            <div class="flex md:flex-row flex-col gap-4 w-full max-w-[1450px] min-w-[200px] mx-auto">
                <!-- featurs section -->
                <div
                    class="flex flex-col gap-6 sm:p-10 p-4 w-full max-w-[1100px] min-w-[200px] rounded-2xl bg-[#f6f8fa]">
                    <h3 class="font-bold md:text-3xl text-xl">Facilities</h3>
                    <div class="grid lg:grid-cols-3 grid-cols-2 gap-2 cursor-default">
                        <div class="flex flex-row gap-4 py-2 px-4 rounded-md bg-white hover:bg-[#f6f8fa]/50"
                            v-for="item in hotelstore.roomList[Number(roomid)].featurs">
                            <i :class="item.icon"></i>
                            <p class="sm:text-base text-sm ">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
                <!-- search section -->
                <div
                    class="flex flex-col gap-4 w-full md:max-w-[355px] max-w-[750px] min-w-[200px] rounded-2xl p-10 bg-[#f6f8fa]">
                    <h3 class="font-bold md:text-3xl text-xl">Book this room</h3>
                    <button class="w-full py-2 rounded-sm bg-blue-600 text-white shadow-sm"
                        @click="bookRoom">Booking.com</button>
                    <button class="w-full py-2 rounded-sm bg-red-300 text-white shadow-sm"
                        @click="bookRoom">Airbnb.com</button>
                </div>
            </div>
        </div>
        <!-- other rooms -->
        <div class="p-4">
            <div
                class="flex flex-col gap-6 sm:p-10 p-4 w-full max-w-[1450px] min-w-[200px] rounded-2xl bg-[#f6f8fa] mx-auto">
                <h3 class="font-bold md:text-3xl text-xl">Other rooms</h3>
                <div class="grid md:grid-cols-4 grid-cols-2 gap-6">
                    <div class="flex flex-col gap-4 border p-4 rounded-md" v-for="i in hotelstore.roomList">
                        <img :src="i.image" alt="room-image" class="">
                        <div class="flex flex-row justify-between">
                            <h3 class="">{{ i.name }}</h3>
                            <button class="">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer section -->
        <div class="p-2">
            <Footer2></Footer2>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    roomid: String
})

import Footer2 from '@/components/dummy/Footer2.vue';
import Menubar2 from '@/components/dummy/Menubar2.vue';
import { hotelStore } from '@/stores/hotelStore';
import { ref } from 'vue';

const hotelstore = hotelStore()

const selectedImage = ref(hotelstore.roomList[Number(props.roomid)].image)

const loadSelecteImage = (image) => {
    selectedImage.value = hotelstore.gallery[image].url
}

const loadOriginalImage = () => {
    selectedImage.value = hotelstore.roomList[Number(props.roomid)].image
}

const bookRoom = () => {
    window.open('https://www.booking.com/hotel/lk/kandy-hills.html', '_blank')
}

const features = [
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    },
    {
        icon: 'fi fi-sr-bed-alt',
        name: 'King size bed'
    }
]

const roomData = [
    {
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyhill.jpg',
        name: 'Basic room'
    },
    {
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyhill.jpg',
        name: 'Basic room'
    },
    {
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyhill.jpg',
        name: 'Basic room'
    },
    {
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/kandyhill.jpg',
        name: 'Basic room'
    },
]

// onMounted(() => {
//     selectedImage.value = hotelstore.roomList[Number(props.roomid)].image
// })

</script>
