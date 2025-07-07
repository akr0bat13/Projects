
<template>
  <form @submit.prevent>
      <h4>Создание поста</h4>
      <input class="input" type="text" placeholder="title" v-model="post.title">
      <input class="input" type="text" placeholder="description"  v-model="post.description">

      <button @click="addPost">Submit</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },

  methods: {
    addPost() {
      this.post.id = Date.now(),
      this.posts.push(newPost)
      this.title = ''
      this.description = ''
    },
  }
}
</script>

<style lang="scss" scoped>
  .input {
    display: block;
    margin: 10px 0;
    border: 2px solid #ccc;
  }
</style>