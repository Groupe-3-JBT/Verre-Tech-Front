import Cookies from 'js-cookie'

// Defining an empty state
export const state = () => {}

// Create a mutation that set a user to your state and in a 'user' cookie
export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  
  logout(state) {
    state.user = null
    Cookies.set('user', null)
  }
}

export const getters = {
    username: state => {
      if (state.user && state.user.lastName && state.user.firstName && state.user.type != 'guest') {
        return state.user.firstName+" "+state.user.lastName
      }
      else {
        return null
      }
    },
    user: state => {
      console.log(state)

        return state.user
    }
}