<template>
  <div class="post-list">
    <div>
      <div><strong>ID: </strong> {{ post.id }}</div>
      <div><strong>Название: </strong> {{ post.title }} </div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
    <div class="post-btns">
      <Button @click="$router.push('/posts/' + post.id)">Открыть</Button>
      <Button @click="$emit('remove', post)">Удалить</Button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .post-list {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post-btns {
    display: flex;
    gap: 10px;
  }
</style>