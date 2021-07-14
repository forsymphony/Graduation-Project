/*
 * @Author: your name
 * @Date: 2021-03-01 10:42:43
 * @LastEditTime: 2021-04-06 23:56:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
  //生成对象
const  store = new Vuex.Store({
  state:{
    small:false
  },
  mutations:{
    addCount1(state,num) {
      state.count = num
      console.log(state.count)
    },
    setSamll(state,flag){
      state.small = flag
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