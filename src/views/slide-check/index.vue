<template>
  <div class="wrap">
    <router-link to="/home" tag="button">去首页</router-link>
    <slider-check :src="src" @verifiedPass="success"></slider-check>
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
    success(pos) {
      console.log(pos);
    }
  },
  components: {
    SliderCheck
  }
};
</script>

<style lang="stylus">
.wrap {
  margin: 50px;
}
</style>
