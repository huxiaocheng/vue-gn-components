<template>
  <div class="datepicker-wrap">
    <div class="date-wrapper" :style="{'width': typeof size === String ? size : size + 'px'}">
      <div class="header">
        <a
          href="javascript:;"
          :style="{'color': theme}"
          class="btn prev"
          @click="showDateInfo('prevYear')"
        >&lt;&lt;</a>
        <a
          href="javascript:;"
          :style="{'color': theme}"
          class="btn prev"
          @click="showDateInfo('prevMonth')"
        >&lt;</a>
        <a
          href="javascript:;"
          :style="{'color': theme}"
          class="btn next"
          @click="showDateInfo('nextYear')"
        >&gt;&gt;</a>
        <a
          href="javascript:;"
          :style="{'color': theme}"
          class="btn next"
          @click="showDateInfo('nextMonth')"
        >&gt;</a>
        <span
          class="curr-month"
        >{{dateInfo.year}}-{{10 > dateInfo.month ? '0' + dateInfo.month : dateInfo.month}}</span>
      </div>
      <div class="date-content" ref="content">
        <ul class="week-title" :style="{'background': theme}">
          <li class="week-item">一</li>
          <li class="week-item">二</li>
          <li class="week-item">三</li>
          <li class="week-item">四</li>
          <li class="week-item">五</li>
          <li class="week-item">六</li>
          <li class="week-item">日</li>
        </ul>
        <ul
          class="date-list"
          ref="week"
          v-for="(item, i) in dateInfo.detailInfo.length / 7"
          :key="i"
        >
          <li
            class="date-item"
            v-for="(date,index) in dateInfo.detailInfo.slice(i * 7, i * 7 + 7)"
            :key="index"
            :class="{'active': date.isCheckIn, 'no-current-month': date.date !== date.curDate}"
            @click="onSelectMonth(date.curMonth + 1, dateInfo)"
          >
            {{date.curDate}}
            <span v-if="date.isCheckIn" :style="{'background': theme}"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckIn",
  props: {
    checkIns: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      type: [String, Number],
      default: 500
    },
    theme: {
      type: String,
      default: "#369"
    }
  },
  data() {
    return {
      dateInfo: {}
    };
  },
  created() {
    this.getDateInfo();
  },
  mounted() {
    this._normalizeTreeToInfo(this._createDateTree(this.checkIns));
  },
  watch: {
    checkIns(newIns) {
      this._normalizeTreeToInfo(this._createDateTree(newIns));
    }
  },
  methods: {
    getDateInfo(
      year = new Date().getFullYear(),
      month = new Date().getMonth() + 1
    ) {
      const currMonthFirstDay = new Date(year, month - 1, 1); // 当前月份第一天
      let currMonthFirstDayWeek = currMonthFirstDay.getDay(); // 是星期几
      !currMonthFirstDayWeek && (currMonthFirstDayWeek = 7); // 如果返回0 表示是星期日
      year = currMonthFirstDay.getFullYear();
      month = currMonthFirstDay.getMonth() + 1;
      const currMonthDate = new Date(year, month, 0); // 当前月份最后一天
      const currMonthDateDay = currMonthDate.getDate(); // 当前月有多少天
      const prevMonthLastDay = new Date(year, month - 1, 0); // 上个月最后一天
      const prevMonthLastDayWeek = prevMonthLastDay.getDate(); // 上个月有多少天
      const ret = [];
      for (let i = 0; i < 42; i++) {
        const date = i - currMonthFirstDayWeek + 2;
        let curDate = date;
        let curMonth = month - 1;
        if (date <= 0) {
          curMonth--;
          curDate = prevMonthLastDayWeek + date;
        } else if (date > currMonthDateDay) {
          curMonth++;
          curDate = date - currMonthDateDay;
        }
        if (curMonth >= 13) {
          curMonth = 12;
        }
        ret.push({
          date,
          year,
          curDate,
          curMonth,
          dateStr: normalizeDate(year, curMonth, curDate)
        });
      }
      function normalizeDate(year, month, day) {
        const D = new Date(year, month, day);
        const y = D.getFullYear();
        const m = D.getMonth() + 1 < 10 ? D.getMonth() + 1 : D.getMonth() + 1;
        const d = D.getDate() < 10 ? D.getDate() : D.getDate();
        return `${y}-${m}-${d}`;
      }
      this.dateInfo = {
        year,
        month,
        detailInfo: ret
      };
      this._normalizeTreeToInfo(this._createDateTree(this.checkIns));
    },
    onSelectMonth(month, curMonth) {
      if (month === curMonth.month) {
        return;
      }
      this.getDateInfo(curMonth.year, month);
    },
    showDateInfo(sign) {
      let { year, month } = this.dateInfo;
      if (sign === "prevYear") {
        year--;
      } else if (sign === "nextYear") {
        year++;
      } else if (sign === "prevMonth") {
        month--;
      } else if (sign === "nextMonth") {
        month++;
      }
      this.getDateInfo(year, month);
    },
    _createDateTree(dates) {
      if (!dates.length) {
        return {};
      }
      const ret = {};
      this._normalizeDate(dates).forEach(date => {
        const year = date.split("-")[0];
        const month = date.split("-")[1];
        ret[year] = ret[year] || {};
        (ret[year][month] || (ret[year][month] = [])).push(date);
        ret[year][month] = [...new Set(ret[year][month])];
      });
      return ret;
    },
    _normalizeDate(dates) {
      if (Array.isArray(dates)) {
        return dates.map(date => {
          if ((date + "").length === 13) {
            const D = new Date(date);
            return `${D.getFullYear()}-${D.getMonth() + 1}-${D.getDate()}`;
          } else if (date.indexOf(".") > -1) {
            return date.replace(/\./g, "-");
          } else {
            return date;
          }
        });
      }
    },
    _normalizeTreeToInfo(dateTree = {}) {
      if (!this.isSetFontSize) {
        setTimeout(() => {
          this.isSetFontSize = true;
          this.$refs["content"].style.fontSize =
            this.$refs["week"] &&
            this.$refs["week"][0].clientHeight * 0.3 + "px";
        }, 20);
      }

      if (!Object.keys(dateTree).length) {
        return;
      }
      const currentDate = dateTree[this.dateInfo.year]
        ? dateTree[this.dateInfo.year][
            this.dateInfo.month < 10 ? this.dateInfo.month : this.dateInfo.month
          ] || []
        : [];
      if (!currentDate.length) {
        return;
      }

      const { detailInfo } = this.dateInfo;
      for (let i = 0, l = currentDate.length; i < l; i++) {
        for (let j = 0, len = detailInfo.length; j < len; j++) {
          const info = detailInfo[j];
          if (info.dateStr === currentDate[i]) {
            info["isCheckIn"] = true;
          }
        }
      }

      this.dateInfo.detailInfo.__ob__.dep.notify();
    }
  }
};
</script>

<style scoped lang="stylus">
.datepicker-wrap {
  position: relative;
  display: inline-block;

  .date-wrapper {
    display: inline-block;
    margin: 10px;
    width: 300px;
    color: #666;
    box-shadow: 2px 2px 8px 2px RGBA(128, 128, 128, 0.3);

    .header {
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #f0f0f0;
      border-bottom: 1px solid #ccc;
      font-weight: bold;

      .btn {
        font-family: serif;
        padding: 0 8px;
        height: 50px;
        line-height: 50px;
        color: #42b2de;
        text-align: center;
        text-decoration: none;
      }

      .prev {
        float: left;
      }

      .next {
        float: right;
      }
    }

    .date-content {
      display: flex;
      flex-wrap: wrap;

      .week-title {
        display: flex;
        background: #80b6cc;
        width: 100%;
        color: #fff;
      }

      .week-item {
        flex: 1;
        padding-top: 4%;
        padding-bottom: 4%;
        text-align: center;
        border-left: 1px solid #fff;
      }
    }

    .date-list {
      display: flex;
      width: 100%;

      .date-item {
        position: relative;
        flex: 1;
        text-align: center;
        padding-top: 4%;
        padding-bottom: 4%;
        box-sizing: border-box;
        box-shadow: 0 0 0 1px #eee;

        > span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          content: ' ';
          display: block;
          padding-top: 50%;
          padding-left: 50%;
          border-radius: 50%;
          background: #80b6cc;
          opacity: 0.5;
        }

        &.no-current-month {
          color: #ccc;
          background: #fafafa;

          &:hover {
            cursor: pointer;
          }
        }

        &.active {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
