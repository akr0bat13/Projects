import React, { useEffect, useState } from 'react';
import { FaComment, FaSearch, FaSignOutAlt } from "react-icons/fa";
import UserProfile from './UserProfile';
import { people } from '../data';
import { useUserContext } from '../context/user_context';
import Modal from './ModalWindow';
import image from '../assets/images/user.svg'

const Sidebar = () => {
  const { myUser, setMyUser } = useUserContext();
  const [allChats, setAllChats] = useState(people);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCreateChat = (recipientNumber, recipientName) => {
    const newChat = {
      id: Math.floor(Math.random() * 10000),
      name: recipientName,
      icon: '',
      lastMessage: '',
      recipientNumber: recipientNumber,
      messages: []
    };
    setAllChats([...allChats, newChat]);
    setShowModal(false);
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleLogout = () => {
    localStorage.removeItem('myUser');
    setMyUser(null);
  };

  return (
    <div className='sidebar'>
      {/* sidebar-header */}
      <div className="sidebar_header">
        <div className="sidebar_header_img">
          <img className='user_img' src={image} alt="user" />
          <div className="user_name">{`id: ${myUser.id}`}</div>
        </div>
        <hr/>
        <div className="sidebar_header_btn">
          <FaComment onClick={() => setShowModal(true)} />
          <FaSignOutAlt onClick={handleLogout} />
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
        {allChats
            .filter((chat) => chat.name.toLowerCase().includes(searchInput.toLowerCase()))
            .map((chat) => {
              return (
                <UserProfile {...chat} key={chat.id} name={chat.name} icon={chat.icon} onClick={() => handleChatClick(chat)} />
              );
            })
        }
      </div>

      {/* modal */}
      {showModal && (
        <Modal title="Create new chat" onClose={() => setShowModal(false)} onSubmit={handleCreateChat} />
      )}
      
    </div>
  );
};

export default Sidebar;