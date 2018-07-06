// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import commons from './utils/common'
import './styles/reset.less'
// 引入store（状态管理机）
import store from './store/index.js'

// vue-ydui
import { Switch } from 'vue-ydui/dist/lib.rem/switch'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.base.css'

Vue.component(Switch.name, Switch)
Vue.config.productionTip = false

// Object.keys() 返回一个对象所有属性的数组
// console.log(commons)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
