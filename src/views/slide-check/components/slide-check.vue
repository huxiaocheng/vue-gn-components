<template>
  <div class="wrap" :style="{ width: width + 'px' }">
    <div class="slider-check-wrap" :style="{ width: width + 'px' }">
      <canvas ref="bg" :width="width" :height="height" class="bg-canvas"></canvas>
      <canvas ref="card" :width="width" :height="height" class="card-canvas"></canvas>
      <div class="slider-wrap">
        <div
          class="btn"
          ref="btn"
          @mousedown="onMousedown"
          @mousemove="onMousemove"
          @mouseup="onMouseup"
        >></div>
        <div class="slider" ref="slider">{{tips}}</div>
      </div>
    </div>
  </div>
</template>

<script>
const BTN_WIDTH = 50;

export default {
  props: {
    radius: {
      type: Number,
      default: 10
    },
    src: {
      type: [String, Array],
      default: ""
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      range: 0,
      tips: "向右滑动完成拼图"
    };
  },
  mounted() {
    if (Array.isArray(this.src)) {
      this.initCanvas(this.src[0]);
    } else {
      this.initCanvas(this.src);
    }
    this.$nextTick(() => {
      this.pos = this.$refs["btn"].getBoundingClientRect();
      console.log(this.pos);
    });
  },
  methods: {
    onMousedown(e) {
      this.isEnterDown = true;
      this.diff = e.clientX - this.pos.left - 10;
    },
    onMousemove(e) {
      if (!this.isEnterDown) return;
      console.log(e.clientX);
      if (
        e.clientX - this.pos.left + BTN_WIDTH / 2 >
          this.$refs["slider"].clientWidth ||
        e.clientX - this.diff - this.pos.left - 10 < 0
      ) {
        return;
      }
      this.$refs["btn"].style.transform = `translate3d(${e.clientX -
        this.pos.left -
        this.diff -
        10}px,0,0)`;
    },
    onMouseup() {
      this.isEnterDown = false;
      this.$refs["btn"].style.transform = `translate3d(0,0,0)`;
    },
    // onMouseleave(e) {
    //   if (!this.isEnterDown) {
    //     return false;
    //   }
    //   this.isEnterDown = false;
    //   console.log(e);
    // },
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    initCanvas(src) {
      this.bg = this.$refs["bg"];
      const card = this.$refs["card"];
      const bgCtx = this.bg.getContext("2d");
      const cardCtx = card.getContext("2d");
      const r = this.radius;
      const w = this.radius * 4;
      const cardSize = w + r * 2;
      const x = this.random(this.width / 2, this.width - cardSize);
      const y = this.random(0, this.height - cardSize - 5 * r);

      const img = new Image();
      img.onload = () => {
        bgCtx.drawImage(img, 0, 0, this.width, this.height);
        cardCtx.drawImage(img, 0, 0, this.width, this.height);
        const _y = y - r * 2 + 3;
        const ImageData = cardCtx.getImageData(x, _y, cardSize, cardSize);
        card.width = cardSize;
        cardCtx.putImageData(ImageData, 0, _y);
      };
      const rect = {
        x,
        y,
        w,
        r
      };
      img.src = src;

      this.draw(bgCtx, "fill", rect);
      this.draw(cardCtx, "clip", rect);
    },
    draw(ctx, operation, rect) {
      const PI = Math.PI;
      const { x, y, w, r } = rect;
      ctx.beginPath();
      ctx.lineTo(x, y);
      ctx.arc(x + w / 2, y, r, PI, 0);
      ctx.lineTo(x + w, y);
      ctx.arc(x + w, y + w / 2, r, 1.5 * PI, 0.5 * PI);
      ctx.lineTo(x + w, y + w);
      ctx.lineTo(x, y + w);
      ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.stroke();
      ctx[operation]();
      ctx.globalCompositeOperation = "destination-over";
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  padding: 10px;
  display: inline-block;
}

.slider-check-wrap {
  position: relative;
  line-height: 1.5;
  text-align: left;
  font-family: 'Microsoft YaHei';
  background-color: #fff;
  cursor: default;
  z-index: 110;
  box-shadow: 0 0 2px 2px #eee;
  border: 1px solid #eee;

  .slider-wrap {
    position: relative;
    height: 40px;
    border-radius: 20px;
    margin: 10px;
    white-space: nowrap;
    background: #333;
    user-select: none;

    .btn {
      position: absolute;
      margin-top: -5px;
      left: 0;
      width: 50px;
      height: 50px;
      line-height: 46px;
      text-align: center;
      border-radius: 50%;
      font-size: 40px;
      color: #10b2fa;
      font-weight: bold;
      background: #666;
    }

    .slider {
      text-align: center;
      line-height: 40px;
    }
  }

  .card-canvas {
    position: absolute;
    left: 0;
  }
}
</style>
