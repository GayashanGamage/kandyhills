<template>
  <div class="flex flex-col gap-10 border w-full h-screen">
    <div class="w-full h-[200px] border "></div>
    <div class="w-full h-[200px] border relative">
      <div class="absolute w-[50%] h-[90%] bg-black z-1"></div>
      <div class="absolute right-0 left-0 top-0 bottom-0 w-[90%] h-[80%] bg-red-500 z-2"></div>
      <div class="absolute w-[60%] h-[60%] bg-yellow-500 z-3"></div>
    </div>
  </div>
</template>
<script setup></script>