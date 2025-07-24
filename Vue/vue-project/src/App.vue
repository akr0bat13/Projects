<template>
  <div class="app">
    <Button @click="showModal = true">Создать пост</Button>
    <Modal v-model:show="showModal" >
      <PostForm @create="createPost"/>
    </Modal>
    <PostList :posts="posts" @remove="removePost"/>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

export default {
  components: {
    PostList,
    PostForm
  },

  data() {
    return {
      posts:[
        {id: 1, title: 'title 1', body: 'body 1'},
        {id: 2, title: 'title 2', body: 'body 2'},
        {id: 3, title: 'title 3', body: 'body 3'}
      ],
      showModal: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.showModal = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>

<style>
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