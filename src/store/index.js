import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersResults: {},
    loading: false,
    page: 1,
    error: false
  },
  getters: {
  },
  mutations: {
    setUsersResults(state, payload) {
      state.usersResults = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setErro(state, payload) {
      state.error = payload
    },
    setSearch(state, payload) {
      state.search = payload
    }
  },
  actions: {
    getUsersSearch({ commit },params) {
      commit('setLoading', true)
      commit('setUsersResults', {})
      axios.get(`https://api.github.com/search/users?q=${params.q}&per_page=20&page=${params.page}`)
        .then(response => {
          commit('setUsersResults', response.data)
          commit('setLoading', false)
          commit('setSearch', params.q)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setErro', true)
          console.log(error);
        });
    }
  },
  modules: {
  }
})
