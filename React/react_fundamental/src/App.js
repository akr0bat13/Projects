import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Pagination from './components/Pagination/Pagination'
import PostsList from './components/PostsList'
import SelectComponent from './components/Select/SelectComponent'
import PostService from './components/src/api/PostService'
import { useFetching } from './hooks/useFetching'
import { getPageCount } from './utils/pages'

function App() {
  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    }
  )

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  // async function fetchPosts() {
  //   const response = await PostService.getAll()
  //   setPosts(response.data)
  // }

  return (
    <div className="App">
      <SelectComponent
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка по"
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      <hr style={{ margin: '15px 0' }} />
      {postError && <h1>Ошибка</h1>}
      {isPostsLoading ? (
        <Loading />
      ) : (
        <PostsList posts={posts} remove={removePost} />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  )
}

export default App
