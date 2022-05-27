//ItemComponent.vue
<template>
    <li :class="{ 'removed': item.checked }">
        <div class="checkbox">
            <label>
            <input type="checkbox" @click="onClick"> <span>{{ item.text }}</span>
            </label>
        </div>
    </li>
</template>

<script>
export default{
    name: 'ItemComponent',
    props: ['item'], 
    methods: {
      onClick(){
        this.$emit('changeStatus', this.item.id)
        // this.checked = true;
      }
    }
}
</script>

<style scoped>
.removed {
    color: gray;
}
.removed span {
    text-decoration: line-through;
}
li {
    list-style-type: none;
}
li span {
    margin-left: 5px;
}
</style>