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
    this.i = 0;
    setTimeout(() => {
      // this.card.style.left = 10 + "px";
    }, 100);
  },
  methods: {
    initCanvas() {
      this.initWidth =
        typeof this.width === "number" ? this.width : +this.width.slice(0, -2);

      this.initHeight =
        typeof this.height === "number"
          ? this.height
          : +this.height.slice(0, -2);

      const bgInitX = this._random(this.initWidth / 2, this.initWidth - 50);
      const cardInitX = 0;
      const initY = this._random(0, this.initHeight - 50);

      this.drawImage(bgInitX, cardInitX, initY);
    },
    drawImage(bgInitX, cardInitX, initY) {
      this.bg = this.$refs["bg"];
      this.bgCtx = this.bg.getContext("2d");
      this.bg.width = this.initWidth;
      this.bg.height = this.initHeight;

      this.card = this.$refs["card"];
      this.cardCtx = this.card.getContext("2d");
      this.card.width = this.initWidth;
      this.card.height = this.initHeight;

      this.img = new Image();
      this.img.src = this.src;
      this.img.onload = () => {
        this.bgCtx.drawImage(this.img, 0, 0, this.initWidth, this.initHeight);
        this.cardCtx.drawImage(this.img, 0, 0, this.bg.width, this.initHeight);
      };
      const bgPos = {
        x: bgInitX,
        y: initY,
        r: 10
      };
      const cardPos = {
        x: cardInitX,
        y: initY,
        r: 10
      };
      this.drawBlock(this.bgCtx, bgPos, "fill");
      this.drawBlock(this.cardCtx, cardPos, "clip");
      setTimeout(() => {
        const imgData = this.bgCtx.getImageData(0, 0, 300, 300);
        this.cardCtx.putImageData(imgData, 0, 0, 100, 100, 300, 100);
      }, 100);
    },
    drawBlock(ctx, xy, type) {
      const x = xy.x;
      const y = xy.y;
      const r = xy.r;
      const w = r * 2;
      const PI = Math.PI;

      ctx.beginPath();
      ctx.lineTo(x, y);
      ctx.arc(x + w, y, r, PI, 0);
      ctx.lineTo(x + 2 * w, y);
      ctx.arc(x + 2 * w, y + w, r, 1.5 * PI, 0.5 * PI);
      ctx.lineTo(x + 2 * w, y + 2 * w);
      ctx.lineTo(x, y + w + w);
      ctx.arc(x, y + w, r, 0.5 * PI, 1.5 * PI, true);
      ctx.lineTo(x, y);

      ctx.lineWidth = 1;
      ctx.fillStyle = this.theme;
      ctx.strokeStyle = "rgba(255,255,255,.5)";
      ctx.stroke();
      ctx[type]();
      ctx.globalCompositeOperation = "xor";
    },
    _random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
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