<template>
  <div id="app">
    <products></products>
    <product-detail></product-detail>
  </div>
</template>

<script>
import Products from './components/Products.vue'
import ProductDetail from './components/ProductDetail.vue'

export default {
  name: 'app',
  components: {
    Products, ProductDetail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
