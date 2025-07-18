<!-- compleated -->
<!-- when the mouse enter to action button elm1 align it's default position class -->

<template>
    <div class="flex flex-col justify-center items-center h-screen w-full gap-10">
        <div class="flex flex-col relative w-[180px] h-[120px] p-5 overflow-hidden">
            <p class="border w-[100px] h-[100px] rounded-sm duration-300 absolute top-2 left-10 translate-x-0 opacity-0"
                id="elm1">
                {{ contries[0] }}</p>
            <p class="border w-[100px] h-[100px] rounded-sm duration-300 absolute top-2 left-10 translate-x-0 opacity-100"
                id="elm2">
                {{ contries[-2] }}</p>
        </div>
        <div class="flex flex-row gap-2 mt-20">
            <button class="border rounded-sm py-1 px-4" @mouseenter="preAllignmentNext" @click="next">next</button>
            <button class="border rounded-sm py-1 px-4" @mouseenter="preAllignmentPrev"
                @click="previose">previose</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const clickActionButton = ref(false)
const contries = ref(['India', 'USA', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia']);

const preAllignmentNext = () => {
    const elm1 = document.querySelector('#elm1').classList
    const elm2 = document.querySelector('#elm2').classList

    if (clickActionButton.value == false) {
        elm1.remove('duration-300')
        elm1.remove('translate-x-full')
        elm1.remove('translate-x-0')
        elm1.add('-translate-x-full')
    } else if (clickActionButton.value == true) {
        if (elm1.contains('translate-x-full')) {
            elm1.remove('duration-300')
            elm1.replace('translate-x-full', '-translate-x-full')
            elm1.add('duration-300')
        } else {
            elm2.remove('duration-300')
            elm2.replace('translate-x-full', '-translate-x-full')
            elm2.add('duration-300')
        }
    }
}

const next = () => {
    clickActionButton.value = true

    // change list
    const pop = contries.value.pop()
    contries.value.unshift(pop)

    const elm1 = document.querySelector('#elm1').classList
    const elm2 = document.querySelector('#elm2').classList

    elm1.add('duration-300')

    // controll element one
    if (elm1.contains('-translate-x-full')) {
        elm1.replace('-translate-x-full', 'translate-x-0')
        elm1.replace('opacity-0', 'opacity-100')
    } else {
        elm1.replace('translate-x-0', 'translate-x-full')
        elm1.replace('opacity-100', 'opacity-0')
    }

    // controll element two
    if (elm2.contains('-translate-x-full')) {
        elm2.replace('-translate-x-full', 'translate-x-0')
        elm2.replace('opacity-0', 'opacity-100')
    } else {
        elm2.replace('translate-x-0', 'translate-x-full')
        elm2.replace('opacity-100', 'opacity-0')
    }

    // bring back to front element
    setTimeout(() => {
        if (elm1.contains('translate-x-full')) {
            elm1.remove('duration-300')
            elm1.replace('translate-x-full', '-translate-x-full')
            elm1.add('duration-300')
        } else {
            elm2.remove('duration-300')
            elm2.replace('translate-x-full', '-translate-x-full')
            elm2.add('duration-300')
        }
    }, 300);


}

const preAllignmentPrev = () => {
    const elm1 = document.querySelector('#elm1').classList
    const elm2 = document.querySelector('#elm2').classList

    if (clickActionButton.value == false) {
        elm1.remove('duration-300')
        elm1.remove('-translate-x-full')
        elm1.remove('translate-x-0')
        elm1.add('translate-x-full')
    } else if (clickActionButton.value == true) {
        if (elm1.contains('-translate-x-full')) {
            elm1.remove('duration-300')
            elm1.replace('-translate-x-full', 'translate-x-full')
            elm1.add('duration-300')
        } else {
            elm2.remove('duration-300')
            elm2.replace('-translate-x-full', 'translate-x-full')
            elm2.add('duration-300')
        }
    }
}

const previose = () => {
    clickActionButton.value = true
    const elm1 = document.querySelector('#elm1').classList
    const elm2 = document.querySelector('#elm2').classList

    // change list
    const shift = contries.value.shift()
    contries.value.push(shift)

    elm1.add('duration-300')

    // controll element one
    if (elm1.contains('translate-x-full')) {
        elm1.replace('translate-x-full', 'translate-x-0')
        elm1.replace('opacity-0', 'opacity-100')
    } else if (elm1.contains('translate-x-0')) {
        elm1.replace('translate-x-0', '-translate-x-full')
        elm1.replace('opacity-100', 'opacity-0')
    }

    // controll element two
    if (elm2.contains('translate-x-full')) {
        elm2.replace('translate-x-full', 'translate-x-0')
        elm2.replace('opacity-0', 'opacity-100')
    } else if (elm2.contains('translate-x-0')) {
        elm2.replace('translate-x-0', '-translate-x-full')
        elm2.replace('opacity-100', 'opacity-0')
    }

    // bring back to front element
    setTimeout(() => {
        if (elm1.contains('-translate-x-full')) {
            elm1.remove('duration-300')
            elm1.replace('-translate-x-full', 'translate-x-full')
            elm1.add('duration-300')
        } else {
            elm2.remove('duration-300')
            elm2.replace('-translate-x-full', 'translate-x-full')
            elm2.add('duration-300')
        }
    }, 300);
}

</script>