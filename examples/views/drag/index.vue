<template>
  <div>
    <drag-wrap class="wrap">
      <drag-item class="wrap-item" style="background: blue">
        <drag-wrap style="background: green;">
          <drag-item>
            <div class="item">aaa111</div>
          </drag-item>
          <drag-item>
            <div class="item">bbb</div>
          </drag-item>
          <drag-item>
            <div class="item">ccc</div>
          </drag-item>
        </drag-wrap>
      </drag-item>
      <drag-item class="wrap-item" style="background: red">
        <drag-wrap style="background: #666;">
          <drag-item>
            <div class="item green">111</div>
          </drag-item>
          <drag-item>
            <div class="item green">222</div>
          </drag-item>
          <drag-item>
            <div class="item green">333</div>
          </drag-item>
        </drag-wrap>
      </drag-item>
      <drag-item class="wrap-item" style="background: green">
        <drag-wrap style="background: red;">
          <drag-item>
            <div class="item blue">+++</div>
          </drag-item>
          <drag-item>
            <div class="item blue">---</div>
          </drag-item>
          <drag-item>
            <div class="item blue">***</div>
          </drag-item>
        </drag-wrap>
      </drag-item>
    </drag-wrap>
  </div>
</template>

<script>
import DragWrap from "../../../packages/DragWrap";
import DragItem from "../../../packages/DragItem";
export default {
  components: {
    DragWrap,
    DragItem
  }
};
</script>

<style scoped>
.wrap {
  display: flex;
}
.wrap-item {
  display: flex;
  margin-right: 20px;
  width: 200px;
  background: #ccc;
}
.item {
  margin: 50px 10px;
  height: 60px;
  width: 100px;
  color: #fff;
  background: red;
}
.item.green {
  background: green;
}
.item.blue {
  background: blue;
}
</style>