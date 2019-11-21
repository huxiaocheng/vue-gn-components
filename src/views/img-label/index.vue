<template>
  <div>
    <img-label style="margin: 50px;" :imgUrl="require('./components/img/timg.png')"></img-label>
    <ImgLabelOld></ImgLabelOld>
  </div>
</template>

<script>
import ImgLabel from "./components/img-label";
import ImgLabelOld from "./components/img-label-old";

export default {
  components: {
    ImgLabel,
    ImgLabelOld
  }
};
</script>

<style lang="stylus" scoped></style>