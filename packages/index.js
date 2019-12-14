import CheckIn from './checkIn'
import Countdown from './countdown'
import ImgLabel from './imgLabel'
import Magnifier from './magnifier'
import SlideCheck from './slideCheck'
import watermark from './watermark'
import './reset.css'

const components = [
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck
]

const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
  Vue.directive('watermark', watermark)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}