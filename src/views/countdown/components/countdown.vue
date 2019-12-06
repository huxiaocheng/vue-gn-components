<template>
  <div></div>
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
      time: {
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
      this.normalizeTime(time);
    },
    normalizeTime(time) {
      const D = new Date(time);
      this.time.year = D.getFullYear();
      this.time.month = D.getMonth() + 1;
      this.time.date = D.getDate();
      this.time.hours = D.getHours();
      this.time.Minutes = D.getMinutes();
      this.time.seconds = D.getSeconds();
      this.time.milliseconds = D.getMilliseconds();
    }
  }
};
</script>

<style lang="stylus" scoped></style>