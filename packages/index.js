import CheckIn from './CheckIn'
import Countdown from './Countdown'
import ImgLabel from './ImgLabel'
import Magnifier from './Magnifier'
import SlideCheck from './SlideCheck'
import DragWrap from './DragWrap'
import DragItem from './DragItem'
import watermark from './watermark'
import './reset.css'

const components = [
  CheckIn,
  Countdown,
  ImgLabel,
  Magnifier,
  SlideCheck,
  DragWrap,
  DragItem
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
  watermark
}