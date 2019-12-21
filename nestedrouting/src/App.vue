<template>
  <div id="app">
    <!-- materialize의 적용을 위해 nav class로 바꿔줌 -->
    <nav class="teal">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

nav {
  text-align: right; padding-right: 20px;
}

nav a {
  font-weight: bold;
  color: white;
}


</style>
