<template>
    <div>
    <h1>Items</h1>
    <ul>
    <ItemComponent  v-for="item in items" :key="item.id" :item="item" ></ItemComponent>    
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
    }
}
</script>