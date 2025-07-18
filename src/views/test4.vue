<template>
    <div class="flex flex-col justify-center items-center h-screen w-full">
        <!-- image carousel elemt -->
        <div class="flex flex-row gap-2 items-center">
            <!-- conrall button -->
            <button class="border py-1 px-2 h-[50px] rounded-sm">Next</button>
            <!-- view port -->
            <div class="flex flex-row gap-4 border w-[400px] h-[200px] rounded-sm p-4">
                <!-- single element -->
                <div class="bg-red-400 min-w-[350px] h-full border duration-500"
                    :class="`-translate-x-[${currentElement * 50}%]`" v-for="(item, index) in countries" :key="index">
                    <p class="w-full">{{ item }}</p>
                </div>
            </div>
            <!-- conrall button -->
            <button class="border py-1 px-2 h-[50px] rounded-sm" @click="currentElement += 1">Previouse</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentElement = ref(1)
const countries = ref(['India', 'USA', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia']);
</script>