<template>
  <div ref="wrap">
    <slot />
  </div>
</template>

<script>
import { find } from "../../utils";
export default {
  name: "DragWrap",
  created() {
    this.toDom = "";
    this.fromDom = "";
    this.children = [];
    this.$on("dragenter", this.onDragenter);
    this.$on("dragend", this.onDragend);
  },
  mounted() {
    this.$on("putChild", child => {
      this.children.push(child);
    });
  },
  methods: {
    onDragenter(el) {
      if (!this.isFrom) {
        this.fromDom = el;
        this.isFrom = true;
      } else {
        this.toDom = el;
      }
      if (this.fromDom && this.toDom) {
        if (this.fromDom === this.toDom) {
          return;
        }
        this.fromDomIndex = this.children.findIndex(
          item => item === this.fromDom
        );
        this.toDomIndex = this.children.findIndex(item => item === this.toDom);
        if (this.fromDomIndex > this.toDomIndex) {
          this.$refs["wrap"].insertBefore(this.fromDom, this.toDom);
        } else {
          this.$refs["wrap"].insertBefore(this.toDom, this.fromDom);
        }
        this.children[this.fromDomIndex] = this.toDom;
        this.children[this.toDomIndex] = this.fromDom;
      }
    },
    onDragend() {
      this.toDom = "";
      this.fromDom = "";
      this.isFrom = false;
      const parents = find.findComponentsUpward(this, "DragWrap");
      if (parents.length > 0) {
        parents.forEach(parent => {
          parent.toDom = "";
          parent.fromDom = "";
          parent.isFrom = false;
        });
      }
    }
  }
};
</script>