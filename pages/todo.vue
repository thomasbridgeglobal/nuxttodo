<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <Header />
    <!--Container-->
	<div class="container w-full md:max-w-3xl mx-auto pt-20">
        <h1>{{ title | lowercase }}</h1>
        <AddItem @add="addItem"/>
        <ItemsComponent :items="items" @changeStatus="onChangeStatus"/>
	</div>
	<!--/container-->
    <Footer />
  </div>
</template>

<script>

// import _ from 'underscore'
const _ = require('underscore');
const { v4: uuidv4 } = require('uuid');


export default {
    name: "ToDoPage",
    data() {
        return {
            title: "Todo List",
            // items: [{ id: "iid", text: 'Bananas', checked: true },{ text: 'Apples', checked: false }]
            items: []
        };
    },
    methods: {
        addItem(text){
            this.items.push({
                id: uuidv4(),
                text,
                checked: false
            })
        },
        onChangeStatus(id){
            // const index = this.items.findIndex(item => item.id === id);
            // this.items[index].checked = true;
            _.findWhere(this.items, { id }).checked = true
        }
    }
}
</script>
