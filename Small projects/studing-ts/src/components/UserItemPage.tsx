import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IUser } from '../types/types'

// interface UserItemPageParams {
//   id: number
// }

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  // const params = useParams<UserItemPageParams>()
  const params = useParams()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      )
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <button>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <p>почта: {user?.email}</p>
      <p>Город: {user?.address.city}</p>
      <p>Ekbwf: {user?.address.street}</p>
    </div>
  )
}

export default UserItemPage
