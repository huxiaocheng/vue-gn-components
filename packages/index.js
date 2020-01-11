import CheckIn from './checkIn'
import Countdown from './countdown'
import ImgLabel from './imgLabel'
import Magnifier from './magnifier'
import SlideCheck from './slideCheck'
import DragWrap from './DragWrap'
import DragItem from './DragItem'
import FindDiff from './FindDIff'
import watermark from './watermark'
import './reset.css'

const components = [
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  DragWrap,
  DragItem,
  FindDiff
]

const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
  Vue.use(watermark)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  DragWrap,
  DragItem,
  FindDiff,
  watermark
}

export default {
  install,
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  DragWrap,
  DragItem,
  FindDiff,
  watermark
}
