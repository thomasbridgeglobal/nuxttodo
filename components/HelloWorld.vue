<template>
    <div>
    <h1>{{ title }}</h1>
    <NuxtLink to="/todo">Todo</NuxtLink>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
          title: 'Hello World'
      }
  }
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
