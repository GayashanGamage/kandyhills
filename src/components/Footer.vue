<template>
  <div class="c-level-one-container">
    <div class="main-container">
      <div class="footer-row">
        <h2 class="footer-hotel-title">Just Home</h2>
        <p class="foote-hotel-description">
          Best place to relax and enjoy your vacation
        </p>
        <div class="foote-social-links">
          <p class="footer-header">Follow US</p>
          <img
            src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-one/social-icon/facebook-white.png"
            alt="facebook-icon"
            class="social-icon"
          />
          <img
            src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-one/social-icon/instagram-white.png"
            alt="instagram-icon"
            class="social-icon"
          />
          <img
            src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/dumy-one/social-icon/youtube-white(1).png"
            alt="youtube-icon"
            class="social-icon"
          />
        </div>
      </div>
      <hr class="footer-divider" />
      <div class="footer-row footer-row-one">
        <div class="footer-sub-content">
          <p class="footer-header">Contact Us</p>
          <p class="footer-content">info@hotel23@.com</p>
          <p class="footer-content">(+94) 787389913</p>
        </div>
        <div class="footer-sub-content">
          <p class="footer-header">Our Address</p>
          <p class="footer-content">22, BOC avenue,</p>
          <p class="footer-content">Galle Fort, Galle.</p>
        </div>
        <div class="footer-sub-content">
          <p class="footer-header">Queck Link</p>
          <div class="page-links">
            <p class="footer-content">About</p>
            <p class="footer-content">Contact</p>
            <p class="footer-content">FAQs</p>
            <p class="footer-content">Blogs</p>
          </div>
        </div>
      </div>
      <hr class="footer-divider" />
      <p class="footer-content dev">Copyright @ 2024</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-container {
  margin-block: 20px;
  width: 98%;
  height: 300px;
  border-radius: 18px;
  background: #1a1a1a;
  margin-inline: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
}

.footer-divider {
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  height: 1px;
  width: 90%;
  margin-inline: auto;
}
.footer-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.47);
  font-size: 15px;
  font-weight: 500;
}
.footer-content {
  font-size: 15px;
  font-weight: 400;
  margin-block: 10px;
}
.footer-row {
  display: flex;
  align-items: center;
}
.footer-row-one {
  margin-left: 78px;
}
.foote-social-links {
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 30px 70px 10px 80px;
}
.dev {
  margin-inline: auto;
  margin-block: 16px;
}
.footer-sub-content {
  margin-right: 130px;
  margin-block: 36px;
}
.footer-hotel-title {
  padding: 30px 70px 10px 80px;
}
.page-links {
  display: flex;
  column-gap: 100px;
  line-height: 10px;
  width: 200px;
  flex-wrap: wrap;
}
.foote-hotel-description {
  padding: 30px 70px 10px 80px;
}
.social-icon {
  width: 45px;
  height: 30px;
}
</style>
