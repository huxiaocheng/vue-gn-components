<template>
  <div>
    <div class="magnifier-wrap" ref="wrap">
      <div
        class="small-wrap"
        ref="small"
        @mouseleave="onMouseleave"
        @mousemove="onMousemove"
        @mouseenter="onMouseenter"
      >
        <div class="mask-wrap" ref="mask" v-show="isShow"></div>
        <img :src="minImgUrl" :width="boxSize" :height="boxSize" />
      </div>
      <div class="max-wrap" ref="maxBox" v-show="isShow">
        <img
          :src="maxImgUrl"
          :style="{width: maxImgWidth + 'px', height: maxImgHeight + 'px'}"
          class="img"
          ref="img"
          @load="setMaskSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { tool } from '../../utils'

export default {
  name: 'Magnifier',
  props: {
    boxSize: {
      type: Number,
      default: 500
    },
    minImgUrl: {
      type: String,
      default: ""
    },
    maxImgUrl: {
      type: String,
      default: ""
    },
    autoReverse: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {
      isShow: false,
      maxImgWidth: "",
      maxImgHeight: ""
    };
  },
  mounted() {
    window.addEventListener('scroll', tool.throttle(this.setMaxBoxPos))
  },
  beforeDestroy() {
    window.removeEventListener('scroll', tool.throttle)
  },
  methods: {
    setMaskSize(e) {
      this.isLoad = true;
      this.maxImgWidth = e.target.width;
      this.maxImgHeight = e.target.height;
      this.$refs["img"].width = e.target.width;
      this.$refs["img"].height = e.target.height;
      this.$nextTick(() => {
        this.initDom();
      });
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
      this.isShow = true;
    },
    onMouseleave() {
      this.isShow = false;
    },
    onMousemove(e) {
      if (!this.wrap || !this.isLoad) return;

      const mask = this.$refs["mask"];
      const maxImgWidth = this.$refs["img"].width;
      const minBoxWidth = this.smallWidth;
      mask.style.width = minBoxWidth * (minBoxWidth / maxImgWidth) + "px";
      mask.style.height = minBoxWidth * (minBoxWidth / maxImgWidth) + "px";

      const leftPosition = this.wrap.getBoundingClientRect().left;
      const topPosition = this.wrap.getBoundingClientRect().top;
      const paddingLeft = this.getDomAttr(this.wrap, "padding-left");
      const padddingTop = this.getDomAttr(this.wrap, "padding-top");

      let left = e.clientX - leftPosition - this.mask.offsetWidth / 2;
      let top = e.clientY - topPosition - this.mask.offsetHeight / 2;

      this.setMaxBoxPos()

      if (left < paddingLeft) {
        left = paddingLeft;
      } else if (
        left >
        this.small.offsetWidth - this.mask.offsetWidth + paddingLeft
      ) {
        left = this.small.offsetWidth - this.mask.offsetWidth + paddingLeft;
      }

      if (top < padddingTop) {
        top = padddingTop;
      } else if (
        top >
        this.small.offsetHeight - this.mask.offsetHeight + padddingTop
      ) {
        top = this.small.offsetHeight - this.mask.offsetHeight + padddingTop;
      }

      this.mask.style.left = left + "px";
      this.mask.style.top = top + "px";
      const pX =
        (left - paddingLeft) / (this.smallWidth - this.mask.offsetWidth);
      const pY =
        (top - padddingTop) / (this.smallHeight - this.mask.offsetHeight);
      this.maxImg.style.left =
        -pX * (this.maxImg.width - this.maxBox.offsetWidth) + "px";
      this.maxImg.style.top =
        -pY * (this.maxImg.height - this.maxBox.offsetHeight) + "px";
    },
    setMaxBoxPos() {
      const leftPosition = this.wrap.getBoundingClientRect().left;
      const topPosition = this.wrap.getBoundingClientRect().top;
      const paddingLeft = this.getDomAttr(this.wrap, "padding-left");
      const padddingTop = this.getDomAttr(this.wrap, "padding-top");
      const maxBoxRightPos =
        leftPosition +
        this.maxBox.clientLeft +
        this.small.clientLeft +
        this.wrap.clientLeft +
        paddingLeft +
        this.small.clientWidth;

      const maxBoxLeftPos =
        leftPosition +
        this.wrap.clientLeft +
        paddingLeft -
        this.small.clientLeft * 2 -
        this.small.clientWidth;

      let maxBoxPos = -1;

      if (this.autoReverse) {
        const isMaxBoxExceedWindow =
          maxBoxRightPos + this.getDomAttr(this.maxBox, "width") >
          window.innerWidth;
        maxBoxPos = isMaxBoxExceedWindow ? maxBoxLeftPos : maxBoxRightPos;
      } else {
        if (this.direction === "right") {
          maxBoxPos = maxBoxRightPos;
        } else if (this.direction === "left") {
          maxBoxPos = maxBoxLeftPos;
        }
      }
      this.maxBox.style.left = maxBoxPos + "px";

      this.maxBox.style.top =
        topPosition +
        this.wrap.clientTop -
        this.maxBox.clientTop +
        padddingTop +
        this.small.clientTop +
        "px";
    }
  }
};
</script>

<style lang="stylus" scoped>
.magnifier-wrap {
  position: relative;
  box-sizing: border-box;

  .small-wrap {
    display: inline-block;
    z-index: 1;
    border: 1px solid #ccc;
    box-sizing: border-box;

    .mask-wrap {
      position: absolute;
      cursor: move;
      background: RGBA(255, 255, 255, 0.5);
      z-index: 1;
    }
  }

  .max-wrap {
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
