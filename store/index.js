import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    // let cart = []
    let optionLivraison = {}
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      user = (parsed.user && JSON.parse(parsed.user)) || null
      optionLivraison = (parsed.optionLivraison && JSON.parse(parsed.optionLivraison)) || {}
    }

    commit('auth/setUser', user)
    commit('optionLivraison/setOptionLivraison', optionLivraison)
  }
}