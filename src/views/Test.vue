<template>
  <div class="level-one">
    <p class="name">Gamage</p>
    <p class="name">Gayashan</p>
    <button class="action-button" @click="clicked">Click me</button>
  </div>
</template>

<script setup>
const clicked = () => {
  let a = document.getElementsByClassName("name");
  console.log(a);
};
</script>

<style scoped>
.level-one {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
}
.name {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.action-button {
  width: 100px;
  height: 20px;
}
.remove {
  animation: remove 1s ease-in;
}

@keyframes remove {
  start {
    opacity: 1;
  }
  end {
    opacity: 0;
  }
}
</style>
