<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <Header />
    <!--Container-->
	<div class="container w-full md:max-w-3xl mx-auto pt-20">
        <h1>{{ title  }}</h1>
        <ShoppingListItem />
	</div>
	<!--/container-->
    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'


export default {
    name: "ShoppingList",
    computed: mapState({
        title: state => state.title
    })
}
</script>
