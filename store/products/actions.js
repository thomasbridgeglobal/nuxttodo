import shop from '@@/api/shop'
export default {
    fetchProducts(context){
        // return new Promise((resolve) => {
            shop.getProducts(products => {
                context.commit('setProducts', products)
                // resolve()
            })
        // })
    }

}