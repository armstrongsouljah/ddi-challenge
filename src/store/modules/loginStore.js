import axios from 'axios';

export default {
    state: {
        errors: null,
        success: null,
        userDetails: null,
        isLoggedIn: false
    },
    getters: {
        GET_DETAILS (state) {
            return {...state.userDetails}
        },
        GET_ERRORS (state) {
            return state.errors
        },
        GET_LOGGED_IN (state) {
            return state.isLoggedIn
        }
    },
    mutations: {
        SET_ERRORS (state, payload) {
           state.errors = payload
        },
        SET_SUCCESS (state, payload) {
            state.success = payload
        },
        SET_DETAILS (state, payload) {
            state.userDetails = payload
        },
        SET_IS_LOGGED_IN (state, payload) {
          state.isLoggedIn = payload
        }
    },
    actions: {
       async doLogin({ commit }, loginData) {
           commit('SET_SUCCESS', true)
           const {data}  = await axios.get('/users.json')
           const {results} = data
           const {email, password} = loginData
           const user = await results[0].filter(user => user.email === email && user.password === password)
           if(user.length) {
            //    localStorage.setItem('loggedin', true)
            commit('SET_IS_LOGGED_IN', true)
               commit('SET_DETAILS', user[0])
               return commit('SET_SUCCESS', true)
           }
           commit('SET_SUCCESS', false)
           commit('SET_ERRORS', 'Invalid Username or Passqword')
        //    localStorage.setItem('loggedIn', false)
        commit('SET_IS_LOGGED_IN', false)
       }
    }
}