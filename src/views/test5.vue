<template>
    <div class="flex flex-col justify-center items-center h-screen w-full">
        <!-- image carousel elemt -->
        <div class="flex flex-row gap-2 items-center ">
            <!-- conrall button -->
            <button class="border py-1 px-2 h-[50px] rounded-sm" @click="currentElement -= 1">Next</button>
            <!-- view port -->
            <div class="flex flex-row gap-4 border w-[300px] h-auto rounded-sm overflow-hidden p-4">
                <!-- single element -->
                <div class="flex flex-row gap-2 transition-transform duration-500"
                    :style="{ transform: `translateX(-${currentElement * (100 / countries.length)}%)` }">
                    <div class="border bg-amber-500 w-[300px] h-[200px] rounded-sm transition-transform duration-300"
                        v-for="item in countries" :key="item">
                        <p class="w-full">{{ item }}</p>
                    </div>
                </div>
            </div>
            <!-- conrall button -->
            <button class="border py-1 px-2 h-[50px] rounded-sm" @click="currentElement += 1">Previouse</button>
            <!-- direct item access -->
        </div>
        <div class="flex flex-row gap-1 h-auto p-2 w-[300px] mr-9 rounded-sm mt-4">
            <div class="w-full h-3 border rounded-full" v-for="item, index in countries"
                @click="currentElement = index"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const currentElement = ref(0)
const countries = ref(['India', 'USA', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia']);

watch(currentElement, (newVal, oldVal) => {
    if (newVal === countries.value.length) {
        currentElement.value = 0
    } else if (newVal < 0) {
        currentElement.value = countries.value.length - 1
    }
    console.log(currentElement.value, newVal, oldVal, countries.value.length);
})

</script>