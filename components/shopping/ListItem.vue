<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.title }},  {{ product.price| currency }} {{ product.inventory }}
                <button
                 @click="addItemToCart(product)"
                 >add to cart</button>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'


export default{
    name: 'ShoppingListItem',
    computed: mapGetters({
        products: 'products/getAvailableProducts'
    }),
    // computed: {
    //     products(){
    //         return this.$store.getters.getAvailableProducts
    //     },

    //     productInStock(){
    //         return this.$store.getters.productInStock
    //     }
    // },
    created(){
        this.$store.dispatch('products/fetchProducts').then(() => {
            this.loading = false
        })
    },
    methods: {
        addItemToCart(product){
            this.$store.dispatch('products/addItemToCart', product)
        }
    }
}
</script>