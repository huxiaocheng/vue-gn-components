<template>
  <div>
    <slot :date="date" />
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      date: {
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
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
        this.date.year =
          Math.floor(time / oneYear) > 1 ? Math.floor(time / oneYear) : 0;
      }
      if (time > oneMonth) {
        this.date.month =
          Math.floor((time % oneYear) / oneMonth) > 1
            ? Math.floor((time % oneYear) / oneMonth)
            : 0;
      }
      if (time > oneDay) {
        this.date.date =
          Math.floor(((time % oneYear) % oneMonth) / oneDay) > 1
            ? Math.floor(((time % oneYear) % oneMonth) / oneDay)
            : 0;
      }
      if (time > oneHours) {
        this.date.hours =
          Math.floor((((time % oneYear) % oneMonth) % oneDay) / oneHours) > 1
            ? Math.floor((((time % oneYear) % oneMonth) % oneDay) / oneHours)
            : 0;
      }
      if (time > oneMinutes) {
        this.date.minutes =
          Math.floor(
            ((((time % oneYear) % oneMonth) % oneDay) % oneHours) / oneMinutes
          ) > 1
            ? Math.floor(
                ((((time % oneYear) % oneMonth) % oneDay) % oneHours) /
                  oneMinutes
              )
            : 0;
      }
      if (time > 1) {
        this.date.seconds =
          Math.floor(
            (((((time % oneYear) % oneMonth) % oneDay) % oneHours) %
              oneMinutes) /
              1
          ) > 1
            ? Math.floor(
                (((((time % oneYear) % oneMonth) % oneDay) % oneHours) %
                  oneMinutes) /
                  1
              )
            : 0;
      }
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