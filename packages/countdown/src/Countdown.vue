<template>
  <div>
    <slot :date="date" />
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    time: {
      type: [Date, String, Number],
      default() {
        return new Date();
      }
    },
    isSMSMode: {
      type: Boolean,
      default: false
    },
    totalTime: {
      type: [Number, String],
      default: 0
    }
  },
  created() {
    if (!this.isSMSMode || localStorage.getItem("__SMS_total_time__") > 0) {
      this.start();
    }
  },
  beforeDestroy() {
    localStorage.removeItem("__SMS_total_time__");
    clearTimeout(this.timer);
  },
  data() {
    return {
      date: {
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        timeLeft: localStorage.getItem("__SMS_total_time__") || this.totalTime
      }
    };
  },
  methods: {
    start() {
      this.initTime();
    },
    pause() {
      clearTimeout(this.timer);
    },
    initTime() {
      if (this.isSMSMode && this.date.timeLeft > 0) {
        this.mySetInterval(timer => {
          localStorage.setItem("__SMS_total_time__", (this.date.timeLeft -= 1));
          this.timer = timer;
          if (localStorage.getItem("__SMS_total_time__") <= 0) {
            this.$emit("end");
            clearTimeout(timer);
            localStorage.removeItem("__SMS_total_time__");
          }
        }, 1000);
      } else {
        let time;
        if (Object.prototype.toString.call(this.time) === "[object Date]") {
          time = this.time;
        } else if (typeof this.time === "string") {
          if (this.time.indexOf("-") !== -1) {
            const temp = this.time.split("-");
            temp[1] = temp[1] - 1;
            time = new Date(...temp);
          } else if (this.time.indexOf(".") !== -1) {
            const temp = this.time.split(".");
            temp[1] = temp[1] - 1;
            time = new Date(...temp);
          }
        } else if ((this.time + "").length === 13) {
          time = new Date(this.time);
        }
        time = time.getTime() - new Date().getTime();

        if (time < 0) {
          return;
        }

        this.mySetInterval(timer => {
          time -= 1000;
          this.timer = timer;
          if (time <= 0) {
            this.$emit("end");
            this.pause();
          }
          this.normalizeTime(time);
        }, 1000);
      }
    },
    normalizeTime(time) {
      time = time / 1000;
      const oneYear = 60 * 60 * 24 * 365;
      const oneMonth = 60 * 60 * 24 * 30;
      const oneDay = 60 * 60 * 24;
      const oneHours = 60 * 60;
      const oneMinutes = 60;

      if (time > oneYear) {
        this.date.year = this.paramsProcess(time, oneYear);
      }
      if (time > oneMonth) {
        this.date.month = this.paramsProcess(time, oneYear, oneMonth);
      }
      if (time > oneDay) {
        this.date.date = this.paramsProcess(time, oneYear, oneMonth, oneDay);
      }
      if (time > oneHours) {
        this.date.hours = this.paramsProcess(
          time,
          oneYear,
          oneMonth,
          oneDay,
          oneHours
        );
      }
      if (time > oneMinutes) {
        this.date.minutes = this.paramsProcess(
          time,
          oneYear,
          oneMonth,
          oneDay,
          oneHours,
          oneMinutes
        );
      }
      if (time > 1) {
        this.date.seconds = this.paramsProcess(
          time,
          oneYear,
          oneMonth,
          oneDay,
          oneHours,
          oneMinutes,
          1
        );
      }
    },
    paramsProcess(...args) {
      const params = args.slice(0, -1);
      const last = args[args.length - 1];
      const val = params.reduce((pre, cur) => {
        return pre % cur;
      });
      return Math.floor(val / last > 1 ? val / last : 0);
    },
    mySetInterval(fn, delay) {
      let timer;
      const loop = (fn, delay) => {
        timer = setTimeout(() => {
          loop(fn, delay);
          fn.call(this, timer);
        }, delay);
      };
      loop(fn, delay);
    }
  }
};
</script>
