import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const Login = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const { myUser, setMyUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('myUser'));
    if (storedUser) {
      setMyUser(storedUser);
      navigate('/');
    }
  }, [setMyUser, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateIdInstance(idInstance) && validateApiTokenInstance(apiTokenInstance)) {
      // сохраняем данные в локальное хранилище
      const user = { id: idInstance, apiToken: apiTokenInstance };
      localStorage.setItem('myUser', JSON.stringify(user));
      setMyUser(user);
      navigate('/');
    } else {
      alert('Invalid input. Please enter a valid ID and API token.');
    }
  };

  const validateIdInstance = (value) => {
    return /^\d{10}$/.test(value);
  };

  const validateApiTokenInstance = (value) => {
    return /^[a-zA-Z0-9]{50}$/.test(value);
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="./whatsapp-logo.svg" alt="logo" />
        <p className="logo_name">WhatsApp Web</p>
        <form className='input_form' onSubmit={handleSubmit}>
          <label htmlFor="idInstance">ID Instance:</label>
          <input
            type="text"
            id="idInstance"
            value={idInstance}
            onChange={(event) => setIdInstance(event.target.value)}
          />
          <label htmlFor="apiTokenInstance">API Token Instance:</label>
          <input
            type="text"
            id="apiTokenInstance"
            value={apiTokenInstance}
            onChange={(event) => setApiTokenInstance(event.target.value)}
          />
          <button type="submit" className="login_btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;