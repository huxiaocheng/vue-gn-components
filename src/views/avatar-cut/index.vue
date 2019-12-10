<template>
  <div>
    <ImageCur ref="image-cur" />
    <div class="select-img-btn" @click="selectImg">选择图片</div>
  </div>
</template>

<script>
import ImageCur from "./components/avatar-cut";

export default {
  methods: {
    selectImg() {
      this.$refs["image-cur"].select();
    }
  },
  components: {
    ImageCur
  }
};
</script>

<style lang="stylus" scoped>
.select-img-btn {
  display: block;
  margin: 10px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #258;
  border-radius: 10px;
}</style>