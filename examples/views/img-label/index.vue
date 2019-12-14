<template>
  <div>
    <router-link to="/home" tag="button">去首页</router-link>
    <div style="margin: 50px; padding: 50px; border: 1px solid red;">
      <img-label :width="500" :src="require('./img/timg.jpg')"></img-label>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped></style>