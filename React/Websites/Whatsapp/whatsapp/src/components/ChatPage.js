import React from 'react'
import Sidebar from './Sidebar'
import MessagePerson from './MessagePerson'

function ChatPage() {
  return (
    <div className='chat_page'>
      {/* Sidebar */}
      <Sidebar />

      {/* Message part */}
      <MessagePerson />
    </div>
  )
}

export default ChatPage