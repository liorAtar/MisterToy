<!-- <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {},
    created() {
      this.loadToys
    }
  }
</script> -->

<script>
  import {RouterLink, RouterView} from 'vue-router';
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    created() {
      this.$store.dispatch({type: 'loadToys'});
    },
  };
</script>


<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/toy">toys</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
