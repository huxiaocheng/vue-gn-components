<template>
  <div>
    <slider-check :src="src"></slider-check>
  </div>
</template>

<script>
import SliderCheck from "./components/slide-check";
export default {
  data() {
    return {
      src: require("./components/img/timg.jpg")
    };
  },
  components: {
    SliderCheck
  }
};
</script>
