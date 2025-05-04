<template>
  <div class="flex md:flex-row flex-col gap-10 w-full max-w-[1450px] min-w-[200px] md:border-none border-3 border-black/10 rounded-2xl mx-auto p-10">
    <div class="flex flex-col gap-5">
      <h3 class="font-black text-3xl">What our guests are saying about us ?</h3>
      <p class="text-lg font-light">
        Discover what makes [ resort name ] a favorite escape ! from stunning
        views to exceptional service, here is a glimpse of what our guests
        love about the stay
      </p>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2">
          <i class="fi fi-sr-star text-amber-400"></i>
          <i class="fi fi-sr-star text-amber-400"></i>
          <i class="fi fi-sr-star text-amber-400"></i>
          <i class="fi fi-sr-star text-amber-400"></i>
          <p class="">4.88</p>
        </div>
        <p class="font-bold">Booking.com</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="">
        <div id="" class="flex flex-col justify-center items-center">
          <img
            :src="review[select_review].image"
            alt="guess-photo"
            id="person-icon"
            class="rounded-full sm:w-35 w-30 sm:h-35 h-30"
          />
          <p class="text-md font-light">
            {{ review[select_review].name }}
          </p>
          <p class="font-black">
            {{ review[select_review].from }}
          </p>
        </div>
        <p class="text-lg font-light">
          {{ review[select_review].review }}
        </p>
      </div>
      <div class="flex flex-row gap-6 mt-5">
        <span class="material-icons bg-black/5 hover:bg-black/12 p-2 rounded-full cursor-default select-none w-10 h-10" @click="reviewMove('next')"
          >arrow_back_ios
        </span>
        <span class="material-icons bg-black/5 p-2 hover:bg-black/12 rounded-full cursor-default select-none w-10 h-10" @click="reviewMove('preview')"
          >arrow_forward_ios</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const select_review = ref(0);
const review = [
  {
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
    from: "Germany",
    name: "Christian Joe",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
  },
  {
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_2.webp",
    from: "Swiden",
    name: "Joe rogan",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
  },
  {
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/review/person_1.jpeg",
    from: "Norway",
    name: "oewifj woiefj",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias repellendus impedit tenetur officia doloribus nam ad nulla quis fuga!",
  },
];

const reviewMove = (command) => {
  if (command == "next") {
    if (select_review.value == 2) {
      select_review.value = 0;
    } else {
      select_review.value += 1;
    }
  } else if (command == "preview") {
    if (select_review.value == 0) {
      select_review.value = 2;
    } else {
      select_review.value -= 1;
    }
  }
};
</script>

<style scoped></style>
