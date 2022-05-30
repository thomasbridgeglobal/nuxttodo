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
        <AddItem />
        <ItemsComponent :items="items"/>        
	</div>
	<!--/container-->
    <Footer />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "ToDoPage",
    data() {
        return {
            title: "Todo List"
        }
    },
    computed: mapGetters({
      items: 'getItems'
    })
}
</script>
