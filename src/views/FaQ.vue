<template>
    <div class="flex flex-col md:gap-18 gap-8">
        <SubPageHead pagetitle="FAQ"
            pagedescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit veniam a nesciunt aliquam, iste voluptate repellendus veritatis minima quos.">
        </SubPageHead>
        <div class="w-full h-auto font-[Roboto] p-2 flex flex-col gap-16">

            <!-- page content -->
            <div class="">

                <!-- question filters -->
                <div
                    class="grid md:grid-cols-4 grid-cols-2 justify-center items-center md:gap-6 gap-2 md:px-10 px-2 py-8 max-w-[1450px] min-w-[200px] h-auto mx-auto w-fit">
                    <p class="py-2 px-6 rounded-full hover:cursor-default w-fit md:min-w-[200px] min-w-[150px] text-center md:text-base text-sm"
                        :class="{ 'bg-gray-200': index !== selectedCategory, 'bg-black text-white': index == selectedCategory }"
                        v-for="item, index in allCategories" @click="selectedCategory = index">{{ item }}
                    </p>
                </div>

                <div
                    class="flex flex-col gap-6 md:px-10 px-2 md:py-18 py-8 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
                    <div class="flex flex-col gap-6">
                        <!-- single F&Q section -->
                        <div class="flex flex-col gap-4 cursor-pointer select-none"
                            v-for="item, index in selectedQuestionList" :key="item.no" :id="item.id">
                            <!-- question part (  ) -->
                            <div class="flex flex-row justify-between"
                                @click="showAnsware(`leftAnsware${index}`, `leftIcon${index}`)">
                                <p class="sm:w-[80%] w-[92%] font-semibold sm:text-base text-sm">{{ item.question }}
                                </p>
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
                </div>
            </div>
            <Searchaccomodation></Searchaccomodation>
            <Footer2></Footer2>
        </div>
    </div>
</template>
<script setup>
import Footer2 from '@/components/dummy/Footer2.vue';
import Searchaccomodation from '@/components/dummy/Searchaccomodation.vue';
import SubPageHead from '@/components/dummy/SubPageHead.vue';
import router from "@/router";
import { hotelStore } from "@/stores/hotelStore";
import { ArrowRight, X } from "lucide-vue-next";
import { onBeforeMount, ref, watch } from "vue";


const hotelstore = hotelStore();
const allCategories = ref(new Set())
const selectedCategory = ref(0)
const selectedQuestionList = ref([])

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


const loadSelecteQuestionList = (newValue) => {
    // set empty selected question list
    selectedQuestionList.value = []

    // convert unique categories to array
    const allCategoriesList = [...allCategories.value];

    // load newly selected category questions
    hotelstore.questions.forEach(element => {
        if (element.tag === allCategoriesList[newValue]) {
            selectedQuestionList.value.push(element);
        }
    });
}

// load selected category questions
watch(selectedCategory, (newValue) => {
    loadSelecteQuestionList(newValue)
})

// this is for get all available question categories
onBeforeMount(() => {
    hotelstore.questions.forEach(element => {
        allCategories.value.add(element.tag)
    });
    loadSelecteQuestionList(0)
})

</script>
