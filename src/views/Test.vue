<!-- <template>
    <div class="flex flex-col justify-center items-center w-full h-screen">
        <div class="w-[50%] h-[400px] border p-10 relative">
            <div class="flex flex-row">
                <div class="flex flex-row justify-center items-center border w-full h-full rounded-sm"
                    v-for="item in countries">{{ item }}
                </div>
            </div>
            <div
                class="flex flex-row justify-between items-center border w-full h-full rounded-sm absolute top-0 left-0">
                <div class="border rounded-sm" @click="flowLeft">
                    <CircleArrowLeft size="40"></CircleArrowLeft>
                </div>
                <div class="border rounded-sm" @click="flotRight">
                    <CircleArrowRight size=" 40" class="float-right">
                    </CircleArrowRight>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CircleArrowLeft, CircleArrowRight } from 'lucide-vue-next';
import { ref } from 'vue';
const countries = ref(['canada', 'usa', 'mexico', 'argentina'])

const loaded = ref(0)

const flowLeft = () => {
    if (countries.value.length - 1 == loaded.value) {
        loaded.value = 0
    } else {
        loaded.value += 1
    }
}
const flotRight = () => {
    if (loaded.value == 0) {
        loaded.value = countries.value.length - 1
    } else {
        loaded.value -= 1
    }
}

</script> -->

<!-- TODO amination testing part -->
<!-- <template>
    <div class="border w-fit px-20 overflow-hidden">
        <div class="flex flex-row gap-4">
            <div class="border w-100 h-40 rounded-sm duration-500 -translate-x-100 opacity-0" id="element1">
            </div>
            <div class="border w-100 h-40 rounded-sm duration-500 bg-red-400" id="element"></div>
            <div class="border w-100 h-40 rounded-sm duration-500 -translate-x-100 opacity-0" id="ele"></div>
        </div>
        <button @click="animate" class="border">click me</button>
    </div>
</template>

<script setup>
const animate = () => {
    // out
    const ele = document.querySelector('#element').classList
    ele.add('translate-x-100')
    ele.add('opacity-0')
    // in
    const ele1 = document.querySelector('#element1').classList
    // ele1.replace('hidden', 'block')
    ele1.replace('-translate-x-100', '-translate-x-0')
    ele1.replace('opacity-0', 'opacity-100')
    }
    const animate = () => {
        const ele = document.querySelector('#ele').classList
        ele.replace('-translate-x-100', '-translate-x-0')
        ele.replace('opacity-0', 'opacity-100')
        }
        
        
        </script> -->

<!-- TODO arrange queu -->
<!-- <template>
            <div class="">
        <div class="flex flex-col w-[200px]" v-for="item in countries">
            <p class="border">{{ item }}</p>
            </div>
            <button class="border rounded-sm p-2" @click="up">up</button>
            <button class="border rounded-sm p-2" @click="down">down</button>
            </div>
            </template>
            
            <script setup>
            import { ref } from 'vue';
    
            const countries = ref(['canada', 'usa', 'mexico', 'brazil'])
            
            const up = () => {
                const pop = countries.value.pop()
                countries.value.unshift(pop)
                }
                
                const down = () => {
                    const pop = countries.value.shift()
                    countries.value.push(pop)
            }
            
            </script> -->



<template>
    <div class="">
        <div class="flex flex-row gap-2 border w-[300px] h-[200px] rounded-sm relative">
            <p class="border w-full text-center duration-500 -translate-x-100 opacity-0 absolute left-0"
                :id="`item${selectedItem - 1}`">{{
                    countries[0] }}</p>
            <p class="border w-full text-center duration-500 absolute left-0" :id="`item${selectedItem}`">{{
                countries[1] }}</p>
            <!-- <p class="border w-full text-center duration-500 -translate-x-100 opacity-0 absolute left-0"
                :id="`item${selectedItem + 1}`">{{
                    countries[2] }}</p> -->
        </div>
        <button class="border rounded-sm p-2" @click="up">up</button>
        <!-- <button class="border rounded-sm p-2" @click="down">down</button> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';

const countries = ref(['canada', 'usa', 'mexico', 'brazil'])

const selectedItem = ref(1)

// controll first part
const controllZero = () => {
    const first = document.querySelector(`#item${selectedItem.value - 1}`).classList
    first.replace('opacity-0', 'opacity-100')
    first.replace('-translate-x-100', '-translate-x-100')
}

const controllOne = () => { }

// const controllTwo = () => { }


const up = () => {
    controllZero()

    // console.log(selectedItem.value - 1, selectedItem.value, selectedItem.value + 1)
    // // change the queue and ids of elements

    // // select 1 and 2 items
    // const second = document.querySelector(`#item${selectedItem.value}`).classList
    // // console.log(second.textContent)
    // // console.log(countries.value)

    // // change aminations
    // if (first.contains('-translate-x-0')) { //this indicate at least one click on 'up'
    //     first.replace('-translate-x-0', 'translate-x-100')
    //     first.replace('opacity-100', 'opacity-0')
    // } else { // this indicate not click on 'up'
    //     first.replace('-translate-x-100', '-translate-x-0')
    //     first.replace('opacity-0', 'opacity-100')
    // }



    // second.add('translate-x-100')
    // second.add('opacity-0')


    // const pop = countries.value.pop()
    // countries.value.unshift(pop)
    // // console.log(countries.value)
    // selectedItem.value += 1
}


</script>