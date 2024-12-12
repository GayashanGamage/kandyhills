<template>
  <div class="c-level-one-container">
    <div class="container-head">
      <h3 class="ch-head">Get relax with our location</h3>
      <p class="ch-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nisi.
      </p>
    </div>
    <div id="content">
      <div class="c-image-box">
        <img
          src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery8.jpg"
          alt="gallery-1"
          class="c-image c-image-2"
        />
        <button class="action-button">MORE</button>
      </div>
      <div class="c-image-box">
        <img
          src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery2.jpg"
          alt="gallery-2"
          class="c-image"
        />
        <button class="action-button">MORE</button>
      </div>
      <div class="c-image-box">
        <img
          src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery6.jpg"
          alt="gallery-3"
          class="c-image"
        />
        <button class="action-button">MORE</button>
      </div>
      <div class="c-image-box">
        <img
          src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery3.jpg"
          alt="gallery-4"
          class="c-image"
        />
        <button class="action-button">MORE</button>
      </div>
      <div class="c-image-box">
        <img
          src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery1.jpg"
          alt="gallery-5"
          class="c-image"
        />
        <button class="action-button">MORE</button>
      </div>
      <div class="c-image-box">
        <img
          src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-three/gallery/gallery5.jpg"
          alt="gallery-6"
          class="c-image c-image-2"
        />
        <button class="action-button">MORE</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* grid structure for destop and tablets
    flex structure for mobile device*/
.c-level-one-container {
  height: auto;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-block: 100px;
}
.ch-head {
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 500;
  margin-bottom: 10px;
}
.ch-description {
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 40px;
}
#content {
  height: auto;
  width: 84%;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
}
.c-image-box {
  width: 270px;
  height: 336px;
  border-radius: 6px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-image-box::after {
  content: " ";
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  width: 270px;
  height: 336px;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.8) 0%,
    rgba(26, 26, 26, 0.1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
}
.c-image-box:first-child,
.c-image-box:last-child {
  width: 566px;
}
.c-image-box:first-child::after,
.c-image-box:last-child::after {
  content: " ";
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  width: 566px;
  height: 336px;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.8) 0%,
    rgba(26, 26, 26, 0.1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
}
.c-image {
  width: 270px;
  height: 336px;
  object-fit: cover;
  border-radius: 6px;
}
.c-image-2 {
  width: 566px;
  object-fit: cover;
}

.action-button {
  position: absolute;
  z-index: 10;
  width: 100px;
  height: 30px;
  display: none;
  cursor: pointer;
  background-color: #eed99d;
  border: 0px;
  border-radius: 4px;
  font-size: 16px;
}
.action-button:hover {
  background-color: rgb(231, 200, 115);
}
.c-image-box:hover::after {
  background-color: rgba(26, 26, 26, 0.6);
}
.c-image-box:hover > .action-button {
  display: block;
}
</style>
