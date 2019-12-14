<template>
  <div>
    <router-link to="/home" tag="button">去首页</router-link>
    <Watermark />
  </div>
</template>

<script>
import Watermark from "../../../packages/watermark/watermark";

export default {
  components: {
    Watermark
  }
};
</script>

<style lang="stylus" scoped></style>