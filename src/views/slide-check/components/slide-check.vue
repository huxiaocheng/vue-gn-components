<template>
  <div class="slider-check-wrap">
    <canvas ref="bg" class="bg-canvas"></canvas>
    <canvas ref="card" class="card-canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: 300
    },
    height: {
      type: [String, Number],
      default: 300
    },
    theme: {
      type: String,
      default: "#3b8bcc"
    }
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const bg = this.$refs["bg"];
      const card = this.$refs["card"];
      const bgCtx = bg.getContext("2d");
      const cardCtx = card.getContext("2d");
      const x = 150,
        y = 40,
        w = 42,
        r = 10,
        PI = Math.PI;
      const img = new Image();
      img.onload = () => {
        bgCtx.drawImage(img, 0, 0, 300, 300);
        cardCtx.drawImage(img, 0, 0, 300, 300);
        var blockWidth = w + r * 2;
        var _y = y - r * 2 + 2; // 滑块实际的y坐标
        var ImageData = cardCtx.getImageData(x, _y, blockWidth, blockWidth);
        card.width = blockWidth;
        cardCtx.putImageData(ImageData, 0, _y);
      };
      img.src = require("./img/timg.jpg");

      function draw(ctx, operation) {
        ctx.beginPath();
        ctx.moveTo(x, y) +
          ctx.lineTo(x + w / 2, y) +
          ctx.arc(x + w / 2, y - r + 2, r, 0, 2 * PI) +
          ctx.lineTo(x + w / 2, y);
        ctx.lineTo(x + w, y) +
          ctx.lineTo(x + w, y + w / 2) +
          ctx.arc(x + w + r - 2, y + w / 2, r, 0, 2 * PI) +
          ctx.lineTo(x + w, y + w / 2);
        ctx.lineTo(x + w, y + w);
        ctx.lineTo(x, y + w);
        ctx.lineTo(x, y);
        ctx.fillStyle = "#fff";
        ctx[operation]();
        ctx.beginPath();
        ctx.arc(x, y + w / 2, r, 1.5 * PI, 0.5 * PI);
        ctx.globalCompositeOperation = "xor";
        ctx.fill();
      }
      draw(bgCtx, "fill");
      draw(cardCtx, "clip");
    }
  }
  // methods: {
  //   initCanvas() {
  //     this.initWidth =
  //       typeof this.width === "number" ? this.width : +this.width.slice(0, -2);

  //     this.initHeight =
  //       typeof this.height === "number"
  //         ? this.height
  //         : +this.height.slice(0, -2);

  //     const bgInitX = this.random(this.initWidth / 2, this.initWidth - 50);
  //     const cardInitX = 0;
  //     const initY = this.random(0, this.initHeight - 50);

  //     this.drawImage(bgInitX, cardInitX, initY);
  //   },
  //   drawImage(bgInitX, cardInitX, initY) {
  //     this.bg = this.$refs["bg"];
  //     this.bgCtx = this.bg.getContext("2d");
  //     this.bg.width = this.initWidth;
  //     this.bg.height = this.initHeight;

  //     this.card = this.$refs["card"];
  //     this.cardCtx = this.card.getContext("2d");
  //     this.card.width = this.initWidth;
  //     this.card.height = this.initHeight;

  //     this.img = new Image();
  //     this.img.src = this.src;
  //     const bgPos = {
  //       x: bgInitX,
  //       y: initY,
  //       r: 10
  //     };
  //     const cardPos = {
  //       x: cardInitX,
  //       y: initY,
  //       r: 10
  //     };
  //     this.img.onload = () => {
  //       this.drawBlock(this.bgCtx, bgPos, "fill");
  //       this.drawBlock(this.cardCtx, cardPos, "clip");

  //       this.bgCtx.drawImage(this.img, 0, 0, this.initWidth, this.initHeight);
  //       this.cardCtx.drawImage(this.img, 0, 0, this.bg.width, this.initHeight);

  //       // const y = 20 - 10 * 2 - 1;
  //       const ImageData = this.bgCtx.getImageData(0, 0, 300, 300);
  //       this.cardCtx.putImageData(ImageData, 100, 100);
  //     };
  //   },
  //   drawBlock(ctx, xy, type) {
  //     const x = xy.x;
  //     const y = xy.y;
  //     const r = xy.r;
  //     const l = r * 4;
  //     const PI = Math.PI;
  //     ctx.beginPath();
  //     ctx.lineTo(x, y);
  //     ctx.arc(x + l / 2, y, r, PI, 0);
  //     ctx.lineTo(x + l, y);
  //     ctx.arc(x + l, y + l / 2, r, 1.5 * PI, 0.5 * PI);
  //     ctx.lineTo(x + l, y + l);
  //     ctx.lineTo(x, y + l);
  //     ctx.arc(x, y + l / 2, r, 0.5 * PI, 1.5 * PI, true);
  //     ctx.closePath();
  //     ctx.lineWidth = 1;
  //     ctx.fillStyle = this.theme;
  //     ctx.strokeStyle = "rgba(255,255,255,.8)";
  //     ctx.stroke();
  //     ctx[type]();
  //     ctx.globalCompositeOperation = "destination-over";
  //   },
  //   random(start, end) {
  //     return Math.round(Math.random() * (end - start) + start);
  //   }
  // }
};
</script>

<style lang="stylus" scoped>
.slider-check-wrap {
  .bg-canvas {
  }

  .card-canvas {
    position: absolute;
    left: 0;
  }
}
</style>
