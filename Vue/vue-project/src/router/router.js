import Main from "@/pages/Main.vue"
import Posts from "@/pages/Posts.vue"
import Post from "@/pages/Post.vue"
import PostsWithVuex from "@/pages/PostsWithVuex.vue"
import PostsWithComposition from "@/pages/PostsWithComposition.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/posts_with_vuex',
    name: 'posts_with_vuex',
    component: PostsWithVuex
  },
  {
    path: '/posts_with_composition',
    name: 'posts_with_composition',
    component: PostsWithComposition
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: Post
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router