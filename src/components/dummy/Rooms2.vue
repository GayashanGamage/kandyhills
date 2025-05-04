<template>
  <div class="c-level-one-container">
    <div class="head-container">
      <div class="container-title">Our room collection</div>
      <div class="description component-description">
        excellent relax with our collection
      </div>
    </div>
    <div class="content-container">
      <span class="arrow-key material-icons" @click="move('up')"
        >arrow_back_ios</span
      >
      <div
        class="room-card"
        v-for="(item, item_index) in show"
        :key="item_index"
      >
        <div class="image-container" :id="item.id">
          <img :src="item.image" alt="room-image" class="room-image" />
          <div class="image-mask"></div>
        </div>
        <div class="room-description">
          <p class="room-name">{{ item.name }}</p>
          <p class="room-price">{{ item.price }}</p>
        </div>
        <div class="features-container">
          <div
            class="features"
            v-for="(i, i_index) in show[item_index].featurs"
            :key="i_index"
          >
            <span class="material-icons">{{ i.icon }}</span>
            <p class="description feature-description">{{ i.name }}</p>
            <vr class="vertical-rulle"></vr>
          </div>
        </div>
      </div>
      <span class="arrow-key material-icons" @click="move('down')"
        >arrow_forward_ios</span
      >
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

onBeforeMount(() => {
  show.value = roomList.value.slice(0, 3);
  //remove first three item in roomList
  for (let i = 0; i < 3; i++) {
    roomList.value.shift();
  }
});

const show = ref([]);

const roomList = ref([
  {
    id: 0,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_1/room1.jpg",
    name: "Single Room",
    price: 25000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 1,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_2/room2.jpg",
    name: "Dubble Room",
    price: 35000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 2,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_3/room3.jpg",
    name: "Dualux Room",
    price: 45000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 3,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_4/room4.jpg",
    name: "Hanymon Room",
    price: 75000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
  {
    id: 4,
    image:
      "https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/rooms/room_5/room5.jpg",
    name: "luxeryX Room",
    price: 95000,
    featurs: [
      { icon: "hot_tub", name: "Hot water shower" },
      { icon: "pool", name: "pool access" },
      { icon: "bed", name: "king size bed" },
    ],
  },
]);

const move = (side) => {
  if (side == "down") {
    roomList.value.push(show.value.shift());
    show.value.push(roomList.value.shift());
  } else if (side == "up") {
    roomList.value.unshift(show.value.pop());
    show.value.unshift(roomList.value.pop());
  }
};
</script>

<style scoped>
.c-level-one-container {
  margin-block: 50px;
}
.container-title {
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 41.065px; /* 130% */
  user-select: none;
  margin-bottom: 10px;
}
.description {
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.508px; /* 190% */
}
.component-description {
  margin-bottom: 24px;
}
.content-container {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  gap: 24px;
}
.room-card {
  user-select: none;
  width: 353.004px;
  height: 357.742px;
  flex-shrink: 0;
  border-radius: 12.635px;
  border: 0.79px solid #e9e9e9;
  background: #fff;
}
.room-card:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.image-container,
.room-image {
  width: 335.63px;
  height: 234.151px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 12px;
  margin-inline: auto;
  margin-top: 5px;
}
.room-name {
  color: #1a1a1a;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
}
.room-card:hover .room-name {
  font-weight: 800;
}
.room-price {
  color: #eb664e;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 600;
}
.room-card:hover .room-price {
  font-weight: 900;
}
.features {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  width: 160px;
}
.room-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  margin-inline: auto;
  margin-top: 20px;
}
.feature-description {
  margin-left: 12px;
}
.features-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 92%;
  margin-inline: auto;
  margin-top: 10px;
}
.arrow-key {
  border: 1px solid #e9e9e9;
  padding: 5px;
  border-radius: 20px;
}
.arrow-key:hover {
  background-color: #e9e9e9;
}
</style>
