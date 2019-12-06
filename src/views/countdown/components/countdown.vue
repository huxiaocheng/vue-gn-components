<template>
  <div>
    {{date.year}}
    {{date.month}}
    {{date.date}}
    {{date.hours}}
    {{date.minutes}}
    {{date.seconds}}
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
    }
  },
  created() {
    this.initTime();
  },
  data() {
    return {
      date: {
        year: "",
        month: "",
        date: "",
        hours: "",
        minutes: "",
        seconds: "",
        milliseconds: ""
      }
    };
  },
  methods: {
    initTime() {
      let time;
      if (Object.prototype.toString.call(this.time) === "[object Date]") {
        time = this.time;
      } else if (typeof this.time === "string") {
        if (this.time.indexOf("-") !== -1) {
          time = new Date(...this.time.split("-"));
        } else if (this.time.indexOf(".") !== -1) {
          time = new Date(...this.time.split("."));
        }
      } else if ((this.time + "").length === 13) {
        time = new Date(this.time);
      }
      time = time.getTime() - new Date().getTime();
      this.mySetInterval(() => {
        time -= 1000;
        this.normalizeTime(time);
      }, 1000);
    },
    normalizeTime(time) {
      time = time / 1000;
      const oneYear = 60 * 60 * 24 * 365;
      const oneMonth = 60 * 60 * 24 * 30;
      const oneDay = 60 * 60 * 24;
      const oneHours = 60 * 60;
      const oneMinutes = 60;
      if (time > oneYear) {
        this.date.year = Math.floor(time / oneYear);
      }
      if (time > oneMonth) {
        this.date.month = Math.floor((time % oneYear) / oneMonth);
      }
      if (time > oneDay) {
        this.date.date = Math.floor(((time % oneYear) % oneMonth) / oneDay);
      }
      if (time > oneHours) {
        this.date.hours = Math.floor(
          (((time % oneYear) % oneMonth) % oneDay) / oneHours
        );
      }
      if (time > oneMinutes) {
        this.date.minutes = Math.floor(
          ((((time % oneYear) % oneMonth) % oneDay) % oneHours) / oneMinutes
        );
      }
      if (time > 1) {
        this.date.seconds = Math.floor(
          (((((time % oneYear) % oneMonth) % oneDay) % oneHours) % oneMinutes) /
            1
        );
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