import Vuex from 'vuex'
import Vue from 'vue'
import loginStore from './modules/loginStore'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{},
  modules:{
      loginStore
  }
})