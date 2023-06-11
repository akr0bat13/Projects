import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import avatar from '../assets/images/people/person_1.jpg'
import micro from '../assets/images/micro.svg';
import send from '../assets/images/send_message.svg';
import axios from 'axios';

const MessagePerson = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const recipientId = '79260032233@c.us'

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendMessage = async () => {
    if (inputValue.trim() !== '') {
      const url = 'https://api.green-api.com/wa/send_message';
      const postman_url = 'https://api.green-api.com/waInstance/1101829055/sendMessage/85a49eb504ee4452980c16ba7cda09866fc63ea823164261bb'
      const token = '85a49eb504ee4452980c16ba7cda09866fc63ea823164261bb';
  
      const payload = {
        chatId: recipientId,
        message: inputValue,
      };
  
      try {
        const response = await axios.post(postman_url, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
  
        // Очищаем поле ввода сообщения после отправки
        setInputValue('');
        // Обновляем список сообщений
        getMessages();
  
        // Выводим сообщение об успешной отправке сообщения
        alert('Сообщение отправлено!');
      } catch (error) {
        console.error(error);
        // Выводим сообщение об ошибке отправки сообщения
        alert('Ошибка отправки сообщения!');
      }
    }
  };

  const getMessages = async () => {
    const url = 'https://api.green-api.com/wa/send_message';
    const postman_url = 'https://api.green-api.com/waInstance/1101829055/sendMessage/85a49eb504ee4452980c16ba7cda09866fc63ea823164261bb'
    const token = '85a49eb504ee4452980c16ba7cda09866fc63ea823164261bb';

    const params = {
      phone: recipientId,
    };

    try {
      const response = await axios.get(postman_url, {
        params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Получаем сообщения при загрузке компонента
    getMessages();
  }, []);

  return (
    <div className="chat_container">

      {/* chat header */}
      <div className="chat_header">
        <div className="chat_user_info">
          <div className="user_img">
            <img src={avatar} alt="" />
          </div>
          <p className='user_name'>{'name'}</p>
        </div>
      </div>

      {/* chat display */}
      <div className="chat_display">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      {/* chat input */}
      <footer className="footer">
        <div className="footer_context">
          <input
            className='footer_input'
            type="text"
            placeholder='Say Something...'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={sendMessage}>
            <img src={inputValue ? send : micro} alt="" />
          </button>
        </div>
      </footer>

    </div>
  )
}

export default MessagePerson;