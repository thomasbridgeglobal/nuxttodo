<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.title }}, price:  {{ product.price| currency }} - qty: {{ product.qty }}
            </li>
        </ul>
        <p>Total: {{ total | currency }}</p>
        <button @click="checkout()" v-if="products.length > 0"> checkout</button>
        <p v-if="$store.state.carts.checkoutStatus">{{ $store.state.carts.checkoutStatus }}</p>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "ProductListCart",
    computed: mapGetters({
        products: 'carts/cartItems',
        total: 'carts/cartTotal'
    }),
    methods: {
        checkout(){
            this.$store.dispatch('carts/checkout')
        }
    }
}
</script>