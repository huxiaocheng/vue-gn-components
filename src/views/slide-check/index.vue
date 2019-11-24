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

      ctx.lineWidth = 10;
      ctx.strokeStyle = "#058";

      this.drawStar(ctx, 150, 300, 400, 400);
    },
    drawStar(ctx, r, R, x, y, rot = 0) {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos(((18 + i * 72 - rot) / 180) * Math.PI) * R + x,
          -Math.sin(((18 + i * 72 - rot) / 180) * Math.PI) * R + y
        );
        ctx.lineTo(
          Math.cos(((54 + i * 72 - rot) / 180) * Math.PI) * r + x,
          -Math.sin(((54 + i * 72 - rot) / 180) * Math.PI) * r + y
        );
      }
      ctx.closePath();
      ctx.stroke();
    }
  }
};
</script>