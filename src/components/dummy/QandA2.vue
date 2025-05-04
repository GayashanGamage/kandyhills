<template>
  <div class="c-level-one-container">
    <div class="main">
      <div class="heading">
        <h3 class="main-title">Frequently asked questions</h3>
        <p class="main-description">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div class="content">
        <div
          class="content-q"
          v-for="item in questions"
          :key="item.no"
          :id="item.id"
        >
          <div
            class="question-container"
            @click="showAnsware(item.id, item.show)"
          >
            <p class="question">{{ item.question }}</p>
            <span class="toggle-icon material-icons">{{ item.icon }}</span>
          </div>
          <div class="content-a" v-if="item.show">{{ item.answare }}</div>
          <hr class="question-devider" />
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

<style scoped>
.c-level-one-container {
  background-color: #f6f8fa;
  width: 98%;
  margin-inline: auto;
  border-radius: 16px;
  padding-block: 80px;
}
.main-title {
  color: #101828;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  font-family: Inter;
}
.main-description {
  color: #667085;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  font-family: Inter;
}
.content {
  width: 60%;
  margin-inline: auto;
  margin-top: 34px;
}
.question-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.question {
  color: #101828;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 8px;
  cursor: pointer;
}
.content-a {
  color: var(--Gray-500, #667085);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.material-icons {
  border: 1px solid black;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
}
.question-devider {
  margin-block: 32px 22px;
  background-color: #eaecf0;
  border: 0px;
  height: 1.5px;
}
</style>
