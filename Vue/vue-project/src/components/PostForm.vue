<template>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <Input
        placeholder="Название"
        v-model="post.title"
      />
      <Input
        placeholder="Описание"
        v-model="post.body"
      />
      <Button @click="createPost">Создать</Button>
    </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid teal;
}

</style>