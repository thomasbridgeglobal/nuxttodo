import shop from '@@/api/shop'

export default {
    checkout(context){
        shop.buyProducts(
            context.state.cart,
            () => {
                context.commit('emptyCart')
                context.commit('setCheckoutStatus' , 'success')
            },
            () => {
                context.commit('setCheckoutStatus' , 'fail')
            }
        )
    }

}