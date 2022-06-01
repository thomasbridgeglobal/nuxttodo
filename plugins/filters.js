import Vue from 'vue'
import {currency} from '@@/filters/currency'

Vue.filter('lowercase', (key) => {
    return key.toLowerCase()
})

Vue.filter('currency', currency)