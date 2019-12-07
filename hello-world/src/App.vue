<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 3. Rendering 할 위치에 넣기 -->
    <!-- 원래는 PascalCasing 을 쓰지만 tag는 kebab-casing -->
    <my-header></my-header>
    <my-body></my-body>
    <my-footer/>
  </div>
</template>

<script>
// 1.import 등록
import MyHeader from './components/MyHeader.vue'
import MyBody from './components/MyBody.vue'
import MyFooter from './components/MyFooter.vue'

// 2.component 등록
export default {
  name: 'app',
  components: {
    MyHeader,
    MyBody,
    MyFooter,
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
