<template>
  <div class="wrap">
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 500
    },
    bgColor: {
      type: String,
      default: "#3b8bcc"
    },
    textColor: {
      type: String,
      default: "#fff"
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  display: inline-block;
  position: relative;
}
</style>