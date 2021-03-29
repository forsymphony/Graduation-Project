import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
  //生成对象
const  store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    addCount1(state,num) {
      state.count = num
      console.log(state.count)
    }
  },
  actions:{
    addCount(state,num) {
      state.count = num
      console.log(state.count)
    }
  },
  getter:{
  }
})
//抛出对象
export default  store;