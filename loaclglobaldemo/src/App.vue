<template>
  <div id="app">
    <!-- main.js에 전역으로 등록했기 때문에 아래에서 아무것도 쓰지 않고 바로 사용할 수 있음 -->
    <child-component></child-component>
    <my-article></my-article>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ChildComponent from './components/ChildComponent.vue'
import MyArticle from './components/MyArticle.vue'

export default {
  name: 'app',
  // 지역 컴포넌트는 app.vue에 등록해야한다.
  components: {
    'child-component' : ChildComponent,
    'my-article' : MyArticle 
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
