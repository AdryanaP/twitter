import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: []
  },
  mutations: {
    addTweet(state, payload) {
      state.tweets.unshift(payload)
    },
    setTweet(state, payload) {
      state.tweets = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
