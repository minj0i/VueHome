<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>{{ name}}</h1>
    <child-component  v-bind:childmessage="msg"></child-component>
  <!-- 2단계 -->
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
  components: {
    ChildComponent
  },
  //함수로 써야 함
  data() {
    return {
      name : 'Component간 통신(상위에서 하위로)',
      msg : '하위에게 전달할 메세지',
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
