import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    stars: {}
  },
  mutations: {
    init_user(state, user) {
      state.user = user;
    },
    init_stars(state, starsData) {
      let allStars = {};
      for (let i = 0; i < starsData.length; i++) {
        allStars[starsData[i]['id']] = starsData[i]
      }
      state.stars = allStars
    },
    incrementVote(state, id) {
      if (id in state.stars) {
        state.stars[id]['votes']++;
      }
    },
    decrementVote(state, id) {
      if (id in state.stars) {
        state.stars[id]['votes']--;
      }
    },
    addUserVote(state, id) {
      let votes = state.user.vote_ids;
      if (!(votes.includes(id))) {
        votes.push(id)
      }
    },
    removeUserVote(state, id) {
      let votes = state.user.vote_ids;
      if (votes.includes(id)) {
        votes.splice(votes.indexOf(id), 1);
      }
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success';
      state.token = token;
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = '';
      state.token = '';
      state.user = {};
      state.stars = {};
    },
  },
  actions: {
    login({commit}, data) {
      return new Promise((resolve, reject) => {
        let url = data['url'];
        let vueObj = data['self'];
        delete data['self'];
        delete data['url'];

        commit('auth_request');
        console.log('#TODO: change this code.');
        // url = 'http://192.168.0.105:8000/user/login/';
        axios({
          url: url,
          data: data,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token);
            commit('init_user', user);
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error');
            localStorage.removeItem('token');
            vueObj.error = err.response.data['error'];
            reject(err)
          })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve()
      })
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    userVoted: state => id => {
      for (let i = 0; i < state.user.vote_ids.length; i++) {
        if (state.user.vote_ids[i] === id) {
          return true
        }
      }
      return false
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, {
          expires: 3,
          secure: false
        }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})