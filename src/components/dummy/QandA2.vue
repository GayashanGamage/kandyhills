<template>
  <div
    class="flex flex-col gap-6 px-10 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between">
        <h3 class="font-black text-3xl">Frequently asked questions</h3>
        <button
          class="px-10 py-2 w-fit flex flex-row gap-6 justify-center items-center rounded-sm bg-black hover:bg-black/80 active:bg-black/70 text-white"
          @click="router.push({ name: 'faq' })">
          <p class="">All Questions</p>
          <ArrowRight size="18"></ArrowRight>
        </button>
      </div>
      <p class="text-lg font-light">
        Everything you need to know about the product and billing.
      </p>
    </div>

    <!-- questions left side -->
    <div class="lg:grid lg:grid-cols-2 flex flex-col sm:p-3 p-0 gap-14">
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

// const questions = ref([
//   // ACCOMMODATION (4 questions)
//   {
//     question: "What time is check-in and check-out?",
//     answare: "Check-in is at 3:00 PM and check-out is at 11:00 AM.",
//     tag: 'accomodation'
//   },
//   {
//     question: "Do you provide baby cots or extra beds?",
//     answare: "Yes, we provide baby cots free of charge. Extra beds are available for $20/night.",
//     tag: 'accomodation'
//   },
//   {
//     question: "Is room service available 24 hours?",
//     answare: "Room service is available from 6:00 AM to 11:00 PM daily.",
//     tag: 'accomodation'
//   },
//   {
//     question: "Do rooms have air conditioning?",
//     answare: "All our rooms are equipped with individual AC units with temperature control.",
//     tag: 'accomodation'
//   },

//   // RESTAURANT (4 questions)
//   {
//     question: "What are the breakfast hours?",
//     answare: "Breakfast is served daily from 7:00 AM to 10:30 AM in our main restaurant.",
//     tag: 'restaurent'
//   },
//   {
//     question: "Do you accommodate dietary restrictions?",
//     answare: "Yes, we offer vegetarian, vegan, gluten-free and halal options. Please inform us in advance.",
//     tag: 'restaurent'
//   },
//   {
//     question: "Is there a dress code for the restaurant?",
//     answare: "Smart casual attire is preferred in our dining areas after 6:00 PM.",
//     tag: 'restaurent'
//   },
//   {
//     question: "Can non-guests dine at your restaurant?",
//     answare: "Yes, our restaurant is open to the public with prior reservation.",
//     tag: 'restaurent'
//   },

//   // GENERAL RULES (4 questions)
//   {
//     question: "What is your smoking policy?",
//     answare: "We are 100% smoke-free. Smoking is only permitted in designated outdoor areas.",
//     tag: 'general home / hotel rules'
//   },
//   {
//     question: "Are pets allowed in the hotel?",
//     answare: "Only service animals are permitted with proper documentation.",
//     tag: 'general home / hotel rules'
//   },
//   {
//     question: "Is there a minimum age requirement for check-in?",
//     answare: "Guests must be at least 21 years old to check in without adult supervision.",
//     tag: 'general home / hotel rules'
//   },
//   {
//     question: "What is your cancellation policy?",
//     answare: "Cancellations must be made 48 hours prior to arrival to avoid a one-night charge.",
//     tag: 'general home / hotel rules'
//   },

//   // ONBOARD (4 questions)
//   {
//     question: "Do you offer airport transfers?",
//     answare: "Yes, we provide airport shuttle service for $25 per vehicle each way.",
//     tag: 'onbord'
//   },
//   {
//     question: "Where can I store my luggage after check-out?",
//     answare: "We offer complimentary luggage storage at the concierge desk until 6:00 PM.",
//     tag: 'onbord'
//   },
//   {
//     question: "How do I request early check-in?",
//     answare: "Early check-in requests can be made at reception, subject to availability and a small fee.",
//     tag: 'onbord'
//   },
//   {
//     question: "Is valet parking available?",
//     answare: "Yes, valet parking is available for $35 per night with unlimited in/out privileges.",
//     tag: 'onbord'
//   }
// ]);
</script>
