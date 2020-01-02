<template>
  <div ref="wrap" @dragenter.prevent @dragover.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "DragWrap",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    this.toDom = "";
    this.fromDom = "";
    this.children = [];
    this.$on("dragstart", this.onDragstart);
    this.$on("dragenter", this.onDragenter);
    this.$on("dragend", this.onDragend);
    this.$on("putChild", child => {
      this.children.push(child);
    });
  },
  methods: {
    onDragstart(el) {
      this.fromDom = el;
    },
    onDragenter(el) {
      this.toDom = el;
      if (this.fromDom === this.toDom) {
        return;
      }
      if (this.isPrevNode(this.fromDom, this.toDom)) {
        this.$refs["wrap"].insertBefore(this.fromDom, this.toDom);
      } else {
        this.$refs["wrap"].insertBefore(this.fromDom, this.toDom.nextSibling);
      }
    },
    onDragend() {
      if (!this.data.length) return;
      const realDomOrder = [...this.$el.children].filter(child =>
        child.classList.contains("__drag_item")
      );
      this.getDataOrder(realDomOrder, this.children);
    },
    isPrevNode(from, to) {
      while (from.previousSibling !== null) {
        if (from.previousSibling === to) {
          return true;
        }
        from = from.previousSibling;
      }
    },
    getDataOrder(realList, dragAfterList) {
      const order = realList.map(realItem => {
        return dragAfterList.findIndex(dragItem => realItem === dragItem);
      });
      const newData = [];
      order.forEach((item, i) => {
        newData[i] = this.data[item];
      });
      this.$emit("watchData", newData);
    }
  }
};
</script>
