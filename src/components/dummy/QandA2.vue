<template>
  <div class="flex flex-col gap-6 p-10 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
    <div class="flex flex-col gap-4">
      <h3 class="font-black text-3xl">Frequently asked questions</h3>
      <p class="text-lg font-light">
        Everything you need to know about the product and billing.
      </p>
    </div>
    <div class="lg:grid lg:grid-cols-2 flex flex-col sm:p-3 p-0 gap-4">
      <div class="flex flex-col gap-6">
        <div
          class="flex flex-col gap-4 cursor-pointer select-none"
          v-for="item in questions.slice(0,3)"
          :key="item.no"
          :id="item.id"
        >
          <div
            class="flex flex-row justify-between"
            @click="showAnsware(item.id, item.show)"
          >
            <p class="sm:w-[80%] w-[92%] font-semibold sm:text-base text-sm">{{ item.question }}</p>
            <span class="material-icons">{{ item.icon }}</span>
          </div>
          <div class="" v-if="item.show">
              <p class="font-light">
                {{ item.answare }}
              </p>
            </div>
          <hr class="text-black/20" />
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div
          class="flex flex-col gap-4 cursor-pointer select-none"
          v-for="item in questions.slice(3,6)"
          :key="item.no"
          :id="item.id"
        >
          <div
            class="flex flex-row justify-between"
            @click="showAnsware(item.id, item.show)"
          >
            <p class="sm:w-[80%] w-[90%] font-semibold sm:text-base text-sm">{{ item.question }}</p>
            <span class="material-icons">{{ item.icon }}</span>
          </div>
          <div class="" v-if="item.show">
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
import { ref } from "vue";

const questions = ref([
  {
    id: 0,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, repudiandae?",
    answare: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    show: false,
    icon: "add",
  },
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, repudiandae?",
    answare: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    show: false,
    icon: "add",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, repudiandae?",
    answare: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    show: false,
    icon: "add",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, repudiandae?",
    answare: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    show: false,
    icon: "add",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, repudiandae?",
    answare: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    show: false,
    icon: "add",
  },
  {
    id: 5,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, repudiandae?",
    answare: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    show: false,
    icon: "add",
  },
]);

const showAnsware = (q_id, status) => {
  if (status == true) {
    questions.value[q_id].show = false;
    questions.value[q_id].icon = "add";
  } else if (status == false) {
    questions.value[q_id].show = true;
    questions.value[q_id].icon = "remove";
  }
};
</script>
