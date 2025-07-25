<script>
  import { RouterLink } from 'vue-router';
  export default {

  }
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo" @click="$router.push('/') ">Vue3</div>
      <div class="navigation">
        <RouterLink to="/posts" class="navigation-link">Посты</RouterLink>
        <RouterLink to="/posts_with_vuex" class="navigation-link">Посты на Vuex</RouterLink>
        <RouterLink to="/posts_with_composition" class="navigation-link">Посты с композицией</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .header {
    height: 50px;
    background-color: rgba(0, 128, 128, 0.5);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1230px;
    margin: 0 auto;
    height: 100%;
  }

  .logo {
    font-size: 20px;
    color: teal;
    cursor: pointer;
  }

  .navigation {
    display: flex;
    gap: 10px;

  }

  .navigation-link {
    text-decoration: none;
    color: teal;
  }
</style>