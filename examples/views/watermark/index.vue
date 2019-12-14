<template>
  <div>
    <img v-watermark="{src:src, text: 'hello'}" alt />
    <router-link to="/home" tag="button">去首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("./img/min.jpg")
    };
  }
};
</script>

<style lang="stylus" scoped></style>