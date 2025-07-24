<template>
  <div v-if="posts.length">
    <h3>Список постов</h3>
    <PostItem :post="post" v-for="post in posts" @remove="$emit('remove', post)" :key="post.id"/>
  </div>
  <h2 v-else style="color: red">Список постов пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
  export default {
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style scoped>
</style>