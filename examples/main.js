import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import './reset.css';
import VueGnComponents from '../packages'
Vue.use(VueGnComponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
