export default {

    cartItems(state, getters, rootState){
        return state.items.map((item) => {
            const product = rootState.products.items.find(product => product.id === item.id)
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                qty: item.qty
            }
        });
    },

    cartTotal(state, getters){
        return getters.cartItems.reduce((total, product) => total + product.price * product.qty, 0)
    }

}
