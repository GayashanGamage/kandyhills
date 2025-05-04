<template>
  <div class="flex flex-col justify-center items-center w-full h-auto relative">
    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/header_image.jpg" alt="hotel image" class="w-full object-cover h-full max-h-[1000px] min-h-[500px] z-1">
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/50  to-transparent z-2"></div>
    <div class="flex flex-col justify-center items-center gap-3 w-[50%] h-auto absolute z-3 text-white">
      <h1 class="text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black">Hotel Name</h1>
      <p class="text-center xl:text-2xl md:text-xl text-lg font-thin">Lorem ipsum dolor sit.</p>
      <button class="border px-4 py-1 rounded-lg hover:text-black hover:bg-white cursor-pointer">Book Now</button>
    </div>
  </div>
</template>

<script setup></script>