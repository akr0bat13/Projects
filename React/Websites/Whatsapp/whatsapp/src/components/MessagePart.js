import React from 'react'
import keep_connected from '../assets/images/keep_connected.svg'

const MessagePart = () => {
  return (
    <section className="message">
      <img src={keep_connected} alt="keep connected" />
      <h1 className='message_title'>Keep your phone connected</h1>
      <p className='message_text'>Whatsapp  connects to your phone to sync messages. To reduce data usage. connect your phone to Wi-Fi.</p>
    </section>
  )
}

export default MessagePart