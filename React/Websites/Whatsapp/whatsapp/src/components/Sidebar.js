import React, { useEffect, useState } from 'react'
import { FaComment, FaSearch, FaSignOutAlt } from "react-icons/fa";
import UserProfile from './UserProfile';
import {people} from '../data'
import { useUserContext } from '../context/user_context';

const Sidebar = () => {

  const { logout, myUser } = useUserContext()
  const [allUsers, setAllUsers] = useState(people)
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    const filteredUsers = people.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    setAllUsers(filteredUsers)
  }, [searchInput])

  return (
    <div className='sidebar'>
      {/* sidebar-header */}
      <div className="sidebar_header">
        <div className="sidebar_header_img">
          <img className='user_img' src={myUser.picture} alt="user" />
        </div>
        <div className="sidebar_header_btn">
          <FaComment />
          <FaSignOutAlt onClick={logout}/>
        </div>
      </div>
      {/* sidebar-search */}
      <div className="search">
        <div className="search_img">
          <FaSearch />
        </div>
        <input className='search_input' type="text" placeholder='Search or start a new chat' value={searchInput} onChange={handleSearch} />
      </div>
      
      {/* sidebar-chatlist */}
      <div className="sidebar_chat_list">
        {allUsers.map( (user) => {
          return(
            <UserProfile {...user} key={user.id} name={user.name} icon={user.icon}/>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar