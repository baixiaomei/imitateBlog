import Vue from 'vue'
import vuex from 'vuex'
import dialogStore from './dialog_store.js' // 引入js对象
import moduleB from './moduleB.js'

Vue.use(vuex)

// 我们把store分离出去了，但是如果把所有状态都堆在这个文件不好维护  => vuex的modules
// export default new vuex.Store({
//   state: {
//     show: false // $store.state.show任何一个组件都可以获取到
//   }
// })

// 所以就有下面的代码

export default new vuex.Store({
  modules: {
    dialog: dialogStore,
    moduleB: moduleB
  }
})
