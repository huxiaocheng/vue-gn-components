<template>
  <drag-wrap class="wrap" :data="list" @watchData="watchData">
    <drag-item class="item" v-for="(item, index) in list" :key="index">
      <div>{{item}}</div>
      <template #drag>
        <div>拖拽Dom</div>
      </template>
    </drag-item>
  </drag-wrap>
</template>

<script>
export default {
  data() {
    return {
      list: [111, 222, 333, 444, 555, 666, 777, 888, 999]
    };
  },
  methods: {
    watchData(newList) {
      console.log("newList", newList);
    }
  }
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
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
  background: #369;
}
.item:nth-child(6) {
  margin-right: 150px;
}
.item.green {
  background: green;
}
.item.blue {
  background: blue;
}
</style>
