<template>
  <div class="c-level-one-container">
    <div class="review-container">
      <div class="review-head-container">
        <h3 class="review-head">What our guests are saying about us ?</h3>
        <p class="review-common-content">
          Discover what makes [ resort name ] a favorite escape ! from stunning
          views to exceptional service, here is a glimpse of what our guests
          love about the stay
        </p>
        <p class="review-ratting">4.88</p>
        <p class="review-common-content">Booking.com</p>
      </div>
      <div class="review-content-container">
        <div class="review-card">
          <div id="review-person-card">
            <img
              :src="review[select_review].image"
              alt="guess-photo"
              id="person-icon"
            />
            <p class="review-common-content-two" id="review-person-name">
              {{ review[select_review].name }}
            </p>
            <p class="review-common-content" id="review-person-from">
              {{ review[select_review].from }}
            </p>
          </div>
          <p class="review-common-content-two">
            {{ review[select_review].review }}
          </p>
        </div>
        <div class="move-card">
          <span class="material-icons" @click="reviewMove('next')"
            >arrow_back_ios
          </span>
          <span class="material-icons" @click="reviewMove('preview')"
            >arrow_forward_ios</span
          >
        </div>
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

<style scoped>
.review-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 98%;
  margin-inline: auto;
  margin-block: 100px;
}
.review-head {
  color: #1a1a1a;
  font-size: 39px;
  font-weight: 500;
  line-height: 50px;
  width: 400px;
}
.review-common-content {
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  max-width: 440px;
}
.review-ratting {
  color: #1a1a1a;
  font-size: 25px;
  font-weight: 500;
}
.review-common-content-two {
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 500;
  max-width: 540px;
  line-height: 30px;
}
.review-card {
  display: flex;
  flex-direction: column;
}
#review-person-card {
  height: 90px;
  width: 220px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(2, 1fr);
}
#person-icon {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  grid-column: 1/2;
  grid-row: 1/3;
}
#review-person-name {
  display: flex;
  align-items: flex-end;
  height: 44px;
  grid-column: 2/7;
  grid-row: 1/2;
}
#review-person-from {
  height: 44px;
  grid-column: 2/7;
  grid-row: 2/3;
}
.move-card {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.material-icons {
  font-size: 16px;
  background-color: gainsboro;
  color: white;
  padding: 6px;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
}
</style>
