<template>
  <v-app>
    <post-form />
    <post-array :posts="posts" />
  </v-app>
</template>

<script>
import PostArray from '@/components/PostArray.vue'
import PostForm from '@/components/PostForm.vue'




export default {
  components: {
    PostArray,
    PostForm
  },
  data() {
    return {
      posts: [
        {id:1, title: "post 1", description: "desc 1"},
        {id:2, title: "post 2", description: "desc 2"},
        {id:3, title: "post 3", description: "desc 3"}
      ],
    }
  },
  methods: {
    addPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        description: this.description
      }
      this.posts.push(newPost)
      this.title = ''
      this.description = ''
    },
    inputTitle(e) {
      this.title = e.target.value
    },
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
