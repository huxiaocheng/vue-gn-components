<template>
  <div>
    <img src='./img/QQ截图20200108124516.png' />
    <find-diff />
    <router-link
      tag="button"
      to='/home'
      @click.native.stop="onClick"
    >去首页</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      const canDraw = document.getElementById("__canvas_diff_");
      canDraw && document.body.removeChild(canDraw);
    }
  }
};
</script>