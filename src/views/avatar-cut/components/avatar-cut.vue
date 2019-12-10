<template>
  <transition name="slider">
    <input ref="file" type="file" style="display: none;" @change="onInputChange" />
    <div class="wrap" v-if="isShow">
      <div class="mask"></div>
      <div class="operats">
        <div class="btn" @click="hide">取消</div>
        <div class="btn reset">还原</div>
        <div class="btn">完成</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      curFile: "",
      src: ""
    };
  },
  methods: {
    select() {
      this.$refs["file"].click();
    },
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    onInputChange(e) {
      const file = (this.curFile = e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        this.show();
        if (reader.readyState === 2) {
          this.src = reader.result;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;

  .mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
    box-sizing: border-box;
    width: 90%;
    height: 300px;
  }

  .operats {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    color: #fff;
    justify-content: space-between;
    padding: 0 27px;
    height: 70px;
    line-height: 70px;
    border-top: #303030 solid 1px;

    .btn {
      &.reset {
        color: #5b5b5b;
      }
    }
  }
}

.slider-enter-active, .slider-leave-active {
  transition: 0.3s all;
}

.slider-enter, .slider-leave-to {
  transform: translate3d(0, 100%, 0);
}
</style>