import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  threads: []
}

const mutations = {
  isiThreadState (state, payload){
    console.log('data mutasi ', payload);
    state.threads = payload
  },
  isiNewThreadState (state, payload){
    state.threads.unshift(payload)
  },
  spliceThread (state, id){
    let idx = state.threads.findIndex((thread) => thread._id === id)
    state.threads.splice(idx,1)
  }
}

const actions = {
  getAllThreads ({commit}) {
    http.get('/threads')
    .then(({data}) => {
      console.log('data threads ', data);
      commit('isiThreadState', data)
    })
    .catch(err=> console.log(err))
  },
  postNewThread ({commit}, newData) {
    http.post('/threads', newData)
    .then(({data}) => {
      commit('isiNewThreadState', data)
    })
    .catch(err=> console.log(err))
  },
  deleteThread ({commit}, id){
    console.log('data id ', id);
    http.delete(`/threads/${id}`)
    .then( ({data}) => {
      commit('spliceThread', id)
    })
    .catch(err=> console.log(err))
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
