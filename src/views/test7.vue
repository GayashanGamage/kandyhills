<template>
    <div
        class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl gap-10 text-white relative h-auto mt-30">
        <!-- <img src="/public/features.webp" alt="" class="abosolute top-0 left-0 rounded-xl h-[300px]"> -->
        <div class="absolute top-0 left-0 right-0 bottom-0 p-10">
            <div class="flex flex-col justify-center items-center gap-4">
                <h3 class="font-black text-3xl md:text-start text-center text-white">Get better experience with us</h3>
                <p class="font-light text-lg md:text-start text-center">
                    Experience these exceptional services with us and make your stay truly
                    unforgettable !
                </p>
            </div>

            <!-- facility card collection -->
            <!-- <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-2 md:gap-10 gap-4"> -->
            <!-- single facility card -->
            <!-- <div class="flex flex-row">
                <div class="flex flex-col p-4 rounded-xl shadow-lg  h-auto absolute bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                    v-for="item in facilityList">
                    <span class="material-icons text-yellow-400">{{ item.icon }}</span>
                    <h4 class="font-bold text-lg md:text-start text-center text-white">{{ item.head }}</h4>
                    <p class="md:w-full w-full max-w-[300px] min-w-[200px] lg:text-center text-center">{{
                        item.description
                    }}
                    </p>
                </div>
            </div> -->
            <div class=" flex flex-row p-2 gap-6 w-full">
                <div class="flex flex-col justify-center items-center gap-2 bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 w-full p-4 rounded-lg"
                    v-for="item in facilityList">
                    <span class="material-icons text-yellow-400">{{ item.icon }}</span>
                    <h4 class="font-bold text-lg md:text-start text-center text-white">{{ item.head }}</h4>
                    <p class="md:w-full w-full max-w-[300px] min-w-[200px] lg:text-center text-center">{{
                        item.description
                    }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const facilityList = [
    {
        icon: 'pool',
        head: 'indoor swimming pool',
        description: 'Take a refreshing dip in our heated indoor pool, perfect for year-round relaxation'
    },
    {
        icon: 'spa',
        head: 'Spa and wellness center',
        description: 'Unwind with soothing treatments and therapies at our serene wellness center'
    },
    {
        icon: 'restaurant',
        head: 'Restaurant',
        description: 'Savor delicious cuisine crafted with fresh ingredients at our onsite restaurant'
    },
    {
        icon: 'restaurant',
        head: 'Free parking',
        description: 'Enjoy hassle free parking with complementary parking for all our guests'
    },
]

</script>
<!-- #42442d -->