import Cookies from 'js-cookie'
export const state = () => ({
  items: [],
  discountCode: {
    type:null,
    amount:null,
    minAmount: null
  }
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setDiscountCode(state, discountCode) {
    state.discountCode = discountCode
  },
  removeDiscountCode(state) {
    state.discountCode = 
    {
      type: null,
      amount: null,
      minAmount: null
    }
  },
  add(state, item) {
    const record = state.items.find(i => i.id === item.id)
    if (!record) {
      var data = item;
      data.itemQuantity = 1
      state.items.push(data);
    } else {
      record.itemQuantity++
    }
  },
  remove(state, item) {
    const record = state.items.find(i => i.id === item.id && i.conditionnement === item.conditionnement)

    if (record.itemQuantity > 1) {
      record.itemQuantity--
    } else {
      const index = state.items.findIndex(i => i.id === item.id && i.conditionnement === item.conditionnement)
      state.items.splice(index, 1)
    }
  },
  delete(state, item) {
    const index = state.items.findIndex(i => i.id === item.id && i.conditionnement === item.conditionnement)
    state.items.splice(index, 1)
  },
  emptyList(state) {
    state.items = []
  },
}

export const getters = {
  items: state => {
    return state.items
  },
  discountCode: state => {
    return state.discountCode
  },
  itemPrice: (state) => (item) => {
    var optionLivraison = Cookies.get('optionLivraison') ? JSON.parse(Cookies.get('optionLivraison')) : {mode: "retrait"};
    var price = 0
    if(optionLivraison.mode == "retrait") {
      price = parseFloat(item.fields.Prix.toString().replace(/,/, '.'));
    }
    return parseFloat(price).toFixed(2)
  },
  price: (state) => {
    var optionLivraison = Cookies.get('optionLivraison') ? JSON.parse(Cookies.get('optionLivraison')) : {mode: "retrait"};
    var price = 0
    for (let i = 0; i < state.items.length; i++) {
      const item = state.items[i];
        if(optionLivraison.mode == "retrait") {
          price += parseFloat(item.fields.Prix.toString().replace(/,/, '.')) * item.itemQuantity;
        }
    }
    return parseFloat(price).toFixed(2)
  },
  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.itemQuantity,
      0
    )
  }
}