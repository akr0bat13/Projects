import React from 'react'
import Sidebar from './Sidebar'
import MessagePart from './MessagePart'

const HomePage = () => {
  return (
    <div className="home">
      <div className="home_container">
        <Sidebar />
        <MessagePart />
      </div>
    </div>
  )
}

export default HomePage