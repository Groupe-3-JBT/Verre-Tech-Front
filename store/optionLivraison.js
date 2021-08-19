import Cookies from 'js-cookie'

// Defining an empty state
export const state = () => ({
  optionLivraison: {}
})

export const mutations = {
  setOptionLivraison(state, optionLivraison) {
    state.optionLivraison = optionLivraison
    Cookies.set('optionLivraison', optionLivraison)
  },
  setLivraisonMode(state, mode){
    if(mode == 'livraison' || mode=='retrait'){
      if(Cookies.get('optionLivraison') == undefined){
        
        optionLivraison = {
          mode:mode,
          zone : null
                }
      }else{
      var optionLivraison = JSON.parse(Cookies.get('optionLivraison')); 

      }
         optionLivraison.mode = mode;

      state.optionLivraison = optionLivraison;
      Cookies.set('optionLivraison', optionLivraison)

    }
  },
  removeOptionLivraison(state) {
    state.optionLivraison = {}
    Cookies.set('optionLivraison', {})
  }
}

export const getters = {
    optionLivraison: state => {
        return state.optionLivraison
    }
}