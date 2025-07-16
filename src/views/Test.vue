<template>
    <div ref="scrollContainer" class="h-[1200px] overflow-auto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iste.</p>
        <!-- More content -->
    </div>
    <button @click="scrollToTop" class="border p-2 fixed bottom-4 right-4">
        Scroll to top
    </button>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);

function scrollToTop() {
    // console.log(scrollContainer.value)
    scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' });
    // if (scrollContainer.value) {
    // }
}

</script>