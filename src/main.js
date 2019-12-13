import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './reset.css';

import CheckIn from './lib/checkIn'
import Countdown from './lib/countdown'
import ImgLabel from './lib/imgLabel'
import Magnifier from './lib/magnifier'
import SlideCheck from './lib/slideCheck'
import Watermark from './lib/watermark'

Vue.config.productionTip = false;

const components = [
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  Watermark
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.vue) {
  install(window.Vue)
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
