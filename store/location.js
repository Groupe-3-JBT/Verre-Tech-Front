
export const state = () => ({
  location: {},
  deliveryAddress: {},
})

export const mutations = {
  setLocation(state, location) {
    state.location = location
  },
  removeLocation(state) {
    state.location = {}
  },
  setDeliveryAddress(state, deliveryAddress){
    state.deliveryAddress = deliveryAddress;
  }
}

export const getters = {
  location: state => {
    return state.location
  },
  deliveryAddress: state =>{
    return state.deliveryAddress
  }
}