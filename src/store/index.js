import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users
    },
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions: {
    setUsers({commit}, data) {
      commit("setUsers", data);
    },
  },
  modules: {
  }
})
