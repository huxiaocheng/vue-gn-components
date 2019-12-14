<template>
  <div>
    <div>倒计时模式: 距离{{date}}还剩下:</div>
    <br />
    <countdown :time="date" ref="countdown1" @end="end1">
      <template
        v-slot="{date}"
      >{{date.year}}年-{{date.month}}月-{{date.date}}日-{{date.hours}}小时-{{date.minutes}}分钟-{{date.seconds}}秒</template>
    </countdown>
    <br />
    <button @click="start">开始</button>
    <button style="margin-left: 10px;" @click="pause">暂停</button>
    <br />
    <br />
    <br />
    <div>倒数模式:</div>
    <br />
    <countdown isSMSMode ref="countdown2" :totalTime="timeLeft" @end="end2">
      <template v-slot="{date}">{{date.timeLeft}}秒</template>
    </countdown>
    <br />
    <button @click="SMSModeStart">开始</button>
    <br />
    <br />
    <router-link to="/home" tag="button">去首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "2022.11.11",
      timeLeft: 60
    };
  },
  methods: {
    end1() {
      console.log("倒计时模式结束");
    },
    end2() {
      console.log("倒数模式结束");
    },
    SMSModeStart() {
      this.$refs["countdown2"].start();
    },
    pause() {
      this.$refs["countdown1"].pause();
    },
    start() {
      this.$refs["countdown1"].start();
    }
  }
};
</script>

<style lang="stylus" scoped></style>