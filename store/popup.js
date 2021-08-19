export const state = () => ({
    isVisible: false,
    modalMode: '',
    props : null
})

export const getters = {
    isVisible: (state) => state.isVisible,
    getMode: (state) => state.modalMode,
    getProps : (state) => state.props
}

export const actions = {
    show: ({ commit }) => {
        return new Promise((resolve) => {
            commit('show')
            resolve()
        })
    },
    hide: ({ commit }) => {
        return new Promise((resolve) => {
            commit('hide')
            resolve()
        })
    },
    changeMode: ({ commit }, {mode, props} ) => {

        return new Promise((resolve) => {
            commit('changemode', {mode, props})
            resolve()
        })
    }
}

export const mutations = {
    show: (state) => {
        state.isVisible = true
    },
    hide: (state) => {
        state.isVisible = false
        state.modalMode = ''
    },
    changemode: (state, {mode, props}) => {
        state.modalMode = mode
        state.props = props
    }
}