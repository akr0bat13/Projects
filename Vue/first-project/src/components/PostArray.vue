<template>
  <div v-for="post in posts" :key="post.id">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>