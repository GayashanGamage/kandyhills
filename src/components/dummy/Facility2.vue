<template>
  <div class="flex flex-col w-full max-w-[1450px] min-w-[200px] mx-auto rounded-2xl p-10 gap-5 bg-[#e7c873]">
    <div class="flex flex-col gap-4">
      <h3 class="font-black text-3xl">Get better experience with us</h3>
      <p class="font-light text-lg">
        Experience these exceptional services with us and make your stay truly
        unforgettable !
      </p>
    </div>
    <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 gap-10">
      <div class="flex flex-col sm:gap-4 gap-2 lg:justify-start justify-center lg:items-start items-center" v-for="item in facilityList">
        <span class="material-icons">{{ item.icon }}</span>
        <h4 class="font-bold text-lg">{{ item.head }}</h4>
        <p class="md:w-full w-full max-w-[300px] min-w-[200px] lg:text-start text-center">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const facilityList = [
  {
    icon : 'pool',
    head : 'indoor swimming pool',
    description : 'Take a refreshing dip in our heated indoor pool, perfect for year-round relaxation'
  },
  {
    icon : 'spa',
    head : 'Spa and wellness center',
    description : 'Unwind with soothing treatments and therapies at our serene wellness center'
  },
  {
    icon : 'restaurant',
    head : 'Restaurant',
    description : 'Savor delicious cuisine crafted with fresh ingredients at our onsite restaurant'
  },
  {
    icon : 'restaurant',
    head : 'Free parking',
    description : 'Enjoy hassle free parking with complementary parking for all our guests'
  },
]

</script>
