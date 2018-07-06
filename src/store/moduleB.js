export default {
  state: {
    data: 1,
    data2: 2
  },
  getters: {
    returnData (state) {
      return state.data2
    }
  },
  actions: {
    changeData (context) {
      setTimeout(() => {
        context.state = context.state + 1
      })
    },
    changeData2 (context) {
      context.getters.returnData()
    }
  }
}
