<template>
  <div class="slider-check-wrap">
    <router-link to="/home" tag="button">去首页</router-link>
    <slide-check :width="300" :height="300" :src="src" @success="success" @fail="fail"></slide-check>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: [require("./img/timg.jpg"), require("./img/min.jpg")]
    };
  },
  methods: {
    fail() {
      console.log("fail");
    },
    success(pos) {
      console.log(pos);
    }
  }
};
</script>

<style lang="stylus"></style>
