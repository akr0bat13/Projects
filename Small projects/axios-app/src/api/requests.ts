import axios from 'axios'

const FIRST_REQUEST = 'https://jsonplaceholder.typicode.com'

const firstApiAxios = axios.create({
  baseURL: FIRST_REQUEST,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
})
const secondApiAxios = axios.create({
  baseURL: FIRST_REQUEST,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
})

type Post = {
  id: string
  userId: string
  title: string
  body: string
}

export const getPosts = async () => {
  try {
    const res = await firstApiAxios.get<Post>(`/posts`)
    console.log(res.data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data.errText, 'error')
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const createPosts = async () => {
  try {
    const res = await secondApiAxios.post(`/posts`, {
      body: 'asd',
      title: '',
    })
  } catch (error) {}
}

firstApiAxios.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (error) => {
    console.log(error)
    return error
  }
)
firstApiAxios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return error
  }
)
