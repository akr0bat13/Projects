import { useEffect, useState } from 'react'
import '../assets/css/HomePage.css'
import RepoCart from '../components/RepoCart'
import { useDebounce } from '../hooks/debounce'
import {
  useLazyGetUserPropsQuery,
  useSearchUsersQuery,
} from '../store/github/github.api'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)

  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  })

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserPropsQuery()

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(!dropdown)
  }

  return (
    <div className="container">
      {isError && <p>Some Error</p>}
      <div className="search-input">
        <input
          className="input-search"
          type="text"
          placeholder="Search for Github username..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {dropdown && (
          <ul className="dropdown">
            {isLoading && <h4 className="dropdown-loading">Loading</h4>}
            {data?.map((user) => (
              <li
                className="dropdown-user"
                key={user.id}
                onClick={() => clickHandler(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
        <div className="content">
          {areReposLoading && <p className="dropdown-loading">Loading</p>}
          {repos?.map((repo) => (
            <RepoCart repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
