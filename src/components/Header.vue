<template>
  <div class="c-level-one-container">
    <!-- <div class="main"> -->
    <img
      src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/header_image.jpg"
      alt="Hote front view"
      class="image"
    />
    <div class="manu-bar">
      <ul>
        <li class="menu-item">Gallery</li>
        <li class="menu-item">Facilities</li>
        <li class="menu-item">Accomodation</li>
        <li class="menu-item">FAQs</li>
        <li class="menu-item">Reviews</li>
        <li class="menu-item">
          <span class="material-icons">call</span>071 728 9911
        </li>
      </ul>
    </div>
    <div class="head-discription">
      <p class="hotel-title">Mount rose 44 galle</p>
      <button class="action-button">View Rooms</button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup></script>

<style scoped>
.c-level-one-container {
  width: 97%;
  height: 678px;
  margin-inline: auto;
  border-radius: 14px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.image {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 14px;
  object-fit: cover;
}
.c-level-one-container::after {
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  width: 100.5%;
  height: inherit;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.8) 0%,
    rgba(26, 26, 26, 0.1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
}
.manu-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  color: white;
  width: 100.5%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  gap: 30px;
  margin-right: 60px;
}
.menu-item {
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.head-discription {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.hotel-title {
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 47.394px;
  font-style: normal;
  font-weight: 500;
  line-height: 61.612px; /* 130% */
  text-transform: uppercase;
}
.action-button {
  margin-top: 30px;
  padding: 10px 50px 10px 50px;
  border-radius: 30px;
  border: 0.5px solid #fff;
  background: rgba(3, 3, 3, 0.48);
  color: #fff;
  font-size: 18px;
  font-weight: 300;
}
</style>
