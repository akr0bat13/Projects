import React from 'react'
import image from '../assets/images/user.svg'
import { useNavigate } from 'react-router-dom';

const UserProfile = ({id, name, icon}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chats/${id}`);
  };

  return (
    <div className='user_profile' key={id} onClick={handleClick}>
      {/* img */}
      <img src={icon ? icon : image} alt="avatar" />
      {/* name */}
      <p className='user_name'>{name}</p>
    </div>
  )
}

export default UserProfile