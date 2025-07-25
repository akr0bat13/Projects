import { useEffect, useRef, useState } from "react";
import axios from "axios";
import './UsersPage.scss'

import { UserCard, type IUserCard } from "../UserCard";

export const UsersPage = () => {
  const [users, setUsers] = useState<IUserCard[]>([])
  const [pageCounter, setPageCounter] = useState(1)
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const getUsers = async () => {
    setLoading(true);
    try {
      const result = await axios('https://jsonplaceholder.typicode.com/users?', {
        params: {
          _limit: 9,
          _page: pageCounter
        }
      });
      setUsers(prev => [...prev, ...result.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, [pageCounter]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading) {
        setPageCounter(prev => prev + 1);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [loading]);

  if (loading && pageCounter === 1) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      <div className="users-container">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
        <div className="green-zone" ref={ref}></div>
        {loading && <p>Loading more users...</p>}
      </div>
    </div>
  );
};