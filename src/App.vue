<script>
  import {RouterLink, RouterView} from 'vue-router';
  import './assets/css/app-header.css';
  export default {
    created() {
      this.$store.dispatch({type: 'loadToys'});
    },
  };
</script>


<template>
  <header class="app-header">
    <div class="wrapper">
      <h1 class="primary">Toys 🧸</h1>
      <nav class="primary">
        <RouterLink class="link" to="/">Home</RouterLink> | 
        <RouterLink class="link" to="/toy">toys</RouterLink> |
        <RouterLink class="link" to="/toy/chart">Charts</RouterLink> |
        <RouterLink class="link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="main-toy"/>
</template>
