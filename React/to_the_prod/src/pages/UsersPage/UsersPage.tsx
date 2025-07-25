import { useEffect, useState } from "react";
import axios from "axios";
import { IUserCard, UserCard } from "../../widgets/UserCard";
import './UsersPage.scss'

export const UsersPage = () => {
  const [users, setUsers] = useState<IUserCard[]>([])
  const [loading, setLoading] = useState(false)

  const getUsers = async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/users', {
      params: {
        _limit: 12,
        _page: 1
      }
    })
    setUsers(result.data)
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      console.log('scroll');
    })
    setLoading(true)
    try {
      getUsers()

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }

  return <div>
    <h1>Users</h1>
    <div className="users-container">
      {users.map(user =>
        <UserCard key={user.id} {...user} />
    )}
    <div className="green-zone"></div>
    </div>
  </div>;
};