<template>
    <div class="flex flex-col gap-10 items-center justify-center h-screen w-full">
        <div class="relative">
            <p class="w-[100px] rounded-sm p-2 absolute top-0 left-0 border opacity-100 -translate-x-20 duration-500"
                id="item1">{{
                    countries[selectedItem]
                }}</p>
            <p class="w-[100px] rounded-sm p-2 absolute top-0 left-0 border opacity-100 -translate-x-0 duration-500"
                id="item2">{{
                    countries[selectedItem]
                }}</p>
        </div>
        <div class="">
            <button class="border p-4 mt-10" @click="next">next</button>
            <button class="border p-4 mt-10" @click="previouse">previose</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const countries = ref(['canada', 'mexico', 'brazil', 'argentina', 'chile', 'peru'])

const selectedItem = ref(1)

const previouse = () => {
    const elm = document.querySelector('#item1').classList
    const elm2 = document.querySelector('#item2').classList

    // correct the position of elememt 1
    if (elm.contains('-translate-x-20')) {
        elm.remove('duration-500')
        elm.replace('-translate-x-20', 'translate-x-20')
        elm.add('duration-500')
        console.log('one')

    } else if (elm2.contains('-translate-x-20')) {
        elm2.remove('duration-500')
        elm2.replace('-translate-x-20', 'translate-x-20')
        elm2.add('duration-500')
        console.log('two')

    }

    // animate the elements
    if (elm.contains('translate-x-20')) {
        elm.replace('translate-x-20', '-translate-x-0')
        console.log('three')
        // elm.replace('opacity-0', 'opacity-100')
    } else if (elm.contains('-translate-x-0')) {
        elm.replace('-translate-x-0', '-translate-x-20')
        console.log('four')
        // elm.replace('opacity-100', 'opacity-0')
    }



}


const next = () => {

    const elm = document.querySelector('#item1').classList
    const elm2 = document.querySelector('#item2').classList

    // for handle element 1 animations
    if (elm.contains('-translate-x-20')) {
        elm.replace('-translate-x-20', '-translate-x-0')
        elm.replace('opacity-0', 'opacity-100')
    } else if (elm.contains('-translate-x-0')) {
        elm.replace('-translate-x-0', 'translate-x-20')
        elm.replace('opacity-100', 'opacity-0')
    }

    // for handle element 2 animations
    if (elm2.contains('-translate-x-20')) {
        elm2.replace('-translate-x-20', '-translate-x-0')
        elm2.replace('opacity-0', 'opacity-100')

    } else if (elm2.contains('-translate-x-0')) {
        elm2.replace('-translate-x-0', 'translate-x-20')
        elm2.replace('opacity-100', 'opacity-0')

    }

    elm.remove('duration-500')
    elm2.remove('duration-500')

    // set front item in to defalt position
    setTimeout(() => {
        if (elm2.contains('translate-x-20')) {
            elm2.replace('translate-x-20', '-translate-x-20')
        } else if (elm.contains('translate-x-20')) {
            elm.replace('translate-x-20', '-translate-x-20')

        }

    }, 500)


    elm.add('duration-500')
    elm2.add('duration-500')

    setTimeout(() => {
        // rotate the selected item
        const pop = countries.value.pop()
        countries.value.unshift(pop)

    }, 200)

}

</script>