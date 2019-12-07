<template>
  <div>
    <div>距离{{date}}还剩下:</div>
    <countdown :time="date" ref="countdown" :totalTime="5">
      <template
        v-slot="{date}"
      >{{date.year}}年-{{date.month}}月-{{date.date}}日-{{date.hours}}小时-{{date.minutes}}分钟-{{date.seconds}}秒</template>
    </countdown>
    <button @click="start">开始</button>
    <button @click="pause">暂停</button>
    <router-link to="/home" tag="button">去首页</router-link>
  </div>
</template>

<script>
import Countdown from "./components/countdown";
export default {
  data() {
    return {
      date: "2022.11.11"
    };
  },
  methods: {
    pause() {
      this.$refs["countdown"].pause();
    },
    start() {
      this.$refs["countdown"].start();
    }
  },
  components: {
    Countdown
  }
};
</script>

<style lang="stylus" scoped></style>