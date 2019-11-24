<template>
  <canvas ref="canvas" style="border: 1px solid #ccc; margin: 50px;"></canvas>
</template>

<script>
export default {
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs["canvas"];
      canvas.width = 800;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      this.drawRoundRect(ctx, 100, 100, 600, 500, 50);
    },
    drawRoundRect(ctx, x, y, width, height, radius) {
      ctx.save();
      ctx.translate(x, y);
      this.pathRoundRect(ctx, width, height, radius);
      ctx.strokeStyle = "#000";
      ctx.stroke();
      ctx.restore();
    },
    pathRoundRect(ctx, width, height, radius) {
      ctx.beginPath();
      ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
      ctx.lineTo(radius, height);
      ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
      ctx.lineTo(0, radius);
      ctx.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2);
      ctx.lineTo(width - radius, 0);
      ctx.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2);
      ctx.closePath();
    }
  }
};
</script>