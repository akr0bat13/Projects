<script>
import Navigation from '@/components/Navigation.vue';
import { RouterView } from 'vue-router';

  export default {
    components: {
      Navigation,
    }
  }
</script>

<template>
  <Navigation />
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
    max-width: 1240px;
    margin: 0 auto;
  }
</style>