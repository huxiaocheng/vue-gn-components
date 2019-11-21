<template>
  <div class="wrap">
    <img
      class="img"
      :src="imgUrl"
      :width="imgWidth"
      :draggable="false"
      @click="isShowMenu = false"
      @contextmenu.prevent="handleContextmenu"
    />
    <div class="label"></div>
    <ul class="menu-list" v-show="isShowMenu" ref="menu">
      <li
        class="menu-item"
        v-for="item in menus"
        :key="item"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @click="onMenuClick(item)"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
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
    this.menus = ["新建标签", "保存标签", "清除标签", "隐藏标签", "导出为图片"];
  },
  data() {
    return {
      isShowMenu: false
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
          this.hideLabel();
          break;
        case "导出为图片":
          this.exportImg();
          break;
        default:
          "";
      }
    },
    createdLabel() {},
    saveLabel() {},
    clearLabel() {},
    hideLabel() {},
    exportImg() {},
    handleContextmenu(e) {
      this.isShowMenu = true;
      console.log(e)
      // this.$refs['menu'].style.left =
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
  display: inline-block;
  position: relative;
  border: 1px solid #ccc;

  .img {
    display: block;
  }

  .label {
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

  .menu-list {
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

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
