export default {
    setProducts(state, products) {
        state.items = products
    },

    decrementProductQuantity(state, product) {
        product.inventory--
    }

}
