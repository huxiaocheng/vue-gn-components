<template>
  <div class="slider-check-wrap">
    <router-link to="/home" tag="button">去首页</router-link>
    <slider-check :width="500" :height="500" :src="src" @success="success" @fail="fail"></slider-check>
  </div>
</template>

<script>
import SliderCheck from "./components/slide-check";
export default {
  data() {
    return {
      src: [require("./components/img/timg.jpg")]
    };
  },
  methods: {
    fail() {
      console.log("fail");
    },
    success(pos) {
      console.log(pos);
    }
  },
  components: {
    SliderCheck
  }
};
</script>

<style lang="stylus"></style>
