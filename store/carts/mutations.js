export default {

    pushProductToCart(state, id) {
        // console.log(id);
        state.items.push({
            id,
            qty: 1
        })
    },

    incrementItemQuantity(state, cartItem) {
        cartItem.qty++
    },


    emptyCart(state) {
        state.items = []
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    }

}