<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <div class="inline-block top-auto text-teal-800 float-center rounded-full px-2"><a href="/" class="align-middle"><RouterLink to="/">Home</RouterLink></a></div>
          <div class="inline-block top-auto text-teal-800 float-center rounded-full mx-1 px-2"><a href="/about" class="align-middle"><RouterLink to="/about">About</RouterLink></a></div>
        </nav>
      </div>
    </header>
  </div>
  

  <RouterView />
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
