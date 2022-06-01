export default {
    getAvailableProducts(state){
        return state.items
    },

    productInStock(){
        return product => product.inventory > 0
    }
}