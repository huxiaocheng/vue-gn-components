<template>
  <div>
    <div>
      <button style="margin-left: 10px" @click="onCheckIn(0)">立即签到今天</button>
      <button style="margin-left: 10px" @click="onCheckIn(1)">测试签到下一天</button>
      <button style="margin-left: 10px" @click="onCheckIn(3)">测试签到三天后</button>
    </div>
    <CheckIn :checkIns="checkIns" :size='300'/>
  </div>
</template>

<script>
import CheckIn from "./components/checkIn";

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
      const D = new Date();
      this.curYear = D.getFullYear();
      this.curMonth = D.getMonth() + 1 < 10 ? "0" + D.getMonth() : D.getMonth();
      this.curDay = D.getDate() < 10 ? "0" + D.getDate() : D.getDate();
    },
    retCheckIns(n) {
      const newD = new Date(this.curYear, this.curMonth, (this.curDay += n));
      const newYear = newD.getFullYear();
      const newMonth =
        newD.getMonth() + 1 < 10
          ? "0" + (newD.getMonth() + 1)
          : newD.getMonth() + 1;
      const newDay =
        newD.getDate() < 10 ? "0" + newD.getDate() : newD.getDate();
      return `${newYear}-${newMonth}-${newDay}`;
    },
    onCheckInToday() {
      const D = new Date();
      const y = D.getFullYear();
      const m =
        D.getMonth() + 1 < 10 ? "0" + (D.getMonth() + 1) : D.getMonth() + 1;
      const d = D.getDate() < 10 ? "0" + D.getDate() : D.getDate();
      return `${y}-${m}-${d}`;
    }
  },
  components: {
    CheckIn
  }
};
</script>