<template>
  <div>
    <canvas
      ref="canvas"
      @mousedown.prevent="onMousedown"
      @mousemove.prevent="onMousemove"
      @mouseup.prevent="onMouseup"
      @mouseout.prevent="onMouseout"
      style="border: 1px solid #ccc; margin: 50px;"
    ></canvas>
    <canvas ref="watermark-canvas" style="display:none;margin:0;border: 1px solid #aaa"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs["canvas"];
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext("2d");

      this.watermarkCanvas = this.$refs["watermark-canvas"];
      this.watermarkCanvasCtx = this.watermarkCanvas.getContext("2d");

      this.img = new Image();
      this.isMouseDown = false;
      this.img.src = require("./components/img/timg.jpg");
      this.img.onload = () => {
        this.watermarkCanvas.width = this.img.width;
        this.watermarkCanvas.height = this.img.height;
        this.scale = this.watermarkCanvas.width / canvas.width;
        ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
        this.watermarkCanvasCtx.drawImage(this.img, 0, 0);
      };
    },
    onMousedown(e) {
      this.bound = this.$refs["canvas"].getBoundingClientRect();
      this.isMouseDown = true;
      this.left = e.clientX - this.bound.left;
      this.top = e.clientY - this.bound.top;
      this.drawMagnifier(true, this.left, this.top);
    },
    onMousemove(e) {
      if (!this.isMouseDown) return;
      this.left = e.clientX - this.bound.left;
      this.top = e.clientY - this.bound.top;
      this.drawMagnifier(true, this.left, this.top);
    },
    onMouseup() {
      this.isMouseDown = false;
      this.drawMagnifier(false);
    },
    onMouseout() {
      this.isMouseDown = false;
      this.drawMagnifier(false);
    },
    drawMagnifier(flag, left, top) {
      if (!flag) return;

      const canvas = this.$refs["canvas"];
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
      const imgMaxX = left * this.scale;
      const imgMaxY = top * this.scale;
      const mr = 50;
      const sx = imgMaxX - mr;
      const sy = imgMaxY - mr;
      const dx = left - mr;
      const dy = top - mr;
      ctx.save();
      ctx.drawImage(
        this.watermarkCanvas,
        sx,
        sy,
        2 * mr,
        2 * mr,
        dx,
        dy,
        2 * mr,
        2 * mr
      );
      ctx.restore();
    }
  }
};
</script>