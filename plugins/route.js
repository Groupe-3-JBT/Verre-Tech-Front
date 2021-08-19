export default async ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        if (to.name == 'checkout') {
            if (app.store.getters["localStorage/items"].length > 0 && (app.store.getters["optionLivraison/optionLivraison"].mode == 'retrait' || (app.store.getters["optionLivraison/optionLivraison"].mode == 'livraison' && app.store.getters["localStorage/price"]() >= app.store.getters["optionLivraison/optionLivraison"].zone.minAmount))) {
                next()
            }
            else {
                next(false)
            }
        }
        else if(to.name == "commandes") {
            if (app.store.getters['auth/username']) {
                next()
            }
            else {
                next(false)
            }
        }
        else {
            next()
        }
        
    })
 }