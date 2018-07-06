// import {
//   SWITCH_DIALOG
// } from './mutation_type'
export default {
  state: {
    data: '我是dialog',
    show: false,
    imgUrl: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3206528002,1065096090&fm=85&s=0C38729306A405AB5A1CA07903008076',
    num: 0,
    products: true,
    listName: null
  },
  // getters和vue中的computed类似，都是用来计算state然后生成新的数据状态的
  // 如果我们需要一个状态show刚好相反的状态，可以如下操作
  getters: {
    not_show (state) {
      return !state.show
    },
    now_num (state) {
      return state.num
    },
    now_products (state) {
      return {
        num: state.num,
        products: state.products
      }
    },
    ListName (state) {
      return state.listName
    }
  },
  mutations: {
    switch_dialog (state) { // 这里的state对应着上面这个state
      state.show = !state.show
    },
    increase (state) {
      state.num = state.num + 1
    },
    decrease (state) {
      if (state.num <= 0) {
        state.num = 0
      } else {
        state.num = state.num - 1
      }
    },
    delete (state) {
      state.num = 0
      state.products = false
    },
    // 用mapMutation
    setListValue (state, value) {
      state.listName = value + '1'
    }
  },
  actions: {
    switch_dialog ({ commit }) { // 这里的context和我们使用的$store拥有相同的对象和方法
      commit('switch_dialog')
      // 你可以在这里触发其他的mutations方法
    },
    increase (context) {
      context.commit('increase')
    },
    decrease (context) {
      context.commit('decrease')
    }
  }
}
