<template>
  <div style="display: inline-block;">
    <div
      class="label-content"
      ref="cutScreen"
      :draggable="false"
      @contextmenu.prevent="handleContextmenu"
      @click="handleClickBlank"
      @dragover.prevent.stop
    >
      <img
        src="./img/timg.jpg"
        ref="img"
        class="img-content"
        :width="width"
        :height="height"
        :draggable="false"
      />
      <div
        v-for="(item, index) in labels"
        class="label"
        :data-index="index"
        :data-left="item.left"
        :data-top="item.top"
        :style="{left:item.left+'px',top:item.top+'px'}"
        :key="index"
        v-show="isShowAll"
        v-html="item.text"
        :draggable="true"
        @dragstart="handleDragstart"
        @dragend.prevent.stop="handleDragend"
        @dblclick="handleLabelDblclick"
        @blur="handleLableBlur"
        @focus="handleLabelFocus"
        @input="item.text=$event.target.innerHTML"
      ></div>
      <span
        class="contextmenu-create"
        ref="create"
        v-show="isContentmenuCreate"
        @click="handleContextmenuCreate"
      >新建标签</span>
    </div>
    <a ref="down" :href="screenUrl" :download="getDate()"></a>
    <br />
    <button @click="handleContextmenuCreate">新建标签</button>
    <button @click="save">保存</button>
    <button @click="clear">清除</button>
    <button @click="showAndHide">{{labelText}}</button>
    <button @click="exportImg">导出为图片</button>
  </div>
</template>

<script>
// import html2canvas from "html2canvas";

const CREATE_WIDTH = 117;
const CREATE_HEIGHT = 30;

export default {
  data() {
    return {
      labels: [],
      newLabel: null,
      isContentmenuCreate: false,
      isShowAll: true,
      screenUrl: ""
    };
  },
  created() {
    this.click = {};
    this.move = {};
    this.getLocalLabel();
  },
  props: {
    url: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 500
    },
    height: {
      type: [Number, String],
      default: "auto"
    },
    scale: {
      type: Number,
      default: 1.5
    }
  },
  computed: {
    labelText() {
      return this.isShowAll ? "隐藏所有标签" : "显示所有标签";
    }
  },
  methods: {
    handleLabelFocus(e) {
      if (document.selection) {
        let range = document.body.createTextRange();
        range.moveToElementText(e.target);
        range.select();
      } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNodeContents(e.target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    },
    getLocalLabel() {
      const datas = JSON.parse(localStorage.getItem("labelArr"));
      datas && (this.labels = datas);
    },
    handleContextmenu(e) {
      this.isContentmenuCreate = true;
      const _left = this.borderNum(
        e.offsetX,
        this.$refs.img.clientWidth,
        this.$refs.img.clientWidth - CREATE_WIDTH
      );
      const _top = this.borderNum(
        e.offsetY,
        this.$refs.img.clientHeight,
        this.$refs.img.clientHeight - CREATE_HEIGHT
      );
      this.$nextTick(() => {
        this.$refs.create.style.top = `${_top}px`;
        this.$refs.create.style.left = `${_left}px`;
        this.click.x = _left;
        this.click.y = _top;
      });
    },
    handleContextmenuCreate() {
      this.labels.push({
        text: `新建标签${this.labels.length + 1}`,
        top: this.click.y || 0,
        left: this.click.x || 0
      });
    },
    handleDragstart(e) {
      this.isContentmenuCreate = false;
      this.move._left = parseInt(this.getDomData(e.target, "left"));
      this.move._top = parseInt(this.getDomData(e.target, "top"));
      this.move.offsetX = e.offsetX;
      this.move.offsetY = e.offsetY;
      e.dataTransfer.setData("Text", "label-active");
      this.$emit("moveStart");
    },
    handleDragend(e) {
      const item = this.labels[this.getDomData(e.target, "index")];
      const _left = this.move._left + e.offsetX - this.move.offsetX;
      const _top = this.move._top + e.offsetY - this.move.offsetY;
      const _imgWidth = this.$refs.img.clientWidth;
      const _imgHeight = this.$refs.img.clientHeight;
      item.left = this.borderNum(
        _left,
        _imgWidth,
        _imgWidth - e.target.clientWidth - 1
      );
      item.top = this.borderNum(
        _top,
        _imgHeight,
        _imgHeight - e.target.clientHeight
      );
      this.$emit("moveEnd");
    },
    handleClickBlank() {
      this.isContentmenuCreate = false;
    },
    handleLabelDblclick(e) {
      e.target.setAttribute("contenteditable", true);
      e.target.focus();
    },
    handleLableBlur(e) {
      const index = this.getDomData(e.target, "index");
      if (this.labels[index].text === "") {
        this.labels.splice(index, 1);
      }
      e.target.setAttribute("contenteditable", false);
    },
    save() {
      let labelData = this.labels.slice();
      localStorage.setItem("labelArr", JSON.stringify(labelData));
    },
    showAndHide() {
      if (this.labels.length) {
        this.isShowAll = !this.isShowAll;
      } else {
        alert("没有标签需要隐藏");
      }
    },
    clear() {
      if (this.labels.length) {
        if (confirm("确认清除所有标签吗?")) {
          this.labels = [];
          localStorage.clear();
        }
      } else {
        alert("请至少新建一个标签");
      }
    },
    exportImg() {
      // const canvas2 = document.createElement("canvas");
      // const _canvas = this.$refs.cutScreen;
      // const width = parseInt(window.getComputedStyle(_canvas).width);
      // const height = parseInt(window.getComputedStyle(_canvas).height);
      // const context = canvas2.getContext("2d");
      // const scale = this.scale;
      // canvas2.width = width * scale;
      // canvas2.height = height * scale;
      // context.scale(scale, scale);
      // const opts = {
      //   scale,
      //   canvas: canvas2,
      //   width,
      //   height,
      //   useCORS: true
      // };
      // html2canvas(_canvas, opts).then(canvas => {
      //   context.imageSmoothingEnabled = false;
      //   this.screenUrl = canvas.toDataURL();
      //   setTimeout(() => {
      //     this.$refs.down.click();
      //   }, 20);
      // });
    },
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      const date1 = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      return `${year}-${month}-${date1}-图片`;
    },
    borderNum(moveWith, maxWidth, contentWith) {
      return moveWith > contentWith ? contentWith : moveWith < 0 ? 0 : moveWith;
    },
    getDomData(el, name, val) {
      const prefix = "data-";
      return val
        ? el.setAttribute(prefix + name, val)
        : el.getAttribute(prefix + name);
    }
  }
};
</script>

<style scoped>
.label-content {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
}
.label-content .label {
  position: absolute;
  padding: 7px 10px;
  background: RGBA(0, 0, 0, 0.35);
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  outline: none;
}
.label-content .label::before,
.label-content .label::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0px;
  border-width: 3px;
  border-style: solid;
  color: RGBA(0, 0, 0, 0.35);
}
.label-content .label::after {
  border-left-color: transparent;
  border-bottom-color: transparent;
  top: 50%;
  right: 100%;
}
.label-content .label::before {
  border-left-color: transparent;
  border-top-color: transparent;
  bottom: 50%;
  right: 100%;
}
.label-content .contextmenu-create {
  position: absolute;
  margin: 3px 0;
  padding: 5px 50px 5px 10px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  border-radius: 3px;
  background: #fff;
  transition: 0.3s all;
  box-shadow: 0 0 5px 1px #888;
}
.label-content .contextmenu-create:hover {
  color: #fff;
  background: #3b8bcc;
}
</style>
