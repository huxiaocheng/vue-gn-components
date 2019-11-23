<template>
  <div>
    <router-link to="/home" tag="button">去首页</router-link>
    <div style="margin: 50px; padding: 50px; border: 1px solid red;">
      <img-label :width="500" :src="require('./components/img/timg.jpg')"></img-label>
    </div>
  </div>
</template>

<script>
import ImgLabel from "./components/img-label";

export default {
  components: {
    ImgLabel
  }
};
</script>

<style lang="stylus" scoped></style>