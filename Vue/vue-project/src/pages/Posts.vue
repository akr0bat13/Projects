<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import PagePagination from '@/components/PagePagination'
import axios from 'axios'

export default {
  components: {
    PostList,
    PostForm,
    PagePagination
  },

  data() {
    return {
      posts:[],
      showModal: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.showModal = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      this.isPostsLoading = true
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data

      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]

      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    selectedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.selectedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<template>
  <div class="posts">
    <div class="posts-buttons">
      <Button @click="showModal = true">Создать пост</Button>
      <div class="posts-buttons-filtration">
        <Input v-model="searchQuery" placeholder="Поиск.."/>
        <Select v-model="selectedSort" :options="sortOptions" />
      </div>
    </div>
    <Modal v-model:show="showModal" >
      <PostForm @create="createPost"/>
    </Modal>
    <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading"/>
    <div v-else>Идет загрузка...</div>
    <div class="observer" v-intersection="loadMorePosts"></div>
    <!-- <PagePagination :totalPages="totalPages" :page="page" @changePage="changePage"/> -->
  </div>
</template>

<style>


  .posts-buttons {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }

  .posts-buttons-filtration {
    display: flex;
    gap: 15px;
    align-items: center;
  }
</style>