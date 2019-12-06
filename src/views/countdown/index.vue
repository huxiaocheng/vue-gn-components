<template>
  <div>
    <countdown :time="'2019-11-7-13-10-55'"></countdown>
    <router-link to="/home" tag="button">去首页</router-link>
  </div>
</template>

<script>
import Countdown from "./components/countdown";
export default {
  components: {
    Countdown
  }
};
</script>

<style lang="stylus" scoped></style>