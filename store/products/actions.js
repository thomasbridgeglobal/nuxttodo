import shop from '@@/api/shop'
export default {
    fetchProducts(context){
        // return new Promise((resolve) => {
            shop.getProducts(products => {
                context.commit('setProducts', products)
                // resolve()
            })
        // })
    },

    addItemToCart(context, product){
        //  console.log(context.rootState, product);
        // debugger
        if(context.getters.productInStock(product)){
            const cartItem = context.rootState.carts.items.find(item => item.id === product.id)
            if(!cartItem) {
                context.commit('carts/pushProductToCart', product.id, { root: true })
            }
            else {
                context.commit('carts/incrementItemQuantity', cartItem,  { root: true })
            }
            context.commit('decrementProductQuantity', product)
        }
    }


}