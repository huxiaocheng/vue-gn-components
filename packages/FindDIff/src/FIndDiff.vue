<template>
  <div>
    <input @paste="onUpload" @blur="onblur" readonly ref="input" placeholder="Ctrl + v复制截图" />
    <span style="color: red;">{{tip}}</span>
  </div>
</template>
<script>
export default {
  name: "FindDiff",
  data() {
    return {
      tip: ""
    };
  },
  created() {
    this.imgPos = {};
  },
  mounted() {
    document.addEventListener("click", this.getFocus);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.getFocus);
  },
  methods: {
    onblur() {
      this.tip = "";
    },
    getFocus() {
      this.$refs["input"].focus();
    },
    onUpload(e) {
      const file =
        e.clipboardData.items[0] && e.clipboardData.items[0].getAsFile();
      if (!file) {
        this.tip = "没有可以复制的数据";
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const width = img.width;
          const height = img.height;
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          const imgData = ctx.getImageData(0, 0, width, height);
          const pixelData = imgData.data;
          function rgbAddUp(pos) {
            return (
              pixelData[4 * pos + 0] +
                pixelData[4 * pos + 1] +
                pixelData[4 * pos + 2] ===
              404
            );
          }
          for (let y = 0; y < 200; y++) {
            for (let x = 0; x < 200; x++) {
              const p = rgbAddUp(y * img.width + x);
              const top = rgbAddUp((y - 1) * img.width + x);
              const right = rgbAddUp(y * img.width + x + 1);
              const bottom = rgbAddUp((y + 1) * img.width + x);
              const left = rgbAddUp(y * img.width + x - 1);
              const rightTop = rgbAddUp((y - 1) * img.width + x + 1);
              const leftBottom = rgbAddUp((y + 1) * img.width + x - 1);
              if (
                p &&
                top &&
                left &&
                bottom &&
                rightTop &&
                leftBottom &&
                !right
              ) {
                if (!this.imgPos.y && !this.imgPos.x) {
                  this.imgPos.y = y;
                  this.imgPos.x = x - 10;
                  break;
                }
              }
              if (this.imgPos.y && this.imgPos.x) {
                break;
              }
            }
          }
          for (let y = this.imgPos.y; y < 286 + this.imgPos.y; y++) {
            for (let x = this.imgPos.x; x < 381 + this.imgPos.x; x++) {
              if (
                pixelData[(y * img.width + x) * 4 + 0] + 10 >
                  pixelData[(y * img.width + x + 457) * 4 + 0] &&
                pixelData[(y * img.width + x) * 4 + 1] + 10 >
                  pixelData[(y * img.width + x + 457) * 4 + 1] &&
                pixelData[(y * img.width + x) * 4 + 2] + 10 >
                  pixelData[(y * img.width + x + 457) * 4 + 2]
              ) {
                pixelData[(y * img.width + x + 457) * 4 + 0] = 0;
                pixelData[(y * img.width + x + 457) * 4 + 1] = 0;
                pixelData[(y * img.width + x + 457) * 4 + 2] = 0;
              }
            }
          }
          if (!this.imgPos.y && !this.imgPos.x) {
            this.tip = "截图不符合";
            return;
          }
          delete this.imgPos.y;
          delete this.imgPos.x;
          const canDraw = document.getElementById("__canvas_diff_");
          canDraw && document.body.removeChild(canDraw);
          const canvas2 = document.createElement("canvas");
          const ctx2 = canvas2.getContext("2d");
          canvas2.id = "__canvas_diff_";
          canvas2.width = width;
          canvas2.height = height;
          ctx2.putImageData(imgData, 0, 0, 0, 0, width, height);
          document.body.appendChild(canvas2);
        };
      };
    }
  }
};
</script>
