<template>
  <div class="flex flex-col gap-4 w-full max-w-[1450px] min-w-[100px] h-auto mx-auto p-10 rounded-2xl bg-[#1a1a1a] text-white">
    <div class="flex md:flex-row flex-col md:gap-0 gap-6 justify-between">
      <div class="flex flex-row justify-center items-center">
        <p class="font-bold text-2xl text-center">Hotel name
          <br class="md:hidden block">
          <span class="font-light text-sm md:text-left text-center">Lorem ipsum elit. Sapiente, beatae?</span>
        </p>
      </div>
      <div class="flex flex-row gap-10 justify-center items-center">
        <p class="font-light text-sm md:block hidden">follow us</p>
        <i class="fi fi-brands-facebook text-2xl"></i>
        <i class="fi fi-brands-instagram text-2xl"></i>
        <i class="fi fi-brands-youtube text-2xl"></i>
      </div>
    </div>  
    <hr class="md:w-full w-[50%] mx-auto text-white/30">
    <div class="flex md:flex-row flex-col md:gap-14 gap-4 md:justify-start justify-center md:items-start items-center">
      <div class="flex flex-col gap-1 md:justify-start justify-center md:items-start items-center">
        <h4 class="font-semibold text-lg">Contact us</h4>
        <p class="font-light md:ml-4">weifjwiejfo.wefj@greoijg.com</p>
        <p class="font-light md:ml-4">30923u234</p>
      </div>
      <div class="flex flex-col gap-1 md:justify-start justify-center md:items-start items-center">
        <h4 class="font-semibold text-lg">Address</h4>
        <p class="font-light md:ml-4">efjwoefowefoi,</p>
        <p class="font-light md:ml-4">fwieewf,</p>
        <p class="font-light md:ml-4">Rathgama</p>
      </div>
      <div class="flex flex-col gap-1 md:justify-start justify-center md:items-start items-center">
        <h4 class="font-semibold text-lg">Quick links</h4>
        <div class="flex md:flex-row flex-col md:gap-15 gap-0">
          <div class="flex flex-col gap-1 cursor-default">
            <p class="font-light md:ml-4 hover:underline">weofijowjf</p>
            <p class="font-light md:ml-4 hover:underline">wefoijoef</p>
          </div>
          <div class="flex flex-col gap-1 cursor-default">
            <p class="font-light md:ml-4 hover:underline">weofijowjf</p>
            <p class="font-light md:ml-4 hover:underline">wefoijoef</p>
          </div>
        </div>
      </div>
      <!-- this is define the remaining space of the footer content -->
      <div class="w-full max-w-[400px] min-w-[1px]"></div>
    </div>
    <hr class="md:w-full w-[50%] mx-auto text-white/30">
    <p class="w-fit mx-auto text-sm text-center text-white/30">Design, Develop & Maintain by <span class="uppercase font-black">myhotel</span></p>
  </div>
</template>

<script setup></script>

<style scoped>
</style>
