import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import { createPosts, getPosts } from './api/requests'
import logo from './logo.svg'

function App() {
  const src = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    axios.get(src).then((data) => setUsers(data.data))
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    axios.post(src, { input }).then((response) => {
      console.log(response.data)
    })
  }

  return (
    <div className="App">
      {users.map((user) => {
        const { name, username } = user
        return (
          <>
            <div className="container">
              Name: {name} and username: {username}
            </div>
          </>
        )
      })}
      <div className="input-container">
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App
