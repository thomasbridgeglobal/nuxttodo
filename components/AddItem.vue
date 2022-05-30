<template>
    <div class="input-group">
        <input @keyup.enter="addItem" v-model="newItem" placeholder="add item" type="text" class="form-control">
        <span class="input-group-btn">
            <button @click="addItem" class="btn btn-default"
            type="button">Add!</button>
        </span>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default{
    name: "AddItem", 
    data(){
        return {
            newItem: ''
        }
    },
    methods: {
        ...mapActions(['addItemToList']),
        addItem(){
            if(this.newItem !== '') {
                this.addItemToList(this.newItem)
                this.newItem = ''
            }
        }
    }
}
</script>