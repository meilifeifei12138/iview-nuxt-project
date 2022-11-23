<template>
  <div class="father-box">
    <img src="~assets/image/404.webp" alt="404图片" />
    <div>
      <div class="back-button">
        <nuxt-link to="/" class="nuxt-link-color">首 页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.father-box {
  height: 100vh;
}
img {
  position: relative;
  width: 100%;
  height: 100vh;
}
.back-button {
  text-align: center;
  border: 1px solid skyblue;
  width: 5vw;
  height: 5vh;
  line-height: 5vh;
  position: absolute;
  z-index: 1;
  bottom: 10%;
  right: 50%;
  transform: translate(50%);
}
.nuxt-link-color {
  display: block;
}
</style>
