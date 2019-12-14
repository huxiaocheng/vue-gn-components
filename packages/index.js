import CheckIn from './checkIn'
import Countdown from './countdown'
import ImgLabel from './imgLabel'
import Magnifier from './magnifier'
import SlideCheck from './slideCheck'
import Watermark from './watermark'

const components = [
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  Watermark
]

const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  Watermark
}