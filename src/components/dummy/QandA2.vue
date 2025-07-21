<template>
  <div
    class="flex flex-col gap-6 md:px-10 px-2 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
    <div class="flex md:flex-row md:justify-between flex-col gap-4">
      <div class="flex flex-col justify-between">
        <h3 class="font-black text-3xl">Frequently asked questions</h3>
        <p class="text-lg font-light">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <button
        class="flex flex-row justify-center items-center gap-4 bg-black rounded-sm text-white text-sm py-1 px-6 w-fit h-fit"
        @click="router.push({ name: 'faq' })">
        <p class="">All Questions</p>
        <ArrowRight size="18"></ArrowRight>
      </button>
    </div>

    <!-- questions left side -->
    <div class="lg:grid lg:grid-cols-2 flex flex-col sm:p-3 p-0 md:gap-14 gap-6">
      <div class="flex flex-col gap-6">
        <!-- single F&Q section -->
        <div class="flex flex-col gap-4 cursor-pointer select-none"
          v-for="item, index in hotelstore.questions.slice(0, 3)" :key="item.no" :id="item.id">
          <!-- question part (  ) -->
          <div class="flex flex-row justify-between" @click="showAnsware(`leftAnsware${index}`, `leftIcon${index}`)">
            <p class="sm:w-[80%] w-[92%] font-semibold sm:text-base text-sm">{{ item.question }}</p>
            <X class="rotate-45 duration-200" size="20" :id="`leftIcon${index}`"></X>
          </div>
          <!-- answare part -->
          <div class="hidden" :id="`leftAnsware${index}`">
            <p class="font-light">
              {{ item.answare }}
            </p>
          </div>
          <hr class="text-black/20" />
        </div>
      </div>

      <!-- questions left side -->
      <div class="flex flex-col gap-6">
        <!-- single F&Q section -->
        <div class="flex flex-col gap-4 cursor-pointer select-none"
          v-for="item, index in hotelstore.questions.slice(0, 3)" :key="item.no" :id="item.id">
          <!-- question part (  ) -->
          <div class="flex flex-row justify-between" @click="showAnsware(`rightAnsware${index}`, `rightIcon${index}`)">
            <p class="sm:w-[80%] w-[92%] font-semibold sm:text-base text-sm">{{ item.question }}</p>
            <X class="rotate-45 duration-200" size="20" :id="`rightIcon${index}`"></X>
          </div>
          <!-- answare part -->
          <div class="hidden" :id="`rightAnsware${index}`">
            <p class="font-light">
              {{ item.answare }}
            </p>
          </div>
          <hr class="text-black/20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { hotelStore } from "@/stores/hotelStore";
import { ArrowRight, X } from "lucide-vue-next";
import { ref } from "vue";

const hotelstore = hotelStore();

const showAnsware = (answareId, questionIcon) => {
  const element = document.querySelector(`#${answareId}`).classList
  const iconElement = document.querySelector(`#${questionIcon}`).classList
  if (element.contains('hidden')) {
    element.replace('hidden', 'block')
    iconElement.remove('rotate-45')
  } else {
    element.replace('block', 'hidden')
    iconElement.add('rotate-45')
  }
};

</script>
