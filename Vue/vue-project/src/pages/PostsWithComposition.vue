
<script>
  import PostForm from "@/components/PostForm";
  import PostList from "@/components/PostList";
  import { usePosts } from "@/hooks/usePosts";
  import useSortedPosts from "@/hooks/useSortedPosts";
  import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
  export default {
    components: {
      PostList, PostForm
    },
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
      }
    },
    setup(props) {
      const {posts, totalPages, isPostsLoading} = usePosts(10);
      const {sortedPosts, selectedSort} = useSortedPosts(posts);
      const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

      return {
        posts,
        totalPages,
        isPostsLoading,
        sortedPosts,
        selectedSort,
        searchQuery,
        sortedAndSearchedPosts,
      }
    }
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