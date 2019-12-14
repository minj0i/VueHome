<template>
  <div id="app">
    Message : {{ name }}
    <child-component @sentMessage="receivemessage"></child-component>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
  data() {
    return {
      name : 'emitdemo'
    }
  },
  components: {
    ChildComponent
  },
  methods : {
    receivemessage(msg) {
      this.name = msg;
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
