<template>
  <div v-if="posts.length">
    <h3>Список постов</h3>
    <TransitionGroup name="post-list">
      <PostItem :post="post" v-for="post in posts" @remove="$emit('remove', post)" :key="post.id"/>
    </TransitionGroup>
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
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.4s ease;
  }

  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .post-list-move {
    transition: transform 0.4s ease;
  }

</style>