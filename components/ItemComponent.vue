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
import {mapActions} from 'vuex';

export default{
    name: 'ItemComponent',
    props: ['item'], 
    methods: {
        ...mapActions(['changeStatus']),
        onClick(){        
            this.changeStatus(this.item.id)
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