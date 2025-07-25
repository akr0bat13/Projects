<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import PagePagination from '@/components/PagePagination'
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    PostList,
    PostForm,
    PagePagination
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
}
</script>

<template>
  <div class="posts">
    <div class="posts-buttons">
      <Button @click="showModal = true">Создать пост</Button>
      <div class="posts-buttons-filtration">
        <Input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск.."
        />
        <Select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
        />
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