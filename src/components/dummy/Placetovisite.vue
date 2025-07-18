<template>
    <div
        class="flex flex-col gap-10 px-10 py-18 w-full max-w-[1450px] min-w-[200px] h-auto mx-auto rounded-2xl bg-[#f6f8fa]">
        <div class="flex flex-col gap-5">

            <!-- review section title -->
            <div class="flex flex-row justify-between items-center w-full">
                <div class="flex flex-col gap-4">
                    <h3 class="font-black text-3xl">Enjoy surrounding areas</h3>
                    <p class="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                        similique provident
                        quam
                        veritatis adipisci quae aliquid esse autem sint eligendi?</p>
                </div>
                <button class="flex flex-row gap-4 bg-black rounded-sm text-white py-1 px-6"
                    @click="router.push({ name: 'review' })">
                    <span class="">All blogs</span>
                    <MoveRight></MoveRight>
                </button>
            </div>
        </div>
        <div class="w-full h-auto flex flex-col">
            <div class="flex flex-row gap-2 rounded-sm w-full">
                <div class="placess h-[400px] rounded-sm duration-200 relative"
                    :class="{ 'w-[300%]': index == hoverItem, 'w-full': index != hoverItem }"
                    v-for="item, index in placesToVisit" :id="`item${index}`" @mouseenter="hoverItem = index">
                    <img :src="item.image" alt="" class="w-full h-full object-cover rounded-sm absolute">
                    <div
                        class="flex flex-row  justify-between items-end absolute bottom-0 left-0 right-0 text-white bg-black/40 min-h-[140px] p-4 rounded-sm">
                        <div class="">
                            <p class="font-black text-2xl">{{ item.name }}</p>
                            <p :class="{ 'hidden': index != hoverItem, 'block': index == hoverItem }">{{
                                item.description.slice(0, 80) }}</p>
                        </div>
                        <button class="border rounded-sm bg-white/30 h-fit w-fit py-1 px-4"
                            :class="{ 'hidden': index != hoverItem, 'block': index == hoverItem }">More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { MoveRight } from 'lucide-vue-next';
import { ref } from 'vue';

const hoverItem = ref(0)

const placesToVisit = ref([
    {
        name: 'Royal Botanical Gardens, Peradeniya',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(4).webp',
        description: 'The Royal Botanical Gardens in Peradeniya is one of the finest botanical gardens in Asia, spanning 147 acres. Located just 5.5 km from Kandy, this garden was established in 1843 and features more than 4,000 species of plants. The highlight is the giant Java fig tree with its sprawling roots, which has become an iconic photo spot. The orchid house displays hundreds of colorful orchid varieties, while the palm avenue creates a majestic canopy. Visitors can see exotic plants like the cannonball tree, giant bamboo, and numerous medicinal plants. The gardens also have a spice garden showcasing Sri Lanka\'s famous spices. With its well-manicured lawns, scenic river views (it\'s bordered by the Mahaweli River), and tranquil atmosphere, this makes for a perfect half-day excursion from Kandy. The cool climate and beautiful landscapes make it ideal for nature lovers and photographers alike.'
    },
    {
        name: 'Temple of the Sacred Tooth Relic',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(3).webp',
        description: 'The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is the most sacred Buddhist site in Sri Lanka and a UNESCO World Heritage Site. Located in the heart of Kandy, it houses the relic of Buddha\'s tooth, which has played a significant role in Sri Lankan politics and culture for centuries. The temple complex features stunning Kandyan architecture with intricate carvings, golden roofs, and a moat. Daily rituals (pujas) occur at 5:30 AM, 9:30 AM, and 6:30 PM with drumming and chanting. The annual Esala Perahera festival (July/August) features a grand procession with elephants and dancers. Visitors must dress modestly (shoulders and knees covered) and can explore the museum, audience hall, and octagonal Pattirippuwa. The temple offers profound cultural insights and spiritual ambiance, making it Kandy\'s must-visit attraction.'
    },
    {
        name: 'Udawatta Kele Sanctuary',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(2).webp',
        description: 'Udawatta Kele (Royal Forest Park) is a 257-acre forest reserve located just behind the Temple of the Tooth in Kandy. This lush green sanctuary offers excellent hiking opportunities through well-marked trails amidst diverse flora and fauna. The forest contains over 400 plant species (including many endemic ones), 80 bird species (like the Layard\'s parakeet and Sri Lanka hanging parrot), and mammals such as monkeys and giant squirrels. Historical sites within include the Senkada Cave (used by Buddhist monks) and the Garrison Cemetery from British colonial times. The peaceful atmosphere with singing birds and rustling leaves provides a perfect nature escape within city limits. Early morning visits are ideal for birdwatching. The canopy walkway offers beautiful views, and the forest maintains a cool temperature even during midday. It\'s an excellent spot for those seeking tranquility and nature immersion without leaving Kandy.'
    },
    {
        name: 'Lankatilaka Vihara',
        image: 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/placeToVisite/placetovisit(1).webp',
        description: 'Lankatilaka Vihara is an impressive 14th-century Buddhist temple located in Hiyarapitiya, about 15 km from Kandy. Built on a natural rock outcrop, this architectural masterpiece combines Sinhalese, Dravidian, and Indo-Chinese styles. The temple features a massive 80-foot-high brick structure with intricate carvings and a golden roof. Inside houses a 12-meter tall Buddha statue under a magnificent Makara Thorana (dragon arch), with beautiful Kandyan-era frescoes adorning the walls. The temple offers panoramic views of the surrounding countryside. Nearby is the historic Gadaladeniya Temple and Embekka Devalaya, forming a cultural triangle. The peaceful atmosphere and spiritual significance make it worthwhile despite the short journey from Kandy. Visitors should climb the rock-cut staircase to appreciate the temple\'s grandeur fully. The site provides excellent examples of medieval Sri Lankan art and architecture while maintaining active religious functions.'
    }
])
</script>