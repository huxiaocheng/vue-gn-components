<template>
  <div>
    <canvas ref="canvas"></canvas>
    <!-- <input
      type="range"
      min="0.5"
      max="3.0"
      step="0.01"
      value="3.0"
      ref="scale-range"
      style="display: block;margin: 20px auto;width: 800px;"
    />
    <canvas ref="watermark-canvas" style="display:none;margin:0;border: 1px solid #aaa"></canvas>-->
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
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(50, 50, 40, 0, 0.5 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(150, 50, 40, 0, 0.5 * Math.PI, true);
      ctx.closePath();
      ctx.stroke();
    }
    // initCanvas() {
    //   const canvas = this.$refs["canvas"];
    //   canvas.width = 400;
    //   canvas.height = 400;
    //   const ctx = canvas.getContext("2d");
    //   this.watermarkCanvas = this.$refs["watermark-canvas"];
    //   this.watermarkCanvasCtx = this.watermarkCanvas.getContext("2d");
    //   const img = new Image();
    //   const slider = this.$refs["scale-range"];
    //   img.src = require("./img/timg.jpg");
    //   img.onload = () => {
    //     slider.addEventListener("mousemove", e => {
    //       const scale = e.target.value;
    //       this.drawImageByScale(scale, canvas, ctx, img);
    //     });
    //   };
    //   this.watermarkCanvas.width = 600;
    //   this.watermarkCanvas.height = 100;
    //   this.watermarkCanvasCtx.font = "bold 50px Arial";
    //   this.watermarkCanvasCtx.lineWidth = "1";
    //   this.watermarkCanvasCtx.fillStyle = "rgba(0,0,0,0.5)";
    //   this.watermarkCanvasCtx.textBaseLine = "middle";
    //   this.watermarkCanvasCtx.fillText("==hello world==", 20, 50);
    // },
    // drawImageByScale(scale, canvas, ctx, img) {
    //   const imgWidth = 400 * scale;
    //   const imgHeight = 400 * scale;
    //   const dx = canvas.width / 2 - imgWidth / 2;
    //   const dy = canvas.height / 2 - imgHeight / 2;
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   ctx.drawImage(img, dx, dy, imgWidth, imgHeight);
    //   ctx.drawImage(
    //     this.watermarkCanvas,
    //     canvas.width - this.watermarkCanvas.width,
    //     canvas.height - this.watermarkCanvas.height
    //   );
    // }
  }
};
</script>
