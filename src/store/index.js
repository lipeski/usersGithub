import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersResults: {},
    loadding: false,
  },
  getters: {
  },
  mutations: {
    setUsersResults(state, payload) {
      state.usersResults = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    getUsersSearch({ commit },params) {
      axios.get(`https://api.github.com/search/users?q=${params.q}&per_page=20&page=${params.page}`)
        .then(response => {
          commit('setUsersResults', response.data)
          commit('setLoading', false)
          console.log(response.data.items);
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error);
        });
    }
  },
  modules: {
  }
})
