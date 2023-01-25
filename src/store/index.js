import { createStore } from 'vuex'

export default createStore({
  state: {
    valor: 3000,
  },
  getters: {
  },
  mutations: {
    incrementar: function(state) {
      state.valor += 8
    },
  },
  actions: {
  },
  modules: {
  }
})
