<template>
  <div class="c-level-one-container">
    <div class="main-container">
      <div class="container-head">
        <h3 class="container-title">Get better experience with us</h3>
        <p class="container-description">
          Experience these exceptional services with us and make your stay truly
          unforgettable !
        </p>
      </div>
      <div class="content-container">
        <div class="facility-container">
          <span class="facility-icon material-icons">pool</span>
          <h4 class="facility-header">indoor swimming pool</h4>
          <p class="facility-content">
            Take a refreshing dip in our heated indoor pool, perfect for
            year-round relaxation
          </p>
        </div>
        <div class="facility-container">
          <span class="facility-icon material-icons">spa</span>
          <h4 class="facility-header">Spa and wellness center</h4>
          <p class="facility-content">
            Unwind with soothing treatments and therapies at our serene wellness
            center
          </p>
        </div>
        <div class="facility-container">
          <span class="facility-icon material-icons">restaurant</span>
          <h4 class="facility-header">Restaurant</h4>
          <p class="facility-content">
            Savor delicious cuisine crafted with fresh ingredients at our onsite
            restaurant
          </p>
        </div>
        <div class="facility-container">
          <span class="facility-icon material-icons">restaurant</span>
          <h4 class="facility-header">Free parking</h4>
          <p class="facility-content">
            Enjoy hassle free parking with complementary parking for all our
            guests
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-container {
  width: 98%;
  height: 450px;
  border-radius: 18px;
  background: #e7c873;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-title {
  color: #1a1a1a;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
}
.container-description {
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  margin-top: 7px;
}
.content-container {
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
}
.facility-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-inline: 60px;
}
.material-icons {
  font-size: 40px;
  margin-bottom: 20px;
}
.facility-header {
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 12px;
}
.facility-content {
  display: flex;
  width: 222.11px;
  height: 45.024px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #1a1a1a;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.512px; /* 190% */
}
</style>
