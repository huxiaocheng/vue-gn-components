<template>
  <div class="wrap" ref="wrap">
    <div
      class="small-wrap"
      ref="small"
      @mouseleave="onMouseleave"
      @mousemove="onMousemove"
      @mouseenter="onMouseenter"
    >
      <div class="mask-wrap" ref="mask" v-show="enterShow"></div>
      <img :src="minImgUrl" :width="boxSize" :height="boxSize" />
    </div>
    <div class="max-wrap" ref="maxBox" v-show="enterShow">
      <img :src="maxImgUrl" class="img" ref="img" @load="setMaskSize" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxSize: {
      type: Number,
      default: 300
    },
    minImgUrl: {
      type: String,
      default: "./img/min.jpg"
    },
    maxImgUrl: {
      type: String,
      default: "./img/max.jpg"
    }
  },
  data() {
    return {
      enterShow: false
    };
  },
  mounted() {
    this.parentLeftPosition = 0;
    this.parentTopPosition = 0;
    setTimeout(() => {
      this.getParentAndComputed();
    }, 20);
  },
  methods: {
    getParentAndComputed() {
      let box = this.$refs["small"];
      const parents = [];
      while (box !== document) {
        parents.push(box);
        box = box.parentNode;
      }
      parents.forEach(el => {
        this.parentLeftPosition +=
          this.getDomAttr(el, "padding-left") +
          this.getDomAttr(el, "margin-left") +
          el.clientLeft;
        this.parentTopPosition +=
          this.getDomAttr(el, "padding-top") +
          this.getDomAttr(el, "margin-top") +
          el.clientTop;
      });
      this.initDom();
    },
    setMaskSize() {
      const mask = this.$refs["mask"];
      const maxImgWidth = this.$refs["img"].width;
      const minBoxWidth = this.getDomAttr(this.$refs["small"], "width");
      mask.style.width = (minBoxWidth / maxImgWidth) * minBoxWidth + "px";
      mask.style.height = (minBoxWidth / maxImgWidth) * minBoxWidth + "px";
    },
    initDom() {
      this.wrap = this.$refs["wrap"];
      this.maxBox = this.$refs["maxBox"];
      this.mask = this.$refs["mask"];
      this.maxImg = this.$refs["img"];
      this.small = this.$refs["small"];
      this.smallWidth = this.getDomAttr(this.small, "width");
      this.smallHeight = this.getDomAttr(this.small, "height");

      this.maxBox.style.width = this.boxSize + "px";
      this.maxBox.style.height = this.boxSize + "px";
    },
    getDomAttr(el, attr) {
      return parseInt(getComputedStyle(el)[attr].slice(0, -2));
    },
    onMouseenter() {
      this.enterShow = true;
    },
    onMouseleave() {
      this.enterShow = false;
    },
    onMousemove(e) {
      let left =
        e.clientX +
        window.scrollX -
        this.parentLeftPosition -
        this.mask.offsetWidth / 2;
      let top =
        e.clientY +
        window.scrollY -
        this.parentTopPosition -
        this.mask.offsetHeight / 2;

      this.maxBox.style.left =
        this.parentLeftPosition +
        window.scrollX +
        this.small.clientWidth +
        this.maxBox.clientLeft +
        "px";

      this.maxBox.style.top =
        this.parentTopPosition - window.scrollY - this.small.clientTop + "px";

      if (left < 0) {
        left = 0;
      } else if (left > this.small.offsetWidth - this.mask.offsetWidth) {
        left = this.small.offsetWidth - this.mask.offsetWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > this.small.offsetHeight - this.mask.offsetHeight) {
        top = this.small.offsetHeight - this.mask.offsetHeight;
      }
      this.mask.style.left =
        left + this.getDomAttr(this.wrap, "margin-left") + "px";
      this.mask.style.top =
        top + this.getDomAttr(this.wrap, "margin-top") + "px";

      const pX = left / (this.smallWidth - this.mask.offsetWidth);
      const pY = top / (this.smallHeight - this.mask.offsetHeight);

      this.maxImg.style.left =
        -pX * (this.maxImg.offsetWidth - this.maxBox.offsetWidth) + "px";
      this.maxImg.style.top =
        -pY * (this.maxImg.offsetHeight - this.maxBox.offsetHeight) + "px";
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  position: relative;

  .small-wrap {
    display: inline-block;
    opacity: move;
    z-index: 1;
    border: 1px solid #ccc;

    .mask-wrap {
      position: absolute;
      background: RGBA(255, 255, 255, 0.5);
      z-index: 1;
    }
  }

  .max-wrap {
    display: inline-block;
    position: fixed;
    border: 1px solid #ccc;
    overflow: hidden;
    background: #fff;

    .img {
      position: absolute;
    }
  }
}
</style>
