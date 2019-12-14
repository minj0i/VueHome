<template>
  <div id="app">
    <child-component v-bind:ran_city="randomCity">
      <div slot="best">
        <figure>
          <img src="@/assets/images/city1.jpg">
          <figcaption> Seoul--1</figcaption>
        </figure>
      </div>
      <div slot="footer">
        <footer>
          <p>&copy; All Right Reserved</p>
        </footer>
      </div>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
  components: {
    ChildComponent
  },
  data() {
    return {
      cities : [
        {pic: require('@/assets/images/city1.jpg'), cityname:'Seoul1'},
        {pic: require('@/assets/images/city2.jpg'), cityname:'Seoul2'},
        {pic: require('@/assets/images/city3.jpg'), cityname:'Seoul3'}
      ]
    }
  },
  computed : {
    randomCity : function() {
      return this.cities[Math.floor(Math.random() * this.cities.length)];
    }
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
