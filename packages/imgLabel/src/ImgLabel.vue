<template>
  <div class="wrap" ref="wrap">
    <img
      ref="img"
      class="img"
      :src="src"
      :width="imgWidth"
      :draggable="false"
      @click="handleVoidClick"
      @contextmenu.prevent="handleContextmenu"
    />
    <div class="label-list" v-show="isHideLabels">
      <div
        v-for="(item, index) in labels"
        :key="item._id"
        class="label-item"
        ref="label-item"
        :draggable="true"
        @contextmenu.prevent
        @dblclick="handleDoubleClick"
        @click="handleRemoveLabel(index)"
        @dragend="ondragend($event, index)"
        @dragstart="ondragstart($event,index)"
        :style="{left: item.left + 'px', top: item.top + 'px'}"
      >
        <span class="label-text" @click.stop @blur="handleDivBlur($event, index)">{{item.text}}</span>
      </div>
    </div>
    <ul class="menu-list" v-show="isShowMenu" ref="menu" @click="hideMenu">
      <li
        @contextmenu.prevent
        class="menu-item"
        v-for="(item, index) in menus"
        :key="index"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @click="onMenuClick(item)"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import DomToImg from "dom-to-image";
const LABEL_INIT_HEIGHT = 30;
const TRIANGLE_HEIGHT = 5;
const CLOSE_BTN_BORDER = 6;

export default {
  name: "ImgLabel",
  props: {
    isShowSaveBtn: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 500
    },
    theme: {
      type: String,
      default: "#3b8bcc"
    }
  },
  created() {
    this.pos = {};
    this.dragstart = {};
    !this.isShowSaveBtn && this.menus.splice(1, 1);
  },
  mounted() {
    this.$nextTick(() => {
      this.menu = this.$refs["menu"];
      this.img = this.$refs["img"];
    });
  },
  data() {
    return {
      isHideLabels: true,
      menus: ["新建标签", "保存标签", "清除标签", "隐藏标签", "导出为图片"],
      isShowMenu: false,
      labels: JSON.parse(localStorage.getItem(`__labels__`)) || []
    };
  },
  computed: {
    imgWidth() {
      return typeof this.width === "number"
        ? this.width
        : this.width.slice(0, -2);
    }
  },
  methods: {
    ondragend(e, index) {
      const bouding = this.img.getBoundingClientRect();
      const labelWidth = this.$refs["label-item"][index].clientWidth;
      const labelHeight = this.$refs["label-item"][index].clientHeight;
      this.labels[index].left = Math.max(
        0,
        Math.min(
          e.clientX - bouding.left - this.dragstart.left,
          bouding.width - labelWidth - CLOSE_BTN_BORDER
        )
      );
      this.labels[index].top = Math.max(
        0 + CLOSE_BTN_BORDER,
        Math.min(
          e.clientY - bouding.top - this.dragstart.top,
          bouding.height - labelHeight - TRIANGLE_HEIGHT * 2
        )
      );
    },
    ondragstart(e, index) {
      const bouding = this.img.getBoundingClientRect();
      this.dragstart["left"] =
        e.clientX - bouding.left - this.labels[index].left;
      this.dragstart["top"] = e.clientY - bouding.top - this.labels[index].top;
    },
    onMenuClick(item) {
      switch (item) {
        case "新建标签":
          this.createdLabel();
          break;
        case "保存标签":
          this.saveLabel();
          break;
        case "清除标签":
          this.clearLabel();
          break;
        case "隐藏标签":
        case "显示标签":
          this.hideLabel();
          break;
        case "导出为图片":
          this.exportImg();
          break;
        default:
          "";
      }
    },
    handleRemoveLabel(index) {
      this.labels.splice(index, 1);
    },
    handleVoidClick() {
      this.hideMenu();
    },
    handleDivBlur(e, index) {
      e.target.innerHTML === "" && this.labels.splice(index, 1);
      e.target.setAttribute("contenteditable", false);
      this.labels[index].text = e.target.innerText;
    },
    handleDoubleClick(e) {
      e.target.setAttribute("contenteditable", true);
      e.target.focus();
      this.$nextTick(() => {
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
      });
    },
    createdLabel() {
      this.labels.push({
        left: this.pos.left,
        top: this.pos.top,
        text: "新建标签",
        _id: new Date().getTime()
      });
    },
    saveLabel() {
      localStorage.setItem(`__labels__`, JSON.stringify(this.labels));
    },
    clearLabel() {
      localStorage.removeItem(`__labels__`);
      this.labels = [];
    },
    hideLabel() {
      this.isHideLabels = !this.isHideLabels;
      if (!this.labels.length) return;
      this.menus[3] = this.menus[3] === "显示标签" ? "隐藏标签" : "显示标签";
    },
    exportImg() {
      setTimeout(() => {
        DomToImg.toJpeg(this.$refs["wrap"]).then(dataUrl => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = this.getDate();
          link.click();
        });
      });
    },
    handleContextmenu(e) {
      const bouding = e.target.getBoundingClientRect();
      this.showMenu();
      this.$nextTick(() => {
        const left = Math.min(
          e.clientX - bouding.left,
          this.img.offsetWidth - this.menu.offsetWidth
        );
        const top = Math.min(
          e.clientY - bouding.top,
          this.img.offsetHeight - this.menu.offsetHeight
        );
        this.pos["left"] = left;
        this.pos["top"] =
          e.clientY - bouding.top + LABEL_INIT_HEIGHT + TRIANGLE_HEIGHT >
          this.img.offsetWidth
            ? e.clientY - bouding.top - LABEL_INIT_HEIGHT - TRIANGLE_HEIGHT
            : e.clientY - bouding.top;

        this.menu.style.top = top + "px";
        this.menu.style.left = left + "px";
      });
    },
    showMenu() {
      this.isShowMenu = true;
    },
    hideMenu() {
      this.isShowMenu = false;
    },
    onMouseEnter(e) {
      e.target.style.backgroundColor = this.theme;
      e.target.style.color = "#fff";
    },
    onMouseLeave(e) {
      e.target.style.backgroundColor = "#fff";
      e.target.style.color = "#000";
    },
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      const date1 = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      return `图片-${year}-${month}-${date1}`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  position: relative;
  display: inline-block;
  position: relative;
  border: 1px solid #ccc;
  padding: 0 !important;
  margin: 0 !important;
  background: #fff;

  .img {
    display: block;
  }

  .label-list {
    .label-item {
      position: absolute;
      background: RGBA(0, 0, 0, 0.35);
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      user-select: none;
      transition: 0.3s all;

      .label-text {
        display: inline-block;
        padding: 7px 10px;
        outline: none;
      }

      &:hover {
        background: RGBA(0, 0, 0, 0.5);

        &::after {
          border-color: RGBA(0, 0, 0, 0.5) RGBA(0, 0, 0, 0) RGBA(0, 0, 0, 0);
        }

        &::before {
          display: block;
          background: rgba(0, 0, 0, 1);
        }
      }

      &::after {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 0);
        content: ' ';
        display: block;
        width: 0;
        height: 0;
        transition: 0.3s all;
        border-width: 5px;
        border-style: solid;
        border-color: RGBA(0, 0, 0, 0.35) RGBA(0, 0, 0, 0) RGBA(0, 0, 0, 0);
      }

      &::before {
        display: none;
        position: absolute;
        right: -6px;
        top: -6px;
        content: 'x';
        width: 16px;
        height: 16px;
        line-height: 12px;
        font-size: 12px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        transition: 0.3s all;
      }
    }
  }

  .menu-list {
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background: #fff;
    overflow: hidden;

    .menu-item {
      padding: 10px;
      font-size: 14px;
      transition: 0.2s all;
    }

    .menu-item + .menu-item {
      border-top: 1px solid #ccc;
    }
  }
}
</style>
