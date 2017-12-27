import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

//使用vuex插件
Vue.use(Vuex)

const state = {
  address:'',
  houseSource:'',
  startPlace:'',
  endPlace:'',
  tourismKeyword:''
}
//实例化vuex
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
