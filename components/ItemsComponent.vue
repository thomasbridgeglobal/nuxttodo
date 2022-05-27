<template>
    <div>
    <h1>Items</h1>
    <ul>
    <ItemComponent  v-for="item in items" :key="item.id" :item="item" @changeStatus="onChangeStatus"></ItemComponent>    
    </ul>
    </div>
</template>
<script>
export default{
    name: 'ItemsComponent', 
    props: {
        items: {
            type: Array,
            default(){
                 return []
            }
        }
    },
    methods: {
        onChangeStatus(id){            
            this.$emit('changeStatus', id)
        }
    }
}
</script>