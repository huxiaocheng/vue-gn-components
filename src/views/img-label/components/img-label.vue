<template>
  <div class="wrap">
    <!-- <div style="height: 2000px"></div> -->
    <img
      ref="img"
      class="img"
      :src="imgUrl"
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
        @contextmenu.prevent
        @dblclick="handleDoubleClick"
        @blur="handleDivBlur($event, index)"
        :style="{left: item.left + 'px', top: item.top + 'px'}"
      >{{item.text}}</div>
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
const LABEL_HEIGHT = 30;

export default {
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 500
    },
    themeColor: {
      type: String,
      default: "#3b8bcc"
    }
  },
  created() {
    this.pos = {};
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
      labels: JSON.parse(localStorage.getItem("__labels__")) || []
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
    handleVoidClick() {
      this.hideMenu();
    },
    handleDivBlur(e, index) {
      e.target.innerHTML === "" && this.labels.splice(index, 1);
      e.target.setAttribute("contenteditable", false);
    },
    handleDoubleClick(e) {
      e.target.setAttribute("contenteditable", true);
      e.target.focus();

      // 全选
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
    createdLabel() {
      this.labels.push({
        left: this.pos.left,
        top: this.pos.top,
        text: "新建标签",
        _id: new Date().getTime()
      });
    },
    saveLabel() {
      localStorage.setItem("__labels__", JSON.stringify(this.labels));
    },
    clearLabel() {
      localStorage.removeItem("__labels__");
      this.labels = [];
    },
    hideLabel() {
      this.isHideLabels = !this.isHideLabels;
      if (!this.labels.length) return;
      this.menus[3] = this.menus[3] === "显示标签" ? "隐藏标签" : "显示标签";
    },
    exportImg() {},
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
        if (e.clientY - bouding.top + LABEL_HEIGHT > this.img.offsetWidth) {
          this.pos["top"] = e.clientY - bouding.top - LABEL_HEIGHT;
        } else {
          this.pos["top"] = e.clientY - bouding.top;
        }

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
      e.target.style.backgroundColor = this.themeColor;
      e.target.style.color = "#fff";
    },
    onMouseLeave(e) {
      e.target.style.backgroundColor = "#fff";
      e.target.style.color = "#000";
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

  .img {
    display: block;
  }

  .label-list {
    .label-item {
      position: absolute;
      padding: 7px 10px;
      background: RGBA(0, 0, 0, 0.35);
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      user-select: none;
      outline: none;

      &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0px;
        border-width: 3px;
        border-style: solid;
        color: RGBA(0, 0, 0, 0.35);
      }

      &::after {
        border-left-color: transparent;
        border-bottom-color: transparent;
        top: 50%;
        right: 100%;
      }

      &::before {
        border-left-color: transparent;
        border-top-color: transparent;
        bottom: 50%;
        right: 100%;
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
