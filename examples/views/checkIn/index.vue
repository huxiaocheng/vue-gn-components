<template>
  <div>
    <div>
      <button style="margin-left: 10px" @click="onCheckIn(0)">立即签到今天</button>
      <button style="margin-left: 10px" @click="onCheckIn(1)">测试签到下一天</button>
      <button style="margin-left: 10px" @click="onCheckIn(3)">测试签到三天后</button>
      <router-link to="/home" style="margin-left: 10px" tag="button">去首页</router-link>
    </div>
    <CheckIn :checkIns="checkIns" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkIns: [],
      curYear: 0,
      curMonth: 0,
      curDay: 0
    };
  },
  created() {
    this.getCurrentDate();
  },
  methods: {
    onCheckIn(n) {
      if (n) {
        this.checkIns.push.apply(this.checkIns, [this.retCheckIns(n)]);
      } else {
        this.checkIns.push.apply(this.checkIns, [this.onCheckInToday()]);
      }
    },
    getCurrentDate() {
      this.curTime = new Date().getTime();
    },
    retCheckIns(n) {
      return (this.curTime += n * 24 * 60 * 60 * 1000);
    },
    onCheckInToday() {
      return new Date().getTime();
    }
  }
};
</script>
