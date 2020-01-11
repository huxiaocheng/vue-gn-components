import watermark from './src/watermark'
watermark.install = function (Vue) {
  Vue.directive('watermark', watermark)
}
export default watermark
