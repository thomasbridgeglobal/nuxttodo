import Vue from 'vue'

Vue.filter('lowercase', (key) => {
    return key.toLowerCase()
})