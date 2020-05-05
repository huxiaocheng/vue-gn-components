日常开发使用组件库一般都能满足大部分的需求，不过有些功能组件可能库里并没有，这里开源一些特定项目可能会使用到的组件，希望可以帮助到大家~

## 示例查看
将本项目克隆到本地，安装完依赖，执行运行的命令即可查看到具体示例。

```
git clone git@github.com:huxiaocheng/vue-gn-components.git

npm i

npm run serve
```

## 快速上手

* 安装 
```
npm i vue-gn-components
```
* 引入
```
整体引入:
import VueGnComponents from "vue-gn-components";
import "vue-gn-components/lib/style/index.css";
Vue.use(VueGnComponents)

按需引入:
import { CheckIn, watermark } from "vue-gn-components";
import "vue-gn-components/lib/style/index.css";
Vue.use(CheckIn).use(watermark)
```
## 组件介绍
> ### 一、放大镜 (Magnifier)

![](https://user-gold-cdn.xitu.io/2019/12/11/16ef58a907617248?w=1593&h=459&f=gif&s=4953584)
* 组件安装:

```
import { Magnifier } from 'vue-gn-components';
Vue.use(Magnifier)
```

* 组件亮点：

无论组件的`dom`位置在页面何方，会准确计算鼠标位置以及自动在右侧悬浮一个查看区域，并且当右侧位置超过边界后，查看区域会自动出现在左边。

* 组件调用：

```
<magnifier
  :boxSize="400"
  :minImgUrl="require('./img/min.jpg')"
  :maxImgUrl="require('./img/max.jpg')"
></magnifier>
```

* 参数：

`boxSize`: 设置放大镜主体框的大小，会自动在右侧生成一个与之同样大小的查看放大图像的悬浮框，默认500。

`minImgUrl`: 放大镜小图的`url`。

`maxImgUrl`: 放大镜大图的`url`。

`autoReverse`: 是否开启右侧距离超过边界时，悬浮框自适应在左侧。默认`true`。

`direction`: 悬浮框的方向，默认`right`右侧。可选`left`。

> ### 二、签到 (CheckIn)
![](https://user-gold-cdn.xitu.io/2019/12/13/16effcc8bf9fbb02?w=721&h=495&f=gif&s=179129)

* 组件安装:

```
import { CheckIn } from 'vue-gn-components';
Vue.use(CheckIn)
```

* 组件亮点：

实现了功能。会将传入的一维数组的日期集合，按年月格式化为对象，在渲染某个月时，只会渲染对应当月的签到天数，数组拥有海量数据也不会大量渲染。

组件调用：
```
<template>
  <check-in :checkIns="checkIns" />
</template>

export default {
  return {
    checkIns: ['2019-12-15', '2019.12.18', 1576250061182]
  }
}
```

* 参数：

`checkIns`: 传入一个签到日期的一维数组集合，可以是时间戳、`2019-11-11`、`2019.11.11`格式。

`size`: 签到组件的整体大小，默认`500`，大小自适应。

> ### 三、图片标签 (ImgLabel)


![](https://user-gold-cdn.xitu.io/2019/12/13/16effcd3b6af817d?w=627&h=698&f=gif&s=1006472)

* 组件安装:

```
import { ImgLabel } from 'vue-gn-components';
Vue.use(ImgLabel)
```

* 组件亮点：

实现了功能。右击创建标签，双击编辑标签，可以单个移除，也可以全部清除，保存到本地缓存，导出为图片。

* 组件调用：

```
<img-label :src="require('./img/timg.jpg')"></img-label>
```

* 参数：

`isShowSaveBtn`: 是否显示保存按钮，默认`true`，会将标签数据保存到本地缓存。

`src`: 需要添加标签图片的`url`。

`width`：图片的宽，默认500。

`theme`: 主题色，默认`#3b8bcc`。

> ### 四、滑动验证(SlideCheck)

![](https://user-gold-cdn.xitu.io/2019/12/13/16effce3ac12ff25?w=508&h=425&f=gif&s=577548)

* 组件安装:

```
import { SlideCheck } from 'vue-gn-components';
Vue.use(SlideCheck)
```

* 组件亮点：

仿某电商的注册验证，不过使用纯`canvas`进行绘制，包括抠出来的拼图以及图片的渲染。而且在验证成功派发的事件里会记录用户滑动过程中上下分别抖动的最大距离。(可能机器是不会抖的，增加了一点点的安全性)

* 组件调用：

```
<slide-check 
  :width="300" 
  :height="300" 
  :src="src" 
  @success="success" 
  @fail="fail">
</slide-check>

export default {
  data() {
    src: [
      require("./img/timg.jpg"),
      require("./img/min.jpg")
    ]
  }
}
```

* 参数：

`radius`: 拼图突出圆心的半径值，也就是绘制的拼图的大小，默认`10`。

`src`: 单个`url`或多个`url`数组的集合，当为多个时，验证失败或成功都会随机选择另外一张图片。

`width`: 验证区域的宽，是`canvas`容器的`width`。

`height`: 验证区域的高。

`theme`: 主题色，默认`#369`。

* 事件：

`success`: 验证成功的回调，会派发一个对象出来，分别为上下波动的最大值。

`fail`: 验证没通过的回调。

> ### 五、倒计时(Countdown)

![](https://user-gold-cdn.xitu.io/2019/12/13/16effcfd21657b9e?w=451&h=211&f=gif&s=85192)

* 组件安装:

```
import { Countdown } from 'vue-gn-components';
Vue.use(Countdown)
```

* 组件亮点：

两种模式，一种是传入时间戳或`2022-5-12-17-20`或`2022.5.12.17.20`这样大于当前时间的格式。另一种是传入`60`这样的秒数，开始倒数之后刷新页面不会重新计时。没有做任何`css`的美化，只使用作用域插槽派发出对应的值。

* 组件使用：

```
<template>
<div>
  <countdown :time="date">
    <template v-slot="{date}">
      {{date.year}}年-{{date.month}}月-{{date.date}}日-{{date.hours}}小时-{{date.minutes}}分钟-{{date.seconds}}秒
    </template>
  </countdown>
  <countdown isSMSMode :totalTime="timeLeft">
    <template v-slot="{date}">{{date.timeLeft}}秒</template>
  </countdown>
</div>
</template>

export default {
  data() {
    return {
      date: "2022.11.11",
      timeLeft: 60
    };
  }
```

* 参数：

`time`： 传入大于当前时间的时间格式。

`isSMSMode`: 是否秒数倒数模式，默认`false`。

`totalTime`: 倒数模式的最大秒数。

* 作用域插槽 

`year`: 年; 

`month`: 月; 

`date`: 日; 

`hours`: 小时; 

`minutes`: 分钟; 

`seconds`: 秒钟; 

`timeLeft`: 倒数剩余秒数.


* 事件：

`end`：倒计时结束。

* 方法：

`start`：开始。

`pause`：暂停。

> ### 六、水印(watermark)

![](https://user-gold-cdn.xitu.io/2019/12/13/16effced4cca6665?w=737&h=506&f=gif&s=199763)

* 组件安装:

```
import { watermark } from 'vue-gn-components';
Vue.use(watermark)
```

* 指令亮点：

采用自定义指令形式，会将指令作用在`img`上的标签最终替换为`canvas`标签。使用离屏`canvas`进行绘制，一个绘制图像，另一个绘制水印，最终合并为一个`canvas`标签。

* 指令调用：

```
<template>
  <div>
    <img v-watermark="{src: src, text: 'hello world'}"/>
  </div>
</template>

export default {
  data() {
    return {
      src: require("./img/min.jpg")
    };
  }
}
```

* 指令参数：

`src`: 图片的`url`。

`text`: 水印的文字。

`opacity`: 水印的透明度，默认`0.3`。

`rotate`: 旋转角度，默认`20`。

`fontSize`: 水印字体大小，默认`20`。

`type`: 水印绘制的方式，默认是`repeat`全屏重复绘制。只绘制一条水印时，可选`left-top`左上，`right-top`右上，`right-bottom`右小，`left-bottom`左下。

> ### 七、拖拽组件(DragWrap/DragItem)

![](https://user-gold-cdn.xitu.io/2020/1/2/16f6688133489957?w=965&h=319&f=gif&s=197724)

* 组件安装:

```
import { DragWrap, DragItem } from 'vue-gn-components';
Vue.use(DragWrap).use(DragItem)
```

* 组件亮点：

拖拽的具体内容用户完全可以自己编写，也可以自己编写拖拽的控制点。

* 组件调用：

```
<template>
  <drag-wrap class="wrap" :data="list" @watchData="watchData">
    <drag-item class="item" v-for="(item, index) in list" :key="index">
      <template #drag>
        <div>拖拽Dom</div>
      </template>
      <div>{{item}}</div>
    </drag-item>
  </drag-wrap>
</template>

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
}
```

* 参数：

`data`：数组格式，`Dom`有对应的渲染数组，当`Dom`位置变了之后，数组也会发生变化，传递给组件内，改变后组件派发出来。

* 事件：

`watchData`：会将改变的数组派发出来，监听这个方法接收。

* 插槽：

`drag`：用户自己定义拖拽的控制点，没有时拖拽`Dom`项任意任意位置都可以。

> ### 八、找茬组件(FindDiff)

![](https://user-gold-cdn.xitu.io/2020/1/10/16f8d5ab6686a705?w=1848&h=828&f=gif&s=2265086)

* 组件安装:

```
import { FindDiff } from 'vue-gn-components';
Vue.use(FindDiff)
```

* 组件亮点：

'辅助'完成大家来找茬游戏。

* 组件调用：

```
<template>
  <find-diff/>
</template>
```

## 更多

更多的组件后续会持续添加以及优化，欢迎`pr`各种你使用到功能组件。如果对你有帮助，还请给个`Star`了，这也是我持续完善这个项目，持续的动力。




