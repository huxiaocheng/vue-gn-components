<template>
  <div
    @dragstart.stop="onDragstart"
    @dragenter.stop="onDragenter"
    @dragend.stop="onDragend"
    @dragleave.stop="onDragleave"
    draggable
    style="cursor: move"
  >
    <slot />
  </div>
</template>

<script>
import {
  findComponentsUpward,
  findBrothersComponents,
  findComponentsDownward
} from "../../utils/assist";

export default {
  name: "DragItem",
  data() {
    return {
      targetEl: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$parent && this.$parent.$options.name === "DragWrap") {
        this.$parent.$emit("putChild", this.$el);
      }
    });
    this.brotherIds = findBrothersComponents(this, "DragItem", false).map(
      brother => brother._uid
    );
  },
  methods: {
    onDragstart(e) {
      const parents = findComponentsUpward(this, "DragItem");
      const brothers = findBrothersComponents(this, "DragItem", false);
      if (parents.length > 0) {
        parents.forEach(parent => {
          parent.targetEl = this._uid;
          const children = findComponentsDownward(parent, "DragItem");
          if (children.length > 0) {
            children.forEach(child => {
              child.targetEl = this._uid;
            });
          }
        });
      } else if (brothers.length > 0) {
        brothers.forEach(brother => {
          brother.targetEl = this._uid;
        });
      }
      e.target.style.opacity = "0.5";
    },
    onDragenter(e) {
      if (!this.brotherIds.includes(this.targetEl)) {
        return;
      }
      if (this.$parent && this.$parent.$options.name === "DragWrap") {
        this.$parent.$emit("dragenter", this.$el, this, e.target);
      }
    },
    onDragend(e) {
      e.target.style.opacity = "1";
      const parents = findComponentsUpward(this, "DragItem");
      if (parents.length > 0) {
        parents.forEach(parent => {
          parent.targetEl = "";
          const children = findComponentsDownward(parent, "DragItem");
          if (children.length > 0) {
            children.forEach(child => {
              child.targetEl = "";
            });
          }
        });
      }
      if (this.$parent && this.$parent.$options.name === "DragWrap") {
        this.$parent.$emit("dragend", this.$el);
      }
    }
  }
};
</script>
